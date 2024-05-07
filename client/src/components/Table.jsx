import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React,{ useEffect,useState} from "react";


function TaskTable () {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);


  useEffect(() =>{
    axios.get(`http://localhost:3000/tasks/`)
    .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
  },[])

  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="h-full w-full flex content-center">
        <table className="w-full min-w-max table-auto">
            <thead>
                <tr className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-left">
                    <th className="text-black w-4">ID</th>
                    <th className="text-black w-8">QR</th>
                    <th className="text-black">Nombre</th>
                    <th className="text-black">Identificación</th>
                    <th className="text-black">Teléfono</th>
                    <th className="text-black">Correo Electronico</th>
                    <th className="text-black">Organización</th>
                    <th className="text-black">Editar</th>
                    <th className="text-black w-1/6">Estado</th>

                </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(<tr key={i}>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.id}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.url}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.Name}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.identificacion}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.telefono}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.correo}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.organizacion}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50"> <button className="bg-blackh text-white px-2 py-1" onClick={()=>navigate(`/edit/${d.id}`)}>Editar</button> </td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.estado == 1 ? "️✅ Asistió" : " ❌ No Asistió"}</td>


                        </tr>))
                }
            </tbody>
        </table>
    </div>
  );
}

export default TaskTable;
