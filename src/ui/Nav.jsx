import { GoCode, GoHome, GoMail, GoPerson, GoStack } from "react-icons/go";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav box box--nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/home">
            <GoHome />
            <p className="nav__text paragraph">Home</p>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/about-me">
            <GoPerson />
            <p className="nav__text paragraph">Me</p>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/stack">
            <GoStack />
            <p className="nav__text paragraph">Stack</p>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/projects">
            <GoCode />
            <p className="nav__text paragraph">Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
