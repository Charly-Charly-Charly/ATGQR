import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React,{ useEffect,useState} from "react";


function SingleTable () {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [nameEvento, setNameEvento] = useState(null);
  const [company, setCompany] = useState(null);


  const ID_evento = window.location.href.match(/\d+$/);

  useEffect(() =>{
    const ID_evento_num = ID_evento ? ID_evento[0] : null;
    if (ID_evento_num) {
      axios.get(`http://localhost:3000/event/`).then(res=>{
        const info=res.data;
        const resinfo=info.find(findEvent);
        function findEvent(info){
          return info.id_event.toString() === ID_evento_num;
        }
        setNameEvento(resinfo.name_evento);
        setCompany(resinfo.Empresa);
      });
    }
  },[ID_evento])


  useEffect(() =>{
    axios.get(`http://localhost:3000/QRevent/${ID_evento}`)
    .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
  },[])


  const navigate = useNavigate();


  return (
    <div className=" h-full w-full flex flex-col content-center pb-32">
      <div className="flex flex-row mb-5 items-end">
      <p className="md:text-6xl text-2xl font-display font-bold">{nameEvento}</p>
      <p className="md:text-4xl text-xl font-display"> / </p>
      <p className="md:text-4xl text-xl font-display">{company}</p>
      </div>
<div className="overflow-auto overscroll-auto ">
<table className="w-full min-w-max table-auto  ">
            <thead>
                <tr className="font-normal bg-clr1   leading-none   border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-left">

                    <th className="text-white pl-2 py-3">Nombre</th>
                    <th className="text-white py-3">Nacionalidad</th>
                    <th className="text-white py-3">Información</th>
                    <th className="text-white py-3">Validado</th>

                    {/* <th className="text-white py-3">Editar</th> */}
                    <th className="text-white py-3 w-1/6">Estado</th>

                </tr>
            </thead>
            <tbody>
                {records.map((d,i)=>(<tr key={i}>
                        <td className="text-left p-1 pl-2 border-b text-black border-gray">{d.p_name}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.p_nation}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.p_info}</td>
                        <td className="text-left p-1 border-b text-black border-gray">{d.validateat}</td>
                        {/* <td className="text-left p-1 border-b text-black border-gray"> <button className="bg-blackh text-white px-2 py-1" onClick={()=>navigate(`/edit/${d.id_qr}`)}>Editar</button> </td> */}
                        <td className="text-left p-1 border-b text-black border-gray">{d.estado == 1 ? "️✅ Asistió" : " ❌ No Asistió"}</td>


                        </tr>))
                }
            </tbody>
        </table>
</div>
      
    </div>
  );
}

export default SingleTable;
