import { motion } from "framer-motion";
import {Truck,ChartColumn,Sparkles,Bomb,Pickaxe} from "lucide-react";
import servicesImage from "../assets/products/product.jpeg";
import Card from "../components/Card";
import CallToAction from "../components/CallToAction";


const OurServices = () => {
    const service_info = [
        {   icon:<Truck/>,
            heading:"Safe Handling & Transport",
            description:"Safe handling, storage and transportation of explosives in compliance with strict safety regulations.",
        },
        {
            icon:<ChartColumn/>,
            heading:"Technical Support",
            description:"Expert consulting, blast design, and on-site support to improve performance and ensure compliance"
        
        },
        {
            icon:<Sparkles/>,
            heading:` Blasting $ Demolition,`,
            description:"Safe and controlled and demolition solutions to optimize fragmentation and productivity"
        },
        {
        icon:<Pickaxe/>,
        heading:"Drilling Services",
        description:"Professional drilling services using modern equipment to ensure accuracy, efficiency and penetration"   
        },
        {
            icon:<Bomb/>,
            heading:"Commercial Explosives",
            description:"Supplying high quality explosives detonators, boosters and blasting accessories for mining and construction "
            
        }

    ]
    return(
        <>
            <div className="bg-cover bg-center h-[60vh] w-full flex items-center justify-center relative" style={{
                backgroundImage: `url('${servicesImage}')`
            }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative  text-center flex flex-col gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold text-5xl md:text-8xl ">Services We Provide</motion.h2>
                        <motion.h4
                        initial={{ opacity: 0, y: 90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold text-sm md:text-xl ">We provide reliable and innovative solution to meet your needs</motion.h4>
                </div>
            </div>
            <section className="bg-gray-50 w-full flex flex-col items-center justify-center gap-10 px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-14">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="  font-extrabold text-3xl md:text-5xl text-blue-800">Core Services</h1>
                <h3 className="font-semibold">How we deliver exceptional results</h3>  
                </div>
                
                <div className="flex flex-row items-center justify-center w-full flex-wrap gap-5 lg:gap-9">
                    {service_info.map((service)=><Card icon={service.icon} heading={service.heading} description={service.description} />)}
                </div>
            </section>
            <section className="bg-gray-50 w-full flex flex-col items-center justify-center gap-10 px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-14">
                <h1 className="  font-extrabold text-5xl text-blue-800">Our Process</h1>
                <h3 className="font-semibold">Comprehensive solution for all your mining needs</h3>
                <div className="flex items-center flex-row flex-wrap justify-center ">
                    <div className="w-80 p-4 flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-extrabold text-red-500">01</h1>
                        <h3 className="text-3xl text-blue-500">Consultation</h3>
                        <p className = "text-center">Initial assessment and requirement analysis</p>
                    </div>
                    <div className="w-80 p-4 flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-extrabold text-red-500">02</h1>
                        <h3 className="text-3xl text-blue-500">Planning</h3>
                        <p className = "text-center">Detailed project planning and design</p>
                    </div>
                    <div className="w-80 p-4 flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-extrabold text-red-500">03</h1>
                        <h3 className="text-3xl text-blue-500">Execution</h3>
                        <p className = "text-center">Safe and efficient project execution</p>
                    </div>
                    <div className="w-80 p-4 flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-extrabold text-red-500">04</h1>
                        <h3 className="text-3xl text-blue-500">Support</h3>
                        <p className = "text-center">Ongoing support and maintenance</p>
                    </div>
                </div>
            </section>

                <CallToAction />

        </>

    );
}

export default OurServices;