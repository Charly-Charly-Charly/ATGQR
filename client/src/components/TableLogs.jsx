import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React,{ useEffect,useState} from "react";


function TableLog() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);


  useEffect(() =>{
    axios.get(`http://localhost:3000/logs/`)
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
    <div className="h-full w-full flex content-center m-10">
        <table className="w-full min-w-max table-auto">
            <thead>
                <tr className="font-normal leading-none opacity-70 border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-left">
                    <th className="text-black">ID</th>
                    <th className="text-black">QR</th>
                    <th className="text-black">Fecha</th>

                </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(<tr key={i}>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.id}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.qr_code}</td>
                        <td className="text-left p-1 border-b text-black border-blue-gray-50">{d.Date}</td>

                        </tr>))
                }
            </tbody>
        </table>
    </div>
  );
}

export default TableLog;