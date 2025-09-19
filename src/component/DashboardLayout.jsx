import { Outlet } from "react-router-dom";
import Background from '../assets/background.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorTrail from "./CursorTrail";

const DashboardLayout = () => {
  return (
    <div className="absolute inset-0 bg-sky-200 z-0">
        <CursorTrail />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
};
export default DashboardLayout;