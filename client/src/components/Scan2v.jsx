import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import Swal from 'sweetalert2'
import axios from 'axios';
import { createTaskRequest, Validate } from "../api/tasks.api";


  


function Scan() {
  const [scanResult, setScanResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    qr_code: "",
  });

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/QR`)
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
        console.log(matchingTask.p_name)
        console.log(matchingTask.url)
        console.log(matchingTask.id_qr)

      } else {
        console.log("URL no encontrada en las tareas.");
      }
    }

    function error(err) {
      console.warn(err);
    }
  }, [tasks]);

  // const validation = async () => {
  //   try {
  //     const matchingTask = tasks.find((t) => t.url === scanResult);
  
  //     if (!matchingTask) {
  //       throw new Error('No matching task found');
  //     }
  
  //     const toggleTaskDone = async (id_qr) => {
  //       try {
  //         await toggleTaskDoneRequest(id_qr,!matchingTask.estado);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  
  //     await toggleTaskDone(matchingTask.id_qr); // Cambia el estado de la tarea
  
  //     Swal.fire({
  //       title: 'Asistencia confirmada',
  //       icon: 'success',
  //       showConfirmButton: false,
  //       timer: 3000,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };  


  const validationqr = async () => {
    const currentDate = new Date();
    const dateString = currentDate.toString();

      const matchingTask = tasks.find((t) => t.url === scanResult);
      var status = matchingTask.estado;
      console.log(status);
      
      var newstatus = () => {
        if (status === 1) {
          return 0;
        } else {
          return 1;
        }
      }
      
      status = newstatus();
      var definitivestatus=status.toString();
      console.log(status);
      
      Validate(matchingTask.id_qr,definitivestatus,dateString)
      console.log(matchingTask);
      console.log(`Estado: ${matchingTask.estado ? "✅ Activo" : "❌ Inactivo"} ${currentDate}`);
      Swal.fire({
               title: 'Asistencia confirmada',
               icon: 'success',
               showConfirmButton: false,
               timer: 3000,
             });
       
      
  }
  return (
    <div className='flex flex-col items-center'>

      <h4 className='text-blackh font-bold text-lg'>{scanResult ? `QR: ${scanResult}` : ""}</h4>
      {scanResult ? (
        <div className='flex flex-col items-center'>
      <h3 className='text-blackh text-xl font-bold' > {tasks.map((task) => (task.url === scanResult ? (task.p_name) : ""))}
          </h3>
          <h3 className='text-blackh text-xl font-bold' > {tasks.map((task) => (task.url === scanResult ? (task.p_nation) : ""))}
          </h3>
          <h3 className='text-blackh text-xl'>
            {tasks.map((task) => (task.url === scanResult ? (task.estado ? "✅ Asistió" : "❌ Ausente") : ""))}
          </h3>
          <button
            className="bg-clr2 w-full my-4 hover-bg-clr2H text-white font-bold py-2 px-4 rounded"
            onClick={validationqr}
          >
            Validar
          </button>
          <button className='bg-white w-full mx-4 hover-bg-clr2H border-clr2 border-4 text-clr2H font-bold  py-2 px-4 rounded' onClick={refreshPage}>Escanear de nuevo</button>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}

export default Scan;