import PropTypes from "prop-types";
import Home from "./home";

export default function BodyContainer(props) {
  return (
    <div className="body-container">
      <Home />
    </div>
  );
}

BodyContainer.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
