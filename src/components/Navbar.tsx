import { BsTelephone } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
    return (
        <section className="fixed top-0 left-0 w-full z-50 bg-white flex flex-row py-3 justify-between items-center px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
            <div className="flex flex-row flex-nowrap items-center gap-3 ">
                <img src={logo}className="h-12 w-9" alt="logo" />
                
                <div className=" flex flex-col leading-none  justify-start">
                    <h1 className="font ">BlueWave Mawimbi</h1>
                    <span className="text text-xs">Enterprises Company</span>
                </div>
            </div>

            <div className="space-x-7 justify-center items-center hidden md:flex" >
                <Link to="">Home</Link>
                <Link to="">Our Services</Link>
                <Link to="">Products</Link>
                <Link to="">Gallery</Link>
                <Link to="">Contact Us</Link>
            </div>


            <div className="md:hidden">
                <Menu />
            </div>


            <div className="navbar-actions gap-6 items-center justify-center hidden md:flex">
                <button
                className="flex-row flex items-center gap-2
                 active:scale-95 px-4 py-2 rounded-full shadow-md 
                 shadow-blue-300 hover:shadow-lg hover:shadow-blue-300
                 hover:scale-105 duration-300 hover:bg-blue-3 bg-gradient-to-r from-blue-100 to-red-500
                  ">
                    <BsTelephone />
                    <div className=" flex flex-col items-start leading-none ">
                        <span className="text-xs ">Call us</span> +255 753 543 252</div>
                </button>
                <span><FaGlobe/></span>
                <span className="flex flex-row items-center gap-2  hover:scale-105 hover:big-blue-300" 
                 > EN </span>
            </div>
        </section>
    );



}
export default Navbar