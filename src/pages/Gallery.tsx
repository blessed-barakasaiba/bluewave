import img1 from "/src/assets/gallery/1.jpg";
import img4 from "/src/assets/gallery/4.jpg";
import img5 from "/src/assets/gallery/5.jpg";
import img6 from "/src/assets/gallery/6.jpg";
import img7 from "/src/assets/gallery/7.jpg";
import img8 from "/src/assets/gallery/8.jpg";
import img9 from "/src/assets/gallery/9.jpg";
import img10 from "/src/assets/gallery/10.jpg";

import img11 from "/src/assets/gallery/11.jpg";
import img12 from "/src/assets/gallery/12.jpg";
import img14 from "/src/assets/gallery/14.jpg";
import img17 from "/src/assets/gallery/17.jpg";
import img18 from "/src/assets/gallery/18.jpg";
import img19 from "/src/assets/gallery/19.jpg";
import img20 from "/src/assets/gallery/20.jpg";

import img21 from "/src/assets/gallery/21.jpg";
import img22 from "/src/assets/gallery/22.jpg";
import img23 from "/src/assets/gallery/23.jpg";
import img25 from "/src/assets/gallery/25.jpg";
import img26 from "/src/assets/gallery/26.jpg";
import img27 from "/src/assets/gallery/27.jpg";
import img28 from "/src/assets/gallery/28.jpg";
import img30 from "/src/assets/gallery/30.jpg";

import img31 from "/src/assets/gallery/31.jpg";
import img32 from "/src/assets/gallery/32.jpg";
import img34 from "/src/assets/gallery/34.jpg";
import img36 from "/src/assets/gallery/36.jpg";
import img37 from "/src/assets/gallery/37.jpg";
import img38 from "/src/assets/gallery/38.jpg";
import img39 from "/src/assets/gallery/39.jpg";

import img45 from "/src/assets/gallery/45.jpeg";
import img47 from "/src/assets/gallery/47.jpeg";
import img48 from "/src/assets/gallery/48.jpeg";
import img49 from "/src/assets/gallery/49.jpeg";
import img50 from "/src/assets/gallery/50.jpeg";
import img51 from "/src/assets/gallery/51.jpeg";
import img52 from "/src/assets/gallery/52.jpeg";
import img53 from "/src/assets/gallery/53.jpeg";
import img54 from "/src/assets/gallery/54.jpeg";
import img55 from "/src/assets/gallery/55.jpeg";
import img56 from "/src/assets/gallery/56.jpeg";

import video1 from "../assets/gallery/58.mp4";
import { motion } from "framer-motion";

const gallery = [
  { type: "image", src: img1 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },

  { type: "image", src: img11 },
  { type: "image", src: img12 },
  { type: "image", src: img14 },
  { type: "image", src: img17 },
  { type: "image", src: img18 },
  { type: "image", src: img19 },
  { type: "image", src: img20 },

  { type: "image", src: img21 },
  { type: "image", src: img22 },
  { type: "image", src: img23 },
  { type: "image", src: img25 },
  { type: "image", src: img26 },
  { type: "image", src: img27 },
  { type: "image", src: img28 },
  { type: "image", src: img30 },

  { type: "image", src: img31 },
  { type: "image", src: img32 },
  { type: "image", src: img34 },
  { type: "image", src: img36 },
  { type: "image", src: img37 },
  { type: "image", src: img38 },
  { type: "image", src: img39 },

  { type: "image", src: img45 },
  { type: "image", src: img47 },
  { type: "image", src: img48 },
  { type: "image", src: img49 },
  { type: "image", src: img50 },
  { type: "image", src: img51 },
  { type: "image", src: img52 },
  { type: "image", src: img53 },
  { type: "image", src: img54 },
  { type: "image", src: img55 },
  { type: "image", src: img56 },

  { type: "video", src: video1 },
];

const Gallery = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-70 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item, index) => (
          <motion.div
            key={index}

                        initial={{ opacity: 0, y: 100 }}
                        // whileHover={{ y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{once:true, amount:0.3}}
                        transition={{ duration: 0.1 }}
            className="overflow-hidden rounded-lg shadow-md transition duration-300 hover:scale-105"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-64 object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;