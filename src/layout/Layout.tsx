import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default LayoutPage;