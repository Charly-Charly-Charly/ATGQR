import { Link } from "react-router-dom";

function BottomNav(){

    return(
    <div className="">

    <div class="fixed z-50 w-80 h-24 max-w-lg mx-3 -translate-x-1/2 bg-clr1 flex flex-row items-center justify-center rounded-full bottom-4 left-1/2 shadow-lg">
    <div class="grid h-full  grid-cols-3 px-5 ">
        <Link to="/scan2" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill='white'><path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h320q45 0 68 38t3 78l-80 160q-11 20-29.5 32T520-520h-81l-11 40h12q17 0 28.5 11.5T480-440v80q0 17-11.5 28.5T440-320h-54l-30 112q-11 39-43 63.5T240-120Zm0-80q14 0 24-8t14-21l78-291h-83l-72 270q-5 19 7 34.5t32 15.5Zm40-400h240l80-160H280q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm480-160-25-54 145-66 24 55-144 65Zm120 280-145-65 25-55 144 66-24 54ZM760-650v-60h160v60H760Zm-360-30Zm-85 160Z"/></svg>
            <p class=" text-white">Scanner</p>
        </Link>

  <Link  to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full">

        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" fill="white" width="40"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>
            <p class="text-white">Inicio</p>

        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

   </Link>


        
        <Link to="/events" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill='white'><path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"/></svg>
            <p class="text-white">Eventos</p>
        </Link>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    </div>
    </div>)
}

export default BottomNav;