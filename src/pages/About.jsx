import { GoMail, GoGlobe, GoBriefcase } from "react-icons/go";

function AboutMe() {
  return (
    <section className="me section-padding-big">
      <div className="u-margin-bottom-small-2">
        <h2 className="heading-2 u-margin-bottom-small-2">¡Conóceme mejor!</h2>

        <p className="paragraph">
          Mi nombre es Lissbeth y soy una desarrolladora web full stack. Mi
          fascinación por el campo comenzó con una curiosidad insaciable y un
          deseo de explorar las infinitas posibilidades del ámbito digital. Como
          desarrolladora autodidacta, he perfeccionado mis habilidades a través
          de innumerables horas de dedicación y experimentación. Este enfoque
          autónomo me ha inculcado un profundo aprecio por el poder de la
          tecnología para transformar ideas en realidades digitales tangibles.
          Cada día, me impulsa la mejora continua y la creación de sitios web
          que no solo sean visualmente atractivos, sino que también ofrezcan una
          experiencia de usuario fácil y agradable.
        </p>
      </div>

      <ul className="me__list u-margin-bottom-small-2">
        <h2 className="heading-2 u-margin-bottom-small-2">Educación</h2>

        <li className="me__item u-margin-bottom-small">
          <span className="me__ball"></span>

          <div>
            <h3 className="heading-3">Udemy</h3>

            <p className="paragraph">
              Front-end and Back-end Development | Photoshop | Figma
            </p>
          </div>
        </li>

        <li className="me__item">
          <span className="me__ball"></span>

          <div>
            <h3 className="heading-3">
              Programa Mujer Digital en Junior Achievement Americas
            </h3>
            <p className="paragraph">Desarrollo Web + Cloud Computing</p>
          </div>
        </li>
      </ul>

      <div>
        <h2 className="heading-2 u-margin-bottom-small-2">¡Contáctame!</h2>

        <div className="me__contact u-margin-bottom-small">
          <GoMail />
          <a className="link" href={`mailto:lissbethescobar09@gmail.com`}>
            Correo:
            <span className="link__span">lissbethescobar09@gmail.com</span>
          </a>
        </div>

        <div className="me__contact u-margin-bottom-small">
          <GoBriefcase />

          <a
            className="link"
            rel="noreferrer"
            href="https://www.linkedin.com/in/LissbethE/"
            target="_blank"
          >
            Linkedin:
            <span className="link__span">LissbethE</span>
          </a>
        </div>

        <div className="me__contact">
          <GoGlobe />

          <a
            className="link"
            rel="noreferrer"
            href="https://github.com/LissbethE"
            target="_blank"
          >
            Github:
            <span className="link__span">LissbethE</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

/*

   <li className="nav__item">
          <Link to="/contact">
            <GoMail />
            <p className="nav__text paragraph">Contact</p>
          </Link>
        </li>
        */
