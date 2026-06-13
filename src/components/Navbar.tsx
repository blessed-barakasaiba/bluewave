import { BsTelephone } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const quick_links = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Our Services", path: "/ourServices" },
        { id: 3, name: "Our Products", path: "/products" },
        { id: 6, name: "Gallery", path: "/contact" },
        { id: 6, name: "Contact Us", path: "/contact" },
    ];
    return (
        <section className="fixed top-0 left-0 w-full z-50 bg-white flex flex-row py-3 justify-between items-center px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 border-b">
            <div className="flex flex-row flex-nowrap items-center gap-3 ">
                <img src={logo} className="h-12 w-9" alt="logo" />

                <div className=" flex flex-col leading-none  justify-start">
                    <h1 className="font ">BlueWave Mawimbi</h1>
                    <span className="text text-xs">Enterprises Company</span>
                </div>
            </div>

            <div className="space-x-3 justify-center items-center hidden md:flex" >
                {quick_links.map((link) => (
                    <div key={link.id}>
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>


            {/* Menu Button */}
            <div className="md:hidden">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {quick_links.map((link, index) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.3,
                                    }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 hover:text-blue-600"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <div className="navbar-actions gap-6 items-center justify-center hidden md:flex">
                <button
                    className="flex-row flex items-center gap-2
                 active:scale-95 px-4 py-2 rounded-lg shadow-md 
                 hover:scale-105 duration-300 hover:bg-blue-3 bg-red-500 text-white hover:bg-red-600 font-semibold 
                  ">
                    <BsTelephone />
                    <div className=" flex flex-col items-start leading-none ">
                        <span className="text-sm ">Call Us</span> +255 753 543 252</div>
                </button>
                <span><FaGlobe /></span>
                <span className="flex flex-row items-center gap-2  hover:scale-105 hover:big-blue-300"
                > EN </span>
            </div>
        </section>
    );



}
export default Navbar