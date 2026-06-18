import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand client requirements and project objectives.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Design safe and effective blasting and drilling plans.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Carry out operations using certified professionals while following SOP.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Ensure successful completion and client satisfaction.",
  },
];

const HowItWork = () => {
  return (
    <section className="py-5">

      <div className="">

        <h2 className="text-4xl text-blue-600 font-bold text-center mb-12">
          How We Work
        </h2>

        <div className="grid  md:grid-cols-4 gap-8 mb-5">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-md flex items-start flex-col"
            >
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>


        {/* Centered Button */}
        <div className="flex justify-center">
          <Link to="about" className="px-6 py-3 border border-red-600 rounded-md font-semibold hover:bg-red-700 bg-red-600 text-white hover:text-white transition">
            SEE MORE ABOUT THIS
          </Link>
        </div>

      </div>

    </section>
  );
};

export default HowItWork;