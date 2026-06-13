import img1 from "/src/assets/gallery/1.jpg";
import img2 from "/src/assets/gallery/2.jpg";
import img3 from "/src/assets/gallery/3.jpg";
import img4 from "/src/assets/gallery/4.jpg";
import img5 from "/src/assets/gallery/5.jpg";
import img6 from "/src/assets/gallery/6.jpg";
import img7 from "/src/assets/gallery/7.jpg";
import img8 from "/src/assets/gallery/8.jpg";
import img9 from "/src/assets/gallery/9.jpg";
import img10 from "/src/assets/gallery/10.jpg";

import img11 from "/src/assets/gallery/11.jpg";
import img12 from "/src/assets/gallery/12.jpg";
import img13 from "/src/assets/gallery/13.jpg";
import img14 from "/src/assets/gallery/14.jpg";
import img15 from "/src/assets/gallery/15.jpg";
import img16 from "/src/assets/gallery/16.jpg";
import img17 from "/src/assets/gallery/17.jpg";
import img18 from "/src/assets/gallery/18.jpg";
import img19 from "/src/assets/gallery/19.jpg";
import img20 from "/src/assets/gallery/20.jpg";

import img21 from "/src/assets/gallery/21.jpg";
import img22 from "/src/assets/gallery/22.jpg";
import img23 from "/src/assets/gallery/23.jpg";
import img24 from "/src/assets/gallery/24.jpg";
import img25 from "/src/assets/gallery/25.jpg";
import img26 from "/src/assets/gallery/26.jpg";
import img27 from "/src/assets/gallery/27.jpg";
import img28 from "/src/assets/gallery/28.jpg";
import img29 from "/src/assets/gallery/29.jpg";
import img30 from "/src/assets/gallery/30.jpg";

import img31 from "/src/assets/gallery/31.jpg";
import img32 from "/src/assets/gallery/32.jpg";
import img33 from "/src/assets/gallery/33.jpg";
import img34 from "/src/assets/gallery/34.jpg";
import img35 from "/src/assets/gallery/35.jpg";
import img36 from "/src/assets/gallery/36.jpg";
import img37 from "/src/assets/gallery/37.jpg";
import img38 from "/src/assets/gallery/38.jpg";
import img39 from "/src/assets/gallery/39.jpg";
import img40 from "/src/assets/gallery/40.jpg";

import img41 from "/src/assets/gallery/41.jpg";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35,
  img36, img37, img38, img39, img40,
  img41
];


const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " >
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={`gallery-${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;