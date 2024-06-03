import { GoArrowRight } from "react-icons/go";
import Stacks from "../components/Stacks";
import Button from "../ui/Button";

function Stack() {
  return (
    <section className="stack section-padding-big">
      <div className="stack__container">
        <h2 className="heading-2 u-margin-bottom-small-2">
          Habilidades técnicas
        </h2>

        <p className="paragraph u-margin-bottom-small-2">
          Como desarrolladora web full-stack, ofrezco un conjunto completo de
          habilidades que cubren tanto el desarrollo front-end como el back-end.
          Mi versatilidad me permite abordar proyectos desde su inicio hasta su
          implementación final con eficiencia y precisión. Además, tengo
          experiencia en diseño web responsivo, asegurando que los sitios que
          desarrollo sean visualmente atractivos y funcionales en todo tipo de
          dispositivos.
        </p>

        <div className="u-margin-bottom-small-2">
          <h3 className="heading-3 heading-3--stacks  u-margin-bottom-small">
            Stacks
          </h3>
          <Stacks />
        </div>
      </div>

      <Button to="/project" type="primaryWithIcon">
        Proyectos
        <div className="animated-right-arrow">
          <GoArrowRight />
        </div>
      </Button>
    </section>
  );
}

/*
  Como desarrolladora web full-stack, ofrezco un conjunto completo de
          habilidades que cubren tanto el desarrollo front-end como el back-end.
          Mi versatilidad me permite abordar proyectos desde su inicio hasta su
          implementación final con eficiencia y precisión. Además, tengo
          experiencia en diseño web responsivo, asegurando que los sitios que
          desarrollo sean visualmente atractivos y funcionales en todo tipo de
          dispositivos. Mi enfoque se centra en crear soluciones digitales que
          no solo cumplan con los requisitos del cliente, sino que también
          superen sus expectativas.
           */

export default Stack;
