import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, PhoneCall } from "lucide-react";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const quick_links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/" },
    { id: 3, name: "Our Services", path: "/" },
    { id: 4, name: "Our Commandment", path: "/" },
    { id: 5, name: "Industries We Serve", path: "/" },
    { id: 6, name: "Contact Us", path: "/" },
  ];

  const our_services = [
    { id: 1, name: "Commercial Explosive", path: "/" },
    { id: 2, name: "Drilling and Blasting", path: "/" },
    { id: 3, name: "Mining Chemicals", path: "/" },
    { id: 5, name: "Consultation and Design", path: "/" },
  ];
  const goToDeveloper = () => {
    const message = `
Hello, I would like to get more information about your service.

You can also reach developers directly:
- Support: 255652298284
- Support: 255652854548
- Support: 255615937919
`;

    const phone = "255615937919"; 

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full h-auto bg-gray-900 flex flex-col justify-center items-center gap-3 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-70 pt-8">
      <div className="flex justify-between  md:flex-row flex-col w-full">
        <div className="flex h-full flex-col flex-2 pl-0  pb-6 md:pl-0 gap-5 justify-center">
          <div className="flex flex-row flex-nowrap items-center  gap-3  ">
            <img src={logo} className="h-11 w-8 p-0 " alt="logo" />

            <div className=" flex flex-col leading-none  justify-start">
              <h1 className="font-bold text-white">BlueWave Mawimbi</h1>
              <span className="text-blue-300 text-xs">Enterprises Company</span>
            </div>
          </div>
          <p className=" text-xs text-white md:text-md">
            A dynamic and reliable Tanzanian company specializing in the <br />
            supply of mining tools and equipment, and providing <br />
            professional services to mining and drilling companies. <br />
            Certificate of Incorporation of a Company No: 186044487
          </p>
          <div className="flex items-center justify-start gap-3">
            <FaWhatsapp
              className="p-1 size-8 text-white rounded-lg  border-[2px]"
              onClick={() => {
                const message =
                  "Hello, I would like to get more information about your services.";

                const url = `https://wa.me/255758585682?text=${encodeURIComponent(
                  message,
                )}`;

                window.open(url, "_blank");
              }}
            />
            <FaFacebook className="p-1 size-8 text-gray-800  rounded-lg  border-[2px] border-gray-800" />
            <FaInstagram className="p-1 size-8 text-gray-800  rounded-lg  border-[2px] border-gray-800 " />
            <FaTwitter className="p-1 size-8 text-gray-800  rounded-lg  border-[2px] border-gray-800 " />
          </div>
        </div>
        <div className="flex-1 flex md:flex-row md:flex-nowrap flex-row flex-wrap gap-6 justify-between w-full  md:p-4 pl-0 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-gray-400  gap-2"
          >
            <h3 className="font-bold text-md text-white">QUICK LINKS</h3>
            <ul className="flex flex-col gap-2 pl-2 text-sm">
              {quick_links.map((link) => (
                <div className="flex flex-row flex-nowrap gap-2 items-center">
                  <div className="bg-red-300 rounded-full h-2 w-2"></div>
                  <Link to={link.path}>{link.name}</Link>
                </div>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 flex flex-col gap-2 "
          >
            <h3 className="font-bold text-md text-white">
              SERVICES WE PROVIDE
            </h3>
            <ul className="flex flex-col gap-2 pl-2 text-sm">
              {our_services.map((link) => (
                <div
                  key={link.id}
                  className="flex flex-row flex-nowrap gap-2 items-center"
                >
                  <div className="bg-red-300 rounded-full h-2 w-2"></div>
                  <Link key={link.id} to={link.path}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 flex flex-col gap-2 "
          >
            <h3 className="font-bold text-md text-white">CONTACT</h3>
            <ul className="flex flex-col gap-2 pl-2 text-sm">
              <div className="flex  gap-2 flex-row flex-nowrap  justify-start items-start">
                <MapPin size={20} className="mt-1" />
                <Link to="" className="">
                  Segese Village
                  <br />
                  Kahama distric
                  <br />
                  Shinyanga Region - Tanzania
                </Link>
              </div>
              <div className="flex  gap-2 flex-row flex-nowrap  justify-start items-start">
                <PhoneCall size={20} className="mt-1" />
                <Link to="">
                  +255 774 853 113 <br />
                  +255 758 585 682 <br />
                  +255 762 274 098 <br />
                  +255 772 537 411 <br />
                </Link>
              </div>

              <div className="flex  gap-2 flex-row flex-nowrap  justify-start items-start">
                <MdEmail size={20} />
                <Link to="">bluewavemawimbi@gmail.com</Link>
              </div>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="border-b border-white w-full"></div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between py-3  flex-row flex-wrap text-xs  w-full text-gray-200"
      >
        <p>&copy;2026 bluewave mawimbi company limited</p>
        <p>Privacy policy Terms of service Cookie policy Security</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center py-3  flex-row flex-wrap text-xs  w-full text-gray-800"
        onClick={() => goToDeveloper()}
      >
        <p className="flex flex-row flex-nowrap gap-2 items-center justify-center cursor-pointer hover:text-gray-300">
          Developed by Tanlife, <FaWhatsapp />
          255615937919, 255652298284<p className="hidden md:block">,255652854548</p>
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
