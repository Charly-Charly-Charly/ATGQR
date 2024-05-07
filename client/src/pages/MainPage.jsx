import React from "react";
import EventTable from "./EventsPage";
import { Link } from "react-router-dom";

function MainPage(){
return(
    <div>
<h1 className="font-black text-6xl">Bienvenido</h1>
 <div className="flex flex-row">
    <div className="m-3"> <EventTable/>  <button>
          <Link to="/Events" className="bg-clr2 hover:bg-clr2H transition duration-500 text-white font-bold py-2 px-4 rounded">Ver todos los eventos</Link>
        </button></div>
    <div className="m-3 flex flex-col">        <button>
          <Link to="/createvent" className="bg-clr2 hover:bg-clr2H transition duration-500 text-white font-bold py-2 px-4 rounded">Crear evento Nuevo</Link>
        </button></div>

 </div>
    </div>
)

}

export default MainPage;