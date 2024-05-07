import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import { useTasks } from "../context/TaskProvider";
import Swal from 'sweetalert2'
import axios from 'axios';


function Scan() {
  const [scanResult, setScanResult] = useState(null);
  const { toggleTaskDone } = useTasks();
  const [tasks, setTasks] = useState([]);


  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/tasks/`)
      .then(res => {
        setTasks(res.data);
      });
  }, []);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);

      // Buscar la tarea con la URL coincidente en res.data
      const matchingTask = tasks.find((t) => t.url === result);

      if (matchingTask) {
        console.log(`Estado: ${matchingTask.estado ? "✅ Activo" : "❌ Inactivo"}`);

      } else {
        console.log("URL no encontrada en las tareas.");
      }
    }

    function error(err) {
      console.warn(err);
    }
  }, [tasks]);

    const validation = (task) => {
      
    const matchingTask = tasks.find((t) => t.url === scanResult);
    const handleDone = async (task) => {
      await toggleTaskDone(matchingTask.id);
    };

      handleDone(matchingTask.estado);
      Swal.fire({
        title: 'QR confirmado',
        icon: 'success',
        html: '<button onClick={refreshPage}>Aceptar</button>'
      });


    };


  return (
    <div>
      <h2 className='text-white'>QR burner 2</h2>
      <h4 className='text-white'>{scanResult ? `Escaneado: ${scanResult}` : ""}</h4>
      {scanResult ? (
        <div className='text-white'>
          <h3 className='text-white'>
            {tasks.map((task) => (task.url === scanResult ? (task.estado ? "✅ Activo" : "❌ Inactivo") : ""))}
          </h3>
          <button
            className="bg-blue-500 m-4 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={validation}
          >
            Validar
          </button>
          <button className='bg-blue-500 m-4 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={refreshPage}>Escanear de nuevo</button>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}

export default Scan;
