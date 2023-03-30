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
            className="absolute left-0 top-0 -z-10 h-screen w-screen"
            src="./Cactus.png"
            alt="Cactus"
          />
          <div className="absolute right-20 top-20 mt-20 flex flex-col justify-end pr-20 pt-20">
            <h1 className="font-bebas-neue text-9xl text-deep-purple">
              Elliot Baynes
            </h1>
            <h2 className="ml-20 font-bebas-neue text-4xl text-mid-purple">
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
