import Education from "../components/Education";
import Experience from "../components/Experience";

function CareerPath() {
  return (
    <section className="careerPath">
      <div className="careerPath__content u-margin-bottom-medium">
        <h2 className="heading-2 u-margin-bottom-small-2">Mi Trayectoria</h2>
        <p className="paragraph">
          Desde los fundamentos del desarrollo web hasta la creación de sitios
          completos que integran frontend y backend, he recorrido un camino que
          me ha permitido transformar ideas en soluciones digitales efectivas,
          fortaleciendo mi pasión por la tecnología y la mejora continua.
        </p>
      </div>

      <div className="careerPath__career">
        <div className="u-margin-bottom-medium">
          <Experience />
        </div>

        <div className="">
          <Education />
        </div>
      </div>
    </section>
  );
}

export default CareerPath;
