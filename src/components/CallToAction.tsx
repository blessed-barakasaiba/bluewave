import { motion } from "framer-motion";

const CallToAction = () => {

  const goToWhatsApp = () => {
    const url =
      "https://wa.me/255758585682?text=Hello%20BlueWave%20Mawimbi,%20I%20need%20more%20information%20about%20your%20services.";
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-900 pt-20">

      <div className="max-w-4xl mx-auto text-center px-4">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-6"
        >
          Ready To Work With Us?
        </motion.h2>

        <p className="text-gray-300 mb-8 text-lg">
          Contact us today for professional blasting
          solutions, mining equipment and expert support.
        </p>

        <button
          onClick={goToWhatsApp}
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-semibold"
        >
          Contact On WhatsApp
        </button>

      </div>
    </section>
  );
};

export default CallToAction;