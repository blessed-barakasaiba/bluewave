import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <motion.div
        initial={{opacity:0, y:60}}
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
         className="w-full h-auto bg-gray-900 flex flex-col justify-center items-center gap-3 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
            <div className="flex justify-between  md:flex-row flex-col w-full">
                <div className="flex flex-col flex-2 pl-0 p-12 pb-6 md:pl-0 gap-5 justify-center">
                    <div className="flex flex-row flex-nowrap items-center  gap-3  ">
                        
                        <img src={logo} className="h-11 w-8 p-0 " alt="logo"/>
                       
                        <div className=" flex flex-col leading-none  justify-start">
                            <h1 className="font-bold text-white">BlueWave Mawimbi</h1>
                            <span className="text-blue-300 text-xs">Enterprises Company</span>
                        </div>
                    </div>
                    <p className=" text-sm text-white">
                            Battery: A massive 6300mAh battery paired with 15W Type-C <br />
                            fast charging. It also features 6W reverse wired charging, <br />
                            allowing the phone to function as a portable power bank for <br />
                            accessories.Build Quality: Built with realme's ArmorShell Protection. <br />
                    </p>
                    <div className="flex items-center justify-start gap-3">

                            <FaTelegram className="p-1 size-8 text-white rounded-lg  border-[2px]" />
                            <FaFacebook className="p-1 size-8 text-white  rounded-lg  border-[2px]" />
                            <FaWhatsapp className="p-1 size-8 text-white rounded-lg  border-[2px]"/>
                            <FaTwitter className="p-1 size-8 text-white rounded-lg  border-[2px]"/>
                            <FaLinkedin className="p-1 size-8 text-white   rounded-lg  border-[2px]"/>

                    </div>
                </div>
                <div className="flex-1 flex md:flex-row flex-row flex-wrap gap-6 justify-between w-full px-12 md:p-12 pl-0 pt-0">
                    <div className= "flex flex-col text-white  gap-2">
                        <h3 className="font-bold text-md">QUICK LINKS</h3>
                        <ul className="flex flex-col gap-2 pl-2 text-sm">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/"}>About Us</Link>
                            <Link to={"/"}>Our Service</Link>
                            <Link to={"/"}>Our Commitment</Link>
                            <Link to={"/"}>Industries We Serve</Link>
                            <Link to={"/"}>Contact Us</Link>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col gap-2 ">
                        <h3 className="font-bold text-md">QUICK LINKS</h3>
                        <ul className="flex flex-col gap-2 pl-2 text-sm">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/"}>About Us</Link>
                            <Link to={"/"}>Our Service</Link>
                            <Link to={"/"}>Our Commitment</Link>
                            <Link to={"/"}>Industries We Serve</Link>
                            <Link to={"/"}>Contact Us</Link>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col gap-2 ">
                        <h3 className="font-bold text-md">QUICK LINKS</h3>
                        <ul className="flex flex-col gap-2 pl-2 text-sm">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/"}>About Us</Link>
                            <Link to={"/"}>Our Service</Link>
                            <Link to={"/"}>Our Commitment</Link>
                            <Link to={"/"}>Industries We Serve</Link>
                            <Link to={"/"}>Contact Us</Link>
                        </ul>
                    </div>
            </div>
            </div>
            <div className="border-b border-white w-full">
            </div>
            <div className="flex items-center py-3  flex-row flex-wrap text-xs justify-between  w-full text-white">
                <p>&copy;2025 bluewave platform</p>
                <p>Privacy policy Terms of service Cookie policy Security</p>
            </div>
        </motion.div>
    )
}

export default Footer

