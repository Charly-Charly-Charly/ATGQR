import React, { useState, useEffect } from 'react';
import {Html5Qrcode} from "html5-qrcode";
import {Html5QrcodeScanner} from "html5-qrcode";
import axios from 'axios';
import Swal from 'sweetalert2';
import {toggleTaskDoneRequest, createTaskRequest } from "../api/tasks.api";
 // Import your API functions

function Scan3() {
  const [scanResult, setScanResult] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    qr_code: "",
  });

  // Refresh page function
  function refreshPage() {
    window.location.reload(false);
  }

  // Fetch tasks on component mount
  useEffect(() => {
    axios.get(`https://vgmf12br-3000.use2.devtunnels.ms/tasks/`)
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Initialize QR code scanner and handle success/error
  Html5Qrcode.getCameras().then(devices => {
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
    if (devices && devices.length) {
      var cameraId = devices[0].id;
      // .. use this to start scanning.
    }
  }).catch(err => {
    // handle err
  });

    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {

  const config = { fps: 10, qrbox: { width: 250, height: 250 } };

  html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

    function success(result) {
      scanner.clear();
      setScanResult(result);

      handleScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

    // Clean up the scanner on component unmount
    return () => {
      html5QrCode.stop()
    };
  }

  // Handle scan result
  const handleScanResult = (result) => {
    const matchingTask = tasks.find((t) => t.url === result);

    if (matchingTask) {
      console.log(`Estado: ${matchingTask.estado ? "✅ Activo" : "❌ Inactivo"}`);
      console.log(matchingTask.Name)

      // Call validation function
      validation(matchingTask);
    } else {
      console.log("URL no encontrada en las tareas.");
    }
  }

  // Validation function
  const validation = (matchingTask) => {
    // Create task if not found
    if (!matchingTask) {
      createTask(scanResult);
    }

    // Toggle task done status
    toggleTaskDone(matchingTask.id);

    // Show success message
    Swal.fire({
      title: 'Asistencia confirmada',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    });
  };

  // Create task function
  const createTask = async (url) => {
    try {
      const response = await createTaskRequest(url);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle task done function
  const toggleTaskDone = async (id) => {
    try {
      const response = await toggleTaskDoneRequest(id, !matchingTask.estado);
      setTasks(tasks.map(task => task.id === id ? response.data : task));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col items-center'>

      <h4 className='text-blackh font-bold text-lg'>{scanResult ? `QR: ${scanResult}` : ""}</h4>
      {scanResult ? (
        <div className='flex flex-col items-center'>
      <h3 className='text-blackh text-xl font-bold' > {tasks.map((task) => (task.url === scanResult ? (task.Name) : ""))}
          </h3>
          <h3 className='text-blackh text-xl'>
            {tasks.map((task) => (task.url === scanResult ? (task.estado ? "✅ Asistió" : "❌ Ausente") : ""))}
          </h3>
          <button
            className="bg-clr2 w-full my-4 hover-bg-clr2H text-white font-bold py-2 px-4 rounded"
            onClick={validation}
          >
            Validar
          </button>
          <button className='bg-white w-full mx-4 hover-bg-clr2H border-clr2 border-4 text-clr2H font-bold  py-2 px-4 rounded' onClick={refreshPage}>Escanear de nuevo</button>
        </div>
      ) : (
        <div id="reader" width="600px"></div>
      )}
    </div>
  );
}

export default Scan3;