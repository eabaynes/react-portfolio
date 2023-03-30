import PropTypes from "prop-types";
import About from "./about";
import Contact from "./contact";
import Work from "./work";

export default function BodyContainer(props) {
  switch (props.currentPage) {
    case "/":
      return (
        <div>
          <img src="./Cactus.png" alt="Cactus" />
          <h1> Elliot Baynes</h1>
          <h2> Full Stack Developer</h2>
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
