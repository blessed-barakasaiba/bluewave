import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactsUs";
import AboutUs from "./pages/About.tsx";
import OurServices from "./pages/OurSerives";
import LayoutPage from "./layout/Layout.tsx"
import Product from "./pages/Product.tsx";
import Gallery from "./pages/Gallery.tsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;