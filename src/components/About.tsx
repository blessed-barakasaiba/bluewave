import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import aboutImage from "../assets/about.jpeg";

function AboutUsHero() {
  return (
    <>
      {/* PAGE ONE: Hero */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutImage})`, 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6" >

          <motion.img
            src={logo}
            alt="BlueWave Mawimbi Logo"
            className="h-28 w-auto mb-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            About BlueWave Mawimbi <br />Enterprises Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl"
          >
            Reliable Explosives & Precision Blasting Solutions
          </motion.p>
        </div>
      </section>
      {/* PAGE TWO: About Us with Video */}
      <section className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14 ">
        <div className="mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
              About BlueWave Mawimbi Enterprises
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              BLUEWAVE MAWIMBI ENTERPRISES COMPANY LIMITED
              is a dynamic and reliable Tanzanian company specializing in
              the supply of mining tools and equipment, and providing
              professional services to mining and drilling companies.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We supply a wide range of commercial explosives,
              accessories and blasting consumables suitable for all
              mining and construction applications.
            </p>
            <br />
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Our experienced team delivers precise drilling.
              efficient blasting and controlled demolition solutions
              using modern equipment and industry best practices
              to maximize productivity and safety.
            </p>
            <br />
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We are committed to safety, quality, reliability and
              timely delivery in every project we undertake.

            </p>
          </motion.div>

          {/* Right Side: Video */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full h-full flex justify-center"
          >
            <video
              autoPlay
              loop
              muted
              className="rounded-xl shadow-lg w-full h-full object-cover"
            >
              <source src="/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

        </div>
      </section>
      {/* PAGE THREE: Mission & Vision */}
      <section className=" bg-gray-50 flex md:flex-row flex-col gap-1
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-2xl p-10 hover:shadow-blue-300 transition relative overflow-hidden"
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <span className="text-blue-700 text-4xl mr-3">🎯</span>
                <h3 className="text-2xl font-semibold text-blue-700">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To supply high quality commercial explosives, mining tools and
                equipment and deliver safe, reliable and cost-effective drilling,
                blasting and related services that exceed our clients' expectations
                while ensuring safety, environmental care and sustainable value.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-2xl p-10 hover:shadow-blue-300 transition relative overflow-hidden"
            >
              {/* Icon */}
              <div className="flex items-center mb-6">
                <span className="text-blue-700 text-4xl mr-3">👁️</span>
                <h3 className="text-2xl font-semibold text-blue-700">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred partner in mining and
                construction by providing innovative blasting solutions, superior
                products and services that drive productivity, safety and sustainable
                growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* PAGE four: Our Services */}
<section  className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14 ">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.3 }}
    className="mx-auto text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12"
    >
      Our Services
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Service 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-blue-600 text-4xl mr-3">💣</span>
          <h3 className="text-xl font-semibold text-blue-700">Commercial Explosives</h3>
        </div>
        <p className="text-gray-600">
          Supplying high quality explosives, detonators, boosters and blasting accessories for mining and construction.
        </p>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-green-600 text-4xl mr-3">⛏️</span>
          <h3 className="text-xl font-semibold text-blue-700">Drilling Services</h3>
        </div>
        <p className="text-gray-600">
          Professional drilling services using modern equipment to ensure accuracy, efficiency and penetration.
        </p>
      </motion.div>

      {/* Service 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-red-600 text-4xl mr-3">💥</span>
          <h3 className="text-xl font-semibold text-blue-700">Blasting & Demolition</h3>
        </div>
        <p className="text-gray-600">
          Safe and controlled blasting and demolition solutions to optimize fragmentation and productivity.
        </p>
      </motion.div>

      {/* Service 4 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-purple-600 text-4xl mr-3">📊</span>
          <h3 className="text-xl font-semibold text-blue-700">Technical Support</h3>
        </div>
        <p className="text-gray-600">
          Expert consulting, blast design, analysis and on-site support to improve performance and ensure compliance.
        </p>
      </motion.div>

      {/* Service 5 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-yellow-600 text-4xl mr-3">🚚</span>
          <h3 className="text-xl font-semibold text-blue-700">Safe Handling & Transport</h3>
        </div>
        <p className="text-gray-600">
          Safe handling, storage and transportation of explosives in compliance with strict safety regulations.
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* PAGE FOUR: Our Core Values */}
<section className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14 ">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.3 }}
    className=" mx-auto text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12"
    >
      Our Core Values
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-5">
      {/* Safety First */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-red-600 text-4xl mr-3">🛡️</span>
          <h3 className="text-xl font-semibold text-blue-700">Safety First</h3>
        </div>
        <p className="text-gray-600">
          We put safety of our people, clients and communities above everything.
        </p>
      </motion.div>

      {/* Quality & Reliability */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-green-600 text-4xl mr-3">⚙️</span>
          <h3 className="text-xl font-semibold text-blue-700">Quality & Reliability</h3>
        </div>
        <p className="text-gray-600">
          We deliver premium products and dependable services on time, every time.
        </p>
      </motion.div>

      {/* Innovation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-purple-600 text-4xl mr-3">💡</span>
          <h3 className="text-xl font-semibold text-blue-700">Innovation</h3>
        </div>
        <p className="text-gray-600">
          We embrace new technologies and better ways of doing things.
        </p>
      </motion.div>

      {/* Environmental Responsibility */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-teal-600 text-4xl mr-3">🌍</span>
          <h3 className="text-xl font-semibold text-blue-700">Environmental Responsibility</h3>
        </div>
        <p className="text-gray-600">
          We minimize environmental impact and promote sustainable practices.
        </p>
      </motion.div>

      {/* Customer Focus */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-yellow-600 text-4xl mr-3">🤝</span>
          <h3 className="text-xl font-semibold text-blue-700">Customer Focus</h3>
        </div>
        <p className="text-gray-600">
          We build strong relationships and provide solutions that add real value.
        </p>
      </motion.div>

      {/* Professionalism */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <div className="flex items-center mb-4">
          <span className="text-blue-600 text-4xl mr-3">📈</span>
          <h3 className="text-xl font-semibold text-blue-700">Professionalism</h3>
        </div>
        <p className="text-gray-600">
          We act with integrity, transparency and accountability in all our dealings.
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>
{/* PAGE SIX: Leadership Team */}
<section  className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.3 }}
    className=" mx-auto text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12"
    >
      Leadership Team
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Leader 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <img
          src="/leaders/ceo.jpg"
          alt="CEO"
          className="w-32 h-32 mx-auto rounded-full mb-6 shadow-md"
        />
        <h3 className="text-xl font-semibold text-blue-700">John Doe</h3>
        <p className="text-gray-500 mb-2">Chief Executive Officer</p>
        <p className="text-gray-600 text-sm mb-2">MBA, Mining Engineering</p>
        <p className="text-gray-600 text-sm">
          15+ years of experience in mining operations, explosives supply and strategic leadership.
        </p>
      </motion.div>

      {/* Leader 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <img
          src="/leaders/operations.jpg"
          alt="Operations Manager"
          className="w-32 h-32 mx-auto rounded-full mb-6 shadow-md"
        />
        <h3 className="text-xl font-semibold text-blue-700">Jane Smith</h3>
        <p className="text-gray-500 mb-2">Operations Manager</p>
        <p className="text-gray-600 text-sm mb-2">BSc, Mechanical Engineering</p>
        <p className="text-gray-600 text-sm">
          10+ years of expertise in drilling, blasting and operational efficiency in mining projects.
        </p>
      </motion.div>

      {/* Leader 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-blue-300 transition"
      >
        <img
          src="/leaders/technical.jpg"
          alt="Technical Director"
          className="w-32 h-32 mx-auto rounded-full mb-6 shadow-md"
        />
        <h3 className="text-xl font-semibold text-blue-700">Michael Brown</h3>
        <p className="text-gray-500 mb-2">Technical Director</p>
        <p className="text-gray-600 text-sm mb-2">MSc, Mining Technology</p>
        <p className="text-gray-600 text-sm">
          12+ years of technical consulting, blast design and compliance management.
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>


    </>

  );
}

export default AboutUsHero;
