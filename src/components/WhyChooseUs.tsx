import { ShieldCheck, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck size={40}/>,
    title: "Safety First",
    desc: "Strict safety standards in every operation."
  },
  {
    icon: <Award size={40}/>,
    title: "Quality Products",
    desc: "Reliable explosives and mining equipment."
  },
  {
    icon: <Clock  size={40}/>,
    title: "On-Time Delivery",
    desc: "Fast and dependable service delivery."
  },
  {
    icon: <Users size={40}/>,
    title: "Experienced Team",
    desc: "Qualified professionals with industry expertise."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 ">
      <div className="">

        <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We deliver reliable, safe and innovative blasting
          solutions that help our clients achieve success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="text-red-600 mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;