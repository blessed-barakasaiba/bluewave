
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full ">
            <div className="relative h-[82vh] md:h-[95vh] w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    backgroundImage: `url('${import.meta.env.BASE_URL}our.jpg')`
                    <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">

                    <div className="max-w-4xl text-white text-center md:text-left">



                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="font-bold text-3xl md:text-6xl lg:text-7xl leading-tight mb-4"
                        >
                            Reliable explosive <br />
                            and precious blasting <br />
                            solution
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className=" text-sm md:text-base mb-4"
                        >
                            We supply high quality commercial explosives, mining tools and equipment and deliver safe, reliable and cost-effective drilling, blasting and related services that exceed our clients' expectations while ensuring safety, environmental care and sustainable value.
                        </motion.p>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Link to="/ourServices" className="px-6 py-3 bg-red-600 hover:bg-red-700 transition font-semibold rounded-md">
                                Our Services
                            </Link>

                            <Link to="/contact" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition font-semibold rounded-md">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-950 text-gray-300 leading-relaxed text-lg md:text-xl p-6 text-center"
            >
                <h2 className="max-w-7xl mx-auto text-sm md:text-xl">
                    BlueWave Mawimbi Enterprises Company Limited is a dynamic and reliable Tanzanian company
                    specializing in the supply of mining tools and equipment and providing professional services
                    to mining and drilling companies.
                </h2>
            </motion.div>

        </section>
    );
};

export default Hero;