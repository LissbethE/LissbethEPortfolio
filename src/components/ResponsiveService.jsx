import { CiMobile2 } from "react-icons/ci";
import { GoArrowLeft, GoBrowser } from "react-icons/go";
import { IoAccessibility } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";

function ResponsiveService({ setActiveSide, setHoverSide }) {
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__card">
          <CiMobile2 />
          <h4 className="heading-3">Responsivo</h4>
          <p className="paragraph">
            Adaptación de sitios web para ofrecer una experiencia óptima en
            dispositivos móviles, tabletas y escritorios.
          </p>
        </div>

        <div className="service__card">
          <IoSpeedometerOutline />
          <h4 className="heading-3 ">Optimización De Rendimiento Web</h4>
          <p className="paragraph">
            Mejora de tiempos de carga y rendimiento general del sitio mediante
            optimización de código, imágenes y recursos.
          </p>
        </div>

        <div className="service__card">
          <GoBrowser />
          <h4 className="heading-3 ">Compatibilidad En Varios Navegadores</h4>
          <p className="paragraph">
            Garantía de funcionamiento y apariencia consistente de sitios web en
            los principales navegadores, asegurando una experiencia uniforme
            para todos los usuarios.
          </p>
        </div>

        <div className="service__card">
          <IoAccessibility />
          <h4 className="heading-3 ">Accesibilidad Web</h4>
          <p className="paragraph">
            Diseño y desarrollo enfocados en garantizar que los sitios sean
            accesibles para personas con discapacidades, cumpliendo estándares
            como WCAG.
          </p>
        </div>
      </div>

      <div className="service__btns service__btns--experience">
        <button
          onClick={() => {
            setActiveSide(null);
            setHoverSide(null);
          }}
        >
          <GoArrowLeft />
          Volver
        </button>
      </div>
    </div>
  );
}

export default ResponsiveService;
