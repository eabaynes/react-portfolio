import PropTypes from "prop-types";
import About from "./about";
import Contact from "./contact";
import Work from "./work";

export default function BodyContainer(props) {
  switch (props.currentPage) {
    case "/":
      return (
        <div>
          <img
            className="fixed top-0 -z-10 h-screen overflow-hidden"
            src="./Cactus.png"
            alt="Cactus"
          />
          <div className=" fixed right-10 top-1/2 flex flex-col justify-end">
            <h1 className="font-bebas-neue text-4xl text-deep-purple md:text-7xl lg:text-9xl">
              Elliot Baynes
            </h1>
            <h2 className="font-bebas-neue text-mid-purple lg:ml-20 lg:text-4xl">
              Front End Developer
            </h2>
          </div>
        </div>
      );
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    case "/work":
      return <Work />;
  }
}

BodyContainer.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
