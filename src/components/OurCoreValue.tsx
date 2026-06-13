import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Safety",
    description:
      "Safety is our top priority in every project, ensuring protection of people, equipment, and environment at all times.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Integrity",
    description:
      "We build strong trust through honesty, transparency, accountability, and professional conduct in all operations.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Excellence",
    description:
      "We deliver high-quality services and products that consistently exceed client expectations through innovation and dedication.",
  },
];

const OurCoreValue = () => {
  return (
    <section className="py-16 bg-white">
      <div className="">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="text-red-600 mb-4">
                {value.icon}
              </div>

              <h3 className="font-bold text-2xl mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <Link to="about" className="px-6 py-3 border border-red-600 rounded-md font-semibold hover:bg-red-700 bg-red-600 text-white hover:text-white transition">
            VIEW MORE
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OurCoreValue;