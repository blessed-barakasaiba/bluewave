import { motion } from "framer-motion";
import { Building2, Users, Trophy, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} />,
    number: "100+",
    title: "Satisfied Clients",
  },
  {
    icon: <ShieldCheck size={40} />,
    number: "100%",
    title: "Safety Commitment",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-slate-900 py-20">

      <div className="px-4 md:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Delivering reliable mining solutions, blasting services,
            and industrial supplies with excellence, safety, and
            professionalism across Tanzania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="flex justify-center text-red-500 mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white mb-2">
                {item.number}
              </h3>

              <p className="text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default StatsSection;