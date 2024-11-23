import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

function Home() {
  return (
    <section className="home section-padding-big">
      <header className="home__header">
        <h1 className="heading-1 heading-1--header u-margin-bottom-big">
          <span className="heading-1--header--star">
            <PiStarFourLight />
            <PiStarFourLight />
            <PiStarFourLight />
            <PiStarFourLight />
          </span>

          <span>Desarrolladora Web</span>
          <span>
            <span>en</span> MERN Stack
          </span>
        </h1>

        <p className="paragraph home__paragraph u-margin-bottom-medium">
          ¡Hola! Soy Lissbeth, desarrolladora web apasionada por transformar
          ideas en soluciones digitales únicas. Mi objetivo es crear sitios web
          y aplicaciones funcionales, visualmente impactantes y fáciles de
          navegar. Me encanta dar vida a cada proyecto, asegurándome de que cada
          píxel tenga un propósito definido y que cada experiencia sea
          optimizada para el usuario.
        </p>

        <div className="home__social">
          <ul className="home__list">
            <li>
              <a
                className="home__link"
                rel="noreferrer"
                href="https://www.linkedin.com/in/LissbethE/"
                target="_blank"
              >
                <IoLogoLinkedin />
                Linkedin
              </a>
            </li>

            <li>
              <a
                className="home__link"
                rel="noreferrer"
                href="https://github.com/LissbethE"
                target="_blank"
              >
                <FaGithub />
                Github
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Home;
