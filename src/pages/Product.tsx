import { motion } from "framer-motion";
import product8 from "../assets/products/product8.jpg";
import product9 from "../assets/products/product9.jpg";
import product10 from "../assets/products/product10.jpg";
import product11 from "../assets/products/product11.jpg";
import product12 from "../assets/products/product12.jpg";
import product13 from "../assets/products/product13.jpg";
import product14 from "../assets/products/product14.jpg";
import product15 from "../assets/products/product15.jpg";
import product16 from "../assets/products/product16.png";
import product17 from "../assets/products/product17.jpg";
import product18 from "../assets/products/product18.jpg";
import product19 from "../assets/products/product19.jpg";
import product20 from "../assets/products/product20.png";
import product21 from "../assets/products/product21.jpg";
import product22 from "../assets/products/product22.jpg";
import product23 from "../assets/products/product23.png";
import product24 from "../assets/products/product24.jpg";
import productImage from "../assets/products/product1.jpeg";

const Product = () => {
  const phoneNumber = "255758585682";


    const services = [
        { id: 1, name: "Porous Prill Ammonium Nitrate (PPAN),", description: "Low-densit, Highly absorbent grade designed for the mining and quarrying industry.", image: product8 },
        { id: 2, name: "Ammonium Nitrate Fuel Oil (ANFO)", description: "Zero oxygen balance VOD -2,500 m/s to 3,500 m/s Excellent rock-heaving capabilities Size/Wight – 25kgs", image: product9 },
        { id: 3, name: "Explogel V6", description: "VOD -  3000 m/s to 5900 m/s Size range 25mmx270mm to 65x550mm", image: product10 },
        { id: 4, name: "Super power 90", description: "High-strength, water-resistant cap-sensitive emulsion Size range 25mmx270mm to 65x550m VOD - 3,000 – 4,800 m/s", image: product11 },
        { id: 5, name: "Kinmex emulsion explosives", description: " Size range 25mmx270mm to 65x550mm High energy release Water resistance, Excellent safety properties  VOD- 4500 m/s and 5,500 m/s", image: product12 },
        { id: 6, name: "EMEX 70", description: "Water-resistant packaged explosive. Size range 25mmx270mm to 65x550mm VOD - 4,600m/s to 5,600m/s", image: product13 },
        { id: 7, name: "400g pentolite booster", description: "High-density, cast explosive primer Density - 1.60 - 1.65 g/cm³ VOD - 7,300 - 7,500 m/s", image: product14 },
        { id: 8, name: "150g pentolite booster", description: "High-density, cast explosive primer Density - 1.60 - 1.65 g/cm³ VOD - 7,300 - 7,500 m/s", image: product15 },
        { id: 9, name: "Detonating cord", description: "Flexible linear explosive consisting of a high-velocity core (usually PETN) encased in a textile and plastic jacket. VOD- 6,500m/s to 7,000m/s. For mining, quarrying, construction.", image: product16 },
        { id: 10, name: "Dual delayed NONEL", description: "High tensile strength and resistance to UV rays, wear, and tearing Length – variable length (6m to 21m) Available - 17/500 ms, 25/500 ms, or 42/500 ms.", image: product17 },
        { id: 11, name: "Long period delayed detonators", description: "Initiation devices used in mining to provide extended time delays between explosions. High abrasion-resistant and temperature-resistant Delay periods – number 1 to 20 Connector; J-hook", image: product18 },
        { id: 12, name: "Surface connector", description: "Provides precise, reliable and millisecond accurate sequential blasting. Delay timing: 17ms, 25ms, 42ms, and 67ms ", image: product19 },
        { id: 13, name: "Cord relay", description: "Provides highly precise time intervals between blast holes or rows when detonating cord is used They are bi-directional", image: product20 },
        { id: 14, name: "Instantaneous electrical detonators (IED)", description: "Detonate with no delay when an electric current is applied.", image: product21 },
        { id: 15, name: "Blasting line/wire", description: "Highly durable, thicker gauge Lead or copper ", image: product22 },
        { id: 16, name: "Plain detonators", description: "For initiating cap-sensitive explosives Non-electric", image: product23 },
        { id: 17, name: "Safety fuse", description: "Flexible cord containing a compressed gunpowder core.", image: product24 },
        
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
            <div className="bg-cover bg-center h-[60vh] w-full flex items-center justify-center relative" style={{
                backgroundImage: `url(${productImage})`
            }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative ">
                    <motion.h2
                        initial={{ opacity: 0, y: -90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold text-5xl md:text-9xl ">Our Products</motion.h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-72 py-12">
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