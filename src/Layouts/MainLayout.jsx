import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/css/bootstrap.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/icofont.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/flaticon.css";
import "../assets/css/meanmenu.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/style.css";
import "../assets/css/dark.css";
import "../assets/css/responsive.css";
import {
  FaUser,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
 
export default function MainLayout() {
  return (
    <>
      <Header />
      
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}