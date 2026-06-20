import { CheckCircle, Send } from "lucide-react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import contactImage from "../assets/products/WhatsApp Image 2026-06-11 at 9.09.30 PM.jpeg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<{
    fullname?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  }>({});

  const validate = (data: any) => {
    const err: {
      fullname?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
    } = {};

    if (!data.fullname.trim()) err.fullname = "Full name is required";

    if (!data.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      err.email = "Invalid email";
    }

    if (!data.phone.trim()) err.phone = "Phone is required";

    if (!data.service) err.service = "Select a service";

    if (!data.message.trim()) err.message = "Message is required";

    return err;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      fullname: (form.elements.namedItem("fullname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const validation = validate(data);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    if (!formRef.current) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      );

      console.log("SUCCESS:", result.text);

      alert("Message sent successfully!");
      form.reset();
      setErrors({});
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      alert("Failed to send message. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const contact_info = [
    {
      icon: <MapPin />,
      title: "Visit Our Office",
      subtitle: "Segese Village,Kahama Distric,Shinyanga region - Tanzania",
      time: "",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      subtitle:
        "+255 774 853 113, +255 758 585 682,+255 762 274 098, +255 772 537 411",
      time: "24/7 hours",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      subtitle: "bluewavemawimbi@gmail.com",
      time: "",
    },
  ];
  return (
    <>
      <section
        className="bg-cover bg-center h-[60vh] w-full flex items-center justify-center relative pb-14 bg-gray-50"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative flex items-center justify-center flex-col gap-5">
          <motion.h2
            initial={{ opacity: 0, y: -90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-extrabold text-5xl md:text-9xl "
          >
            Contacts <span className="text-blue-500">Us</span>
          </motion.h2>
          <motion.h5
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-center font-semibold text-lg px-4"
          >
            Get in touch with our experts for all your mining explosive
            solutions needs
          </motion.h5>
        </div>
      </section>

      <section className="flex md:flex-row flex-col px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-14 bg-gray-50">
        <div className="flex md:flex-row flex-col  items-center justify-evenly w-full gap-14">
          {contact_info.map((info) => (
            <Card
              icon={info.icon}
              title={info.title}
              subtitle={info.subtitle}
              time={info.time}
            />
          ))}
        </div>
      </section>

      <section
        className=" bg-gray-50 flex md:flex-row flex-col gap-5
             px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className=" flex-1 md:flex-2 p-2 md:p-12 flex flex-col shadow  rounded-md gap-3 bg-white"
        >
          <span className="w-fit px-4 py-2 bg-red-200/30 border-red-700/30 text-sm border  rounded-2xl">
            SEND A MESSAGE
          </span>
          <h1 className="text-xl font-bold">
            <span className="text-red-700 ">Book a</span> Free Consultation
          </h1>
          <p>
            Fill the form and one of our advisors will contact you within on
            business day
          </p>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 text-sm"
          >
            {/* FULL NAME + EMAIL */}
            <div className="flex md:flex-row flex-col gap-3">
              <div className="flex flex-col flex-1">
                <label className="font-semibold">FULL NAME</label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Your name"
                  className="p-3 border-2 rounded-lg outline-none focus:border-blue-500"
                />
                {errors.fullname && (
                  <span className="text-red-500">{errors.fullname}</span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="font-semibold">EMAIL ADDRESS</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 border-2 rounded-lg outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
            </div>

            {/* PHONE + SERVICE */}
            <div className="flex md:flex-row flex-col gap-3">
              <div className="flex flex-col flex-1">
                <label className="font-semibold">PHONE NUMBER</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  className="p-3 border-2 rounded-lg outline-none focus:border-blue-500"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone}</span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <label className="font-semibold">SERVICE INTERESTED</label>
                <select
                  name="service"
                  className="p-3 border-2 rounded-lg outline-none focus:border-blue-500"
                >
                  <option value="">Choose service</option>
                  <option value="Commercial Explosive">
                    Commercial Explosive
                  </option>
                  <option value="Drilling and Blasting">
                    Drilling and Blasting
                  </option>
                  <option value="Mining Chemicals">Mining Chemicals</option>
                  <option value="Consultation and Design">
                    Consultation and Design
                  </option>
                </select>
                {errors.service && (
                  <span className="text-red-500">{errors.service}</span>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder="Your message"
                className="h-44 p-3 border-2 rounded-lg outline-none focus:border-blue-500"
              />
              {errors.message && (
                <span className="text-red-500">{errors.message}</span>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 rounded-lg py-3 flex items-center justify-center gap-2"
            >
              <span className="text-white font-bold text-lg">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <Send size={14} className="text-white" />
            </button>
          </form>
        </motion.div>
        <div className="flex-1 flex flex-col  gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-gray-200   border border-gray-300 gap-2  rounded-lg flex flex-col p-5 md:p-4"
          >
            <h1 className="text-xl font-semibold">Why client choose us</h1>
            <div className="flex flex-row flex-nowrap gap-2 items-center">
              <CheckCircle size={14} /> <h4>Free initial consultation</h4>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 items-center">
              <CheckCircle size={14} /> <h4>Response within 24 hour</h4>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 items-center">
              <CheckCircle size={14} /> <h4>Certified financial planner</h4>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 items-center">
              <CheckCircle size={14} /> <h4>No sale pressure ever</h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg shadow-md flex flex-col p-5 gap-2 bg-gray-700 text-white"
          >
            <h1 className="text-xl font-semibold">Office Hours</h1>
            <div className="flex justify-between border-b  flex-row flex-nowrap py-2 border-gray-500">
              <span className="text-gray-400">Monday - Friday</span>
              <span>08:00 AM - 06:00 PM</span>
            </div>
            <div className="flex justify-between border-b flex-row flex-nowrap py-2 border-gray-500">
              <span className="text-gray-400">Saturday</span>
              <span>09:00 AM - 02:00 PM</span>
            </div>
            <div className="flex justify-between  flex-row flex-nowrap py-2 ">
              <span className="text-gray-400">Sunday</span>
              <span>Closed</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col p-5 border   border-gray-300 rounded-lg bg-gray-100 gap-3"
          >
            <h1 className="text-xl font-semibold">Connect With Us</h1>
            <div className="flex flex-row flex-nowrap gap-3 ">
              <span className="p-3 hover:bg-gray-300/50 rounded-full text-green-500">
                <FaWhatsapp size={20} />
              </span>
              <span className="p-3 hover:bg-gray-300/50 rounded-full text-[#1877F2]">
                <FaFacebook size={20} />
              </span>
              <span className="p-3 hover:bg-gray-300/50 rounded-full text-black">
                <FaTwitter size={20} />
              </span>
              <span className="p-3 hover:bg-gray-300/50 rounded-full text-[#E4405F]">
                <FaInstagram size={20} />
              </span>
              <span className="p-3 hover:bg-gray-300/50 rounded-full text-blue-600">
                <FaLinkedin size={20} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-gray-50  gap-8 px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-14 ">
        <h1 className="text-blue text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600">
          Visit Our Location
        </h1>
        <h3 className="text-lg">
          Find Us in Segese Village,Kahama Distric,Shinyanga region - Tanzania
        </h3>
        <div className="w-full h-auto bg-gray-400 p-1 rounded-lg content-fit">
          <Map />
        </div>
      </section>
    </>
  );
}

type info_data = {
  icon: any;
  title: string;
  subtitle: string;
  time: string;
};
const Card = function ({ icon, title, subtitle, time }: info_data) {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      className="h-60 shadow-md bg-white md:w-1/3 w-full rounded-xl flex flex-col justify-center items-center gap-3 p-2"
    >
      <div className="w-14 h-14 bg-gray-300 text-2xl rounded-lg flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <h1 className="font-bold">{title}</h1>
      <span className="font text-gray-400 text-md text-center  ">
        {subtitle}
      </span>
      <span className="text-gray-300">{time}</span>
    </motion.div>
  );
};

function Map() {
  return (
    <iframe
      title="Google Map"
      width="100%"
      height="500"
      loading="lazy"
      allowFullScreen
      className="rounded-lg border-0"
      src="https://www.google.com/maps?q=-3.8,32.9&z=8&output=embed"
    />
  );
}

export default ContactUs;
