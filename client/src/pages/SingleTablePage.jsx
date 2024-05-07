
import SingleTable from "../components/SingleEventTable";
import { Navigate } from "react-router-dom";

function SingleTablePage() {
  
    return(
        <div >
              <a id="facebook" href="/Events" class=" duration-500 cursor-pointer w-12 flex items-center justify-center  h-12 text-2xl rounded-full active:bg-gray hover:text-white text-blue-600 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="margin-auto" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>

  </a>



             <SingleTable />
        </div>
   )
}

export default SingleTablePage;
