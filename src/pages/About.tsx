import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import aboutImage from "../assets/about.jpeg";
import videoAbout from "../assets/about.mp4";
import {Shield,Settings,Lightbulb,Globe,Handshake,Target,Eye,TrendingUp,Drill,ChartColumn,Sparkles,Bomb,Truck } from "lucide-react"
import Card from "../components/Card";

function AboutUsHero() {

  const our_value = [
    {
      icon:<Shield/>,
      title:"Safety First",
      body:"We put safety of our people, clients and communities above everything."
    },
    {
      icon:<Settings/>,
      title:"Quality & Reliability",
      body:"We deliver premium products and dependable services on time, every time.",
    },
    {
      icon:<Lightbulb/>,
      title:"Innovation",
      body:"We embrace new technologies and better ways of doing things."
    },
    {
      icon:<Globe/>,
      title:"Environmental Responsibility",
      body:"We minimize environmental impact and promote sustainable practices.",
    },
    {
      icon:<Handshake/>,
      title:"Customer Focus",
      body:"We build strong relationships and provide solutions that add real value."
    },
    {
      icon:<TrendingUp/>,
      title:"Professionalism",
      body:"We act with integrity, transparency and accountability in all our dealings."
    }
  ]
const service_info = [
        {   icon:<Truck/>,
            heading:"Safe Handling & Transport",
            description:"Safe handling, storage and transportation of explosives in compliance with strict safety regulations.",
        },
        {
            icon:<ChartColumn/>,
            heading:"Technical Support",
            description:"Expert consulting, blast design, and on-site support to improve performance and ensure compliance"
        
        },
        {
            icon:<Sparkles/>,
            heading:` Blasting $ Demolition,`,
            description:"Safe and controlled and demolition solutions to optimize fragmentation and productivity"
        },
        {
            icon:<Drill/>,
            heading:"Drilling Services",
            description:"Professional drilling services using modern equipment to ensure accuracy, efficiency and penetration"   
        },
        {
            icon:<Bomb/>,
            heading:"Commercial Explosives",
            description:"Supplying high quality explosives detonators, boosters and blasting accessories for mining and construction "
            
        }]
const mission_vision =[
  { icon:<Target/>,
    heading: " Mission",
    description:` To supply high quality commercial explosives, mining tools and
                equipment and deliver safe, reliable and cost-effective drilling,
         blasting and related services that exceed our clients' expectations
                while ensuring safety, environmental care and sustainable value.`

  },


  { icon:<Eye/>,
    heading:"Vision",
    description:` To be the most trusted and preferred partner in mining and
                construction by providing innovative blasting solutions, superior
                products and services that drive productivity, safety and sustainable
                growth.`
  }
]  
 
  return (
    <>
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${aboutImage})`
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
            className="text-white text-3xl md:text-7xl font-extrabold drop-shadow-lg"
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

      <section className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-72 py-14 ">
        <div className="mx-auto grid md:grid-cols-2 gap-10 items-start">

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
              is a limited  company with certificate of incorporation 
              Number 186044487, P.O.BOX 472,KAHAMA.
            </p>
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
              className="rounded-xl shadow-lg w-full h-full object-cover">
              <source src={videoAbout} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

        </div>
      </section>

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
            
           { mission_vision.map((item)=>
           (<Card icon={item.icon} heading={item.heading} description={item.description}/>)
           )}
          </div>
        </motion.div>
      </section>
<section  className=" bg-gray-50 flex md:flex-row flex-col gap-14
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-24 py-14 ">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.3 }}
    className="mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12">
       Services We Provide
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-10">
      {service_info.map((service)=><Card icon={service.icon} heading={service.heading} description={service.description}/>)}
    </div>
  </motion.div>
</section>

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
        {our_value.map((value)=><Card icon={value.icon} heading={value.title} description={value.body}/>)}
    </div>
  </motion.div>
</section>
</>

  );
}

export default AboutUsHero;
