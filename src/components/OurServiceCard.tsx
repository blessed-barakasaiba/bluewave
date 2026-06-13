import { motion } from "framer-motion";

type service_info = {
    icon: any;
    heading:string;
    description:string;
}
const OurServiceCard = ({icon,heading,description}:service_info) => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition flex-1 max-w-80"
          >
            <div className="flex items-center mb-4">
              <span className="text-red-600 text-4xl mr-3">{icon}</span>
              <h3 className="text-xl font-semibold text-blue-700">{heading}</h3>
            </div>
            <p className="text-gray-600">
                {description}
            </p>
    </motion.div>
  )
}

export default OurServiceCard