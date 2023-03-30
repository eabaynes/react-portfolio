import PropTypes from "prop-types";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Work from "./work";

export default function BodyContainer(props) {
  switch (props.currentPage) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    case "/work":
      return <Work />;
    default:
      return <Home />;
  }
}

BodyContainer.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
