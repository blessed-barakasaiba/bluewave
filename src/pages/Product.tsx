import { motion } from "framer-motion";
import product1 from "../assets/products/product1.jpeg";
import product2 from "../assets/products/product2.jpeg";
import product3 from "../assets/products/product3.jpeg";
import product4 from "../assets/products/product4.jpeg";
import product5 from "../assets/products/product5.jpeg";
import product6 from "../assets/products/product6.jpeg";
import product7 from "../assets/products/product7.jpeg";

const Product = () => {
  const phoneNumber = "0652298284"; // remove + sign


    const services = [
        { id: 1, name: "EMULSION EXPLOSIVES", description: "High performance watergel esplosives for various blasting applications.", image: product1 },
        { id: 2, name: "ANFO", description: "Ammonium Nitrate Fuel Oil (ANFO) for economical bulk blasting", image: product2 },
        { id: 3, name: "DETONATING CORD", description: "High strength det cord for reliable blasting performance.", image: product3 },
        { id: 4, name: "NON-ELECTRIC DETONATORS", description: "Reliable and accurate initiation with high safety standards.", image: product4 },
        { id: 5, name: "ELECTRIC DETONATORS", description: "Instantaneous electric detonators for precise blasting control.", image: product5 },
        { id: 6, name: "BLASTING ACCESSORIES", description: "Complete range of accessories and consumables", image: product6 },
        { id: 7, name: "BOOSTERS", description: "High energy boosters for enhanced detonation and performance.", image: product7 },
    ];

const handleWhatsApp = (service:any) => {
    const message = `Hello, I am interested in:

Product: ${service.name}

Description: ${service.description}

Please give me a quotation.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};
    return (
        <div className="">
            <div className="bg-cover bg-center h-[70vh] w-full flex items-center justify-center relative" style={{
                backgroundImage: "url('/our.jpg')",
            }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative ">
                    <motion.h2
                        initial={{ opacity: 0, y: -90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold text-5xl ">Our Products</motion.h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-12">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 100 }}
                        // whileHover={{ y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{once:true, amount:0.3}}
                        transition={{ duration: 0.6 }}

                        className="border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-md"
                    >
                        <div className="h-64 w-full">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5 border-t">
                            <h2 className="text-xl font-bold mb-3">
                                {service.name}
                            </h2>

                            <p className="text-gray-600 mb-3">
                                {service.description}
                            </p>

                            <button onClick={()=>handleWhatsApp(service)} className="px-4 py-2 text-xl w-full text-center border bg-red-500 text-white font-medium rounded-md hover:bg-red-600" >Request</button>


                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Product