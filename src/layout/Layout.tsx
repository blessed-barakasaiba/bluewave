import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default LayoutPage;