import { motion } from "framer-motion";

type service_info = {
    icon: any;
    heading:string;
    description:string;
}
const Card = ({icon,heading,description}:service_info) => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{translateY: -5}}
            className="
            bg-white
            shadow-md 
            transition 
            rounded-2xl p-8 
            hover:shadow-blue-300/30 
            flex-1w-full
            sm:max-w-sm
            md:max-w-md
            lg:max-w-96
            min-h-64
            border
            hover:border-red-600
            
            "
            
            >
            <div className="flex items-center justify-start mb-4 gap-2">
              <span className="text-red-600 text-4xl mr-3">{icon}</span>
              <h3 className="text-xl text-start font-semibold text-blue-700  flex-grow ">{heading}</h3>
            </div>
            <p className="text-gray-600 text-lg text-left">
                {description}
            </p>
    </motion.div>
  )
}

export default Card