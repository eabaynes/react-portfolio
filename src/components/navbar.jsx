import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <nav className="transparent flex justify-between p-4">
      <img className="w-11" src="./EB.png" alt="logo" />
      <ul className="flex justify-between  text-sm text-deep-purple md:text-lg lg:text-lg">
        <li className="mx-1 lg:mx-5">
          <a href="/" onClick={props.navClickHandler}>
            Home
          </a>
        </li>
        <li className="mx-1 lg:mx-5">
          <a href="/about" onClick={props.navClickHandler}>
            About
          </a>
        </li>
        <li className="mx-1 lg:mx-5">
          <a href="/work" onClick={props.navClickHandler}>
            Work
          </a>
        </li>
        <li className="mx-1 lg:mx-5">
          <a href="/contact" onClick={props.navClickHandler}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  navClickHandler: PropTypes.func.isRequired,
};
