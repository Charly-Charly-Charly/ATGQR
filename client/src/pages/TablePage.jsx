import React from "react";
import TaskTable from "../components/Table"
import TableLog from "../components/TableLogs";
const TablePage=()=>{

     function refreshPage() {
          window.location.reload(false); 
        }
      



     return(
          <div>
               <div className="flex flex-row items-center mb-7">
               <button className="bg-clr2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={refreshPage}> <span class="material-symbols-outlined">
cached
</span> </button>
               <h2 className="text-3xl ml-6 font-bold">Asistencia</h2>
               </div>
              
               <TaskTable />
               <div className="h-36"></div>
          </div>
     )
}
export default TablePage;