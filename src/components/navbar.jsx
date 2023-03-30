import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <nav className="transparent">
      <img src="./EB.png" alt="logo" />
      <ul className="flex justify-end">
        <li>
          <a href="/" onClick={props.navClickHandler}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" onClick={props.navClickHandler}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" onClick={props.navClickHandler}>
            Contact
          </a>
        </li>
        <li>
          <a href="/work" onClick={props.navClickHandler}>
            Work
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  navClickHandler: PropTypes.func.isRequired,
};
