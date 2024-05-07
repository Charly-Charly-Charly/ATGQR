import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React,{ useEffect,useState} from "react";


function EventTable () {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);


  useEffect(() =>{
    axios.get(`http://localhost:3000/event/`)
    .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
  },[])

  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();


  return (
    <>
              <a id="facebook" href="/" class="bg-white duration-500 cursor-pointer w-12 flex items-center justify-center  h-12 text-2xl rounded-full hover:bg-gray hover:text-white text-blue-600 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="margin-auto" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>

  </a>
    <h1 className="text-4xl font-display font-bold" >Eventos</h1>
    <div className="-ml-0 h-full w-full flex content-center m-10 overflow-x-auto">

        <table className="w-full min-w-max table-auto rounded-lg">
            <thead>
                <tr className="font-normal leading-none bg-clr1  p-4 text-left">
                    <th className="text-white py-3 px-2">ID</th>
                    <th className="text-white py-3 ">Nombre del Evento</th>
                    <th className="text-white py-3 ">Empresa</th>
                    <th className="text-white py-3 ">Cantidad de QRs</th>
                    <th className="text-white py-3 ">Enlace</th>


                </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(<tr key={i}>
                        <td className="text-left p-1 border-b text-black border-gray">{d.id_event}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.name_evento}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.Empresa}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.noparticipants}</td>
                        
                        <td className="text-left p-1 border-b text-black border-gray"> <button onClick={() => navigate(`/QRevent/${d.id_event}`)}>➡️</button> </td>
                        </tr>))
                }
            </tbody>
        </table>
    </div>
    </>
  );
}

export default EventTable;
