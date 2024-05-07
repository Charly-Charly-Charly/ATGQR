import { Link } from "react-router-dom";
import logo from "./content/logo.png"


function Navbar() {
  return (
    <div className="bg-clr1 flex flex-row px-8 py-4 w-full align-center justify-center items-center md:justify-start shadow-xl">
      <div className="w-full md:w-1/2">
      <Link to="/" className="text-white font-bold flex items-center justify-center md:justify-start">
        <img src={logo} alt="logo" className="w-64"/>
      </Link>
      </div>

<div>
      <ul className="hidden md:flex flex-row gap-x-1 w-full justify-end">


        <li>
          <Link to="/Table" className="bg-clr2 hover:bg-clr2H transition duration-500 text-white font-bold py-2 px-4 rounded">Nuestros QRs</Link>
        </li>
        <li>
          <Link to="/Scan2" className="bg-clr2 hover:bg-clr2H transition duration-500 text-white font-bold py-2 px-4 rounded">Scanner</Link>
        </li>

      </ul>
      </div>
    </div>
  );
}

export default Navbar;
