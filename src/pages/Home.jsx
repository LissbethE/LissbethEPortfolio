import { GoArrowRight } from "react-icons/go";
import Button from "../ui/Button";

function Home() {
  return (
    <section className="home section-padding-big">
      <header className="home__header">
        <h1 className="heading-1 heading-1--header u-margin-bottom-huge">
          <span>Creative</span>
          <span>
            Front end <span>&</span>
          </span>
          <span>Back end developer</span>
        </h1>

        <p className="paragraph home__paragraph u-margin-bottom-small-2">
          ¡Hola! Soy Lissbeth y me aventuro en el apasionante mundo del diseño y
          desarrollo web, donde cada píxel cobra vida con un propósito definido.
          Mi pasión radica en transformar ideas en sitios web visualmente
          impactantes y fáciles de navegar.
        </p>

        <Button to="/about-me" type="primaryWithIcon">
          Ver más sobre mí
          <div className="animated-right-arrow">
            <GoArrowRight />
          </div>
        </Button>
      </header>
    </section>
  );
}

export default Home;
