import {
  GoArrowLeft,
  GoDatabase,
  GoDeviceDesktop,
  GoServer,
  GoTools,
} from "react-icons/go";

function WebService({ setActiveSide, setHoverSide }) {
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__card">
          <GoDeviceDesktop />
          <h4 className="heading-3">Desarrollo Front-End</h4>
          <p className="paragraph">
            Diseño y desarrollo de interfaces de usuario intuitivas y
            atractivas, enfocadas en ofrecer una experiencia de usuario
            optimizada. Creación de páginas web estáticas y dinámicas, adaptadas
            a diversos dispositivos y necesidades del cliente.
          </p>
        </div>

        <div className="service__card">
          <GoServer />
          <h4 className="heading-3 ">Desarrollo Back-End</h4>
          <p className="paragraph">
            Creación de API RESTful eficientes y seguras. Implementación de
            lógica de negocio adaptada a los requerimientos específicos de cada
            proyecto.
          </p>
        </div>

        <div className="service__card">
          <GoDatabase />
          <h4 className="heading-3 ">Bases De Datos</h4>
          <p className="paragraph">
            Gestión, diseño y mantenimiento de bases de datos para garantizar
            rendimiento, escalabilidad e integridad de los datos.
          </p>
        </div>

        <div className="service__card">
          <GoTools />
          <h4 className="heading-3 ">Soporte Y Mantenimiento Web</h4>
          <p className="paragraph">
            Actualización de contenido, implementación de mejoras y resolución
            de problemas técnicos.
          </p>
        </div>
      </div>

      <div className="service__btns">
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

export default WebService;
