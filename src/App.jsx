import React from "react";
import BodyContainer from "./components/body-container.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("/");

  const navClickHandler = (event) => {
    event.preventDefault();
    setCurrentPage(event.target.getAttribute("href"));
  };

  return (
    <>
      <NavBar navClickHandler={navClickHandler} />
      <BodyContainer currentPage={currentPage} />
    </>
  );
}
