import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactsUs";
import AboutUs from "./components/About";
import OurServices from "./pages/OurSerives";
import LayoutPage from "./layout/Layout.tsx"
import Product from "./pages/Product.tsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;