import { Link, useLocation } from "react-router-dom";
import { GoCode, GoGear, GoHome, GoRocket, GoStack } from "react-icons/go";

const routes = [
  {
    label: "Home",
    href: "/home",
    icon: <GoHome />,
  },

  {
    label: "Servicios",
    href: "/services",
    icon: <GoGear />,
  },

  {
    label: "Tecnologías",
    href: "/stack",
    icon: <GoStack />,
  },

  {
    label: "Proyectos",
    href: "/project",
    icon: <GoCode />,
  },

  {
    label: "Mi Trayectoria",
    href: "/careerPath",
    icon: <GoRocket />,
  },
];

function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {routes.map((route) => (
          <li
            className={`nav__item ${
              location.pathname === route.href ? "active" : ""
            }`}
            key={route.label}
          >
            <Link to={route.href}>
              {route.icon}
              <p className="nav__text paragraph">{route.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
