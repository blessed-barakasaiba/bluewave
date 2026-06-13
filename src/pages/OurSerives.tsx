import { motion } from "framer-motion";
import OurServiceCard from "../components/OurServiceCard";
import {Truck,ChartColumn} from "lucide-react";


const OurServices = () => {
    const service_info = [
        {   icon:<Truck/>,
            heading:"Safe Handleing & Transport",
            description:"Safe handling, storage and transportation of explosives in compliance with strict safety regulations.",
        },
        {
            icon:<ChartColumn/>,
            heading:"Technical Support",
            description:"Expert consulting, blast design, and training for the safe and efficient use of explosives in mining operations.",
        },
    ]
    return(
        <>
            <div className="bg-cover bg-center h-[70vh] w-full flex items-center justify-center relative" style={{
                backgroundImage: "url('/our.jpg')",
            }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative ">
                    <motion.h2
                        initial={{ opacity: 0, y: -90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold text-5xl ">Our Services</motion.h2>
                </div>
            </div>
            <section className="bg-cover bg-center  w-full flex items-center flex-col gap-5 justify-center relative pb-14 bg-gray-50">
                <h1 className="  font-bold text-5xl">Core Services</h1>
                <h3>Comprehensive solution for all your mining needs</h3>
                <div className="flex flex-row flex-wrap gap-5 justify-evenly">
                    {service_info.map((service)=><OurServiceCard icon={service.icon} heading={service.heading} description={service.description} />)}
                </div>
            </section>
        </>

    );
}

export default OurServices;