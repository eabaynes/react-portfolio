import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet context="" />
      <Footer />
    </>
  );
}
