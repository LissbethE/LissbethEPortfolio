import { GoArrowRight } from "react-icons/go";
import Stacks from "../components/Stacks";
import Button from "../ui/Button";

function Stack() {
  return (
    <section className="stack section-padding-big">
      <div className="stack__container u-margin-bottom-medium">
        <h2 className="heading-2 u-margin-bottom-medium">
          Habilidades Técnicas
        </h2>

        <Stacks />
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

export default Stack;
