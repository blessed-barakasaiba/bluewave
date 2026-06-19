import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const phoneNumber = "255774853113";

    const goToWhatsApp = () => {
        const message = "Hello, I would like to get more information about your services.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const quick_links = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Services", path: "/ourServices" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Gallery", path: "/gallery" },
        { id: 6, name: "Contacts", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);





    const isActiveLink = (path: string) => location.pathname === path;

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 w-full z-50 flex flex-row py-3 justify-between items-center px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-70 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white shadow-md border-b"
                }`}
        >
            <motion.div
                className="flex flex-row flex-nowrap items-center gap-3 cursor-pointer"
                whileHover="hover"
            >
                <motion.img
                    src={logo}
                    className="h-12 w-auto"
                    alt="logo"
                />

                <motion.div
                    className="flex flex-col leading-none justify-start"
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.h1
                        className="font-bold text-sm md:text-md whitespace-nowrap bg-blue-600 bg-clip-text text-transparent"
                    >
                        BLUEWAVE MAWIMBI
                    </motion.h1>
                    <motion.span
                        className="text-xs whitespace-nowrap text-gray-500 font-medium"
                        whileHover={{ opacity: 0.8 }}
                    >
                        Enterprises Company Limited
                    </motion.span>
                </motion.div>
            </motion.div>

            <div className="space-x-1 justify-center items-center hidden md:flex">
                {quick_links.map((link, index) => {
                    const isActive = isActiveLink(link.path);

                    return (
                        <motion.div
                            key={link.id}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link
                                to={link.path}
                                className={`relative transition-all duration-300 p-2 inline-block font-medium ${isActive
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: isActive ? 1 : 0 }}
                                />

                                <motion.span
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-blue-500 rounded-full"
                                    whileHover={{ height: "60%" }}
                                    transition={{ duration: 0.2 }}
                                />

                                {/* Right Border Animation */}
                                <motion.span
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-blue-500 rounded-full"
                                    whileHover={{ height: "60%" }}
                                    transition={{ duration: 0.2 }}
                                />

                                {/* Link Text */}
                                <motion.span
                                    className="inline-block"
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {link.name}
                                </motion.span>


                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* Menu Button with Animation */}
            <div className="md:hidden">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
            </div>

            {/* Mobile Menu with Enhanced Animation */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200,
                            damping: 25
                        }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden "
                    >
                        <div className="flex flex-col p-6 space-y-3">

                            {quick_links.map((link, index) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.3,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block py-3 px-4 rounded-lg transition-all duration-300 ${isActiveLink(link.path)
                                                ? "bg-blue-50 text-blue-600 font-semibold"
                                                : "hover:bg-gray-50 hover:text-blue-600"
                                            }`}
                                    >
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="inline-block"
                                        >
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                            
                                    initial={{ opacity: 0, x: -80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -80 }}
                                    transition={{
                                        delay:  0.5,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                            whileTap="tap"
                            className="flex w-full gap-3 items-center justify-center py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold">

                            <motion.div
                                        animate={{ rotate: [0, 15, -15, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            repeatType: "reverse"
                                        }}
                                        >
                                <BsWhatsapp size={25} className="fill-white"/>
                                </motion.div>
                                <button onClick={() => goToWhatsApp()} className="flex flex-col items-start   ">
                                    <span className="text-xs opacity-90">Call Us</span>
                                    <span className="text-sm font-bold">+255 758 585 682</span>
                                </button>
                            </motion.button>
                            
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="navbar-actions gap-4 items-center justify-center hidden md:flex" onClick={() => goToWhatsApp()} >
                <motion.button
                    whileTap="tap"
                    className="flex-row flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-red-500   text-white font-semibold"
                >
                    <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                            repeatType: "reverse"
                        }}
                    >
                        <BsWhatsapp size={22} />
                    </motion.div>
                    <button className="flex flex-col text-xs items-start justify-center">
                        <span className="text-xs opacity-90">Call Us</span>
                        <span className="text-sm font-bold">+255 758 585 682</span>
                    </button>
                </motion.button>
            </div>


        </motion.section>
    );
}

export default Navbar;