import React from "react";
import BodyContainer from "./components/body-container.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("/");

  function navClickHandler(event) {
    event.preventDefault();
    setCurrentPage(event.target.getAttribute("href"));
  }

  return (
    <div>
      <NavBar navClickHandler={navClickHandler} />
      <BodyContainer currentPage={currentPage} />
      <Footer />
    </div>
  );
}
