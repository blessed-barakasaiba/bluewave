import { motion } from "framer-motion";
import { Drill, Pickaxe, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Drill size={40} />,
    title: "Drilling Services",
    description:
      "Professional drilling for mining, quarrying, and construction using modern rigs ensuring accuracy, safety, efficiency, and reliable performance.",
  },
  {
    icon: <Pickaxe size={40} />,
    title: "Blasting Solutions",
    description:
      "Safe controlled blasting operations designed for optimal rock fragmentation, reduced vibration, improved safety, and high production efficiency.",
  },
  {
    icon: <Truck size={40} />,
    title: "Equipment Supply",
    description:
      "Supply of mining tools, explosives, and industrial equipment meeting safety standards, reliability, and operational requirements for projects.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="">

        <h2 className="text-4xl font-bold text-center mb-4">
          What We Do
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          BlueWave Mawimbi Enterprises Company Limited provides reliable
          mining equipment, drilling solutions and professional blasting
          services across Tanzania.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 p-8 rounded-2xl shadow-md"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="ourServices" className="px-6 py-3 border border-graY-900 bg-red-500 text-white rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
            SEE MORE OUR SERVICES
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;