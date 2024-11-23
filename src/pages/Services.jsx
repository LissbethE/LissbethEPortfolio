import { GoArrowRight, GoGlobe } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { useState } from "react";
import WebService from "../components/WebService";
import ResponsiveService from "../components/ResponsiveService";

function Services() {
  const [activeSide, setActiveSide] = useState(null); // "left" o "right"
  const [hoverSide, setHoverSide] = useState(null); // "left", "right" o null

  const getClassNames = (side) => {
    const isHovered = hoverSide === side;
    const isActive = activeSide === side;

    if (activeSide) {
      return isActive ? "move-full" : "hidden";
    }

    if (hoverSide) {
      return isHovered
        ? side === "left"
          ? "move-left-full"
          : "move-right-full"
        : side === "left"
        ? "move-left-hidden"
        : "move-right-hidden";
    }

    return "";
  };

  return (
    <section className="services section-padding-big">
      <div className="services__container">
        {activeSide === "left" ? (
          <WebService
            setActiveSide={setActiveSide}
            setHoverSide={setHoverSide}
          />
        ) : activeSide === "right" ? (
          <ResponsiveService
            setActiveSide={setActiveSide}
            setHoverSide={setHoverSide}
          />
        ) : (
          <>
            <div
              className={`services__left services__split ${getClassNames(
                "left"
              )}`}
              onMouseEnter={() => setHoverSide("left")}
              onMouseLeave={() => setHoverSide(null)}
              onClick={() => setActiveSide("left")}
            >
              <h1 className="u-center-text heading-1 services__title">
                01 Servicio
              </h1>

              <GoGlobe />
              <h3 className="heading-3 heading-3--services">
                Servicios De Desarrollo Web Completo
              </h3>

              <button
                type="button"
                className="services__btn services__btn--left"
              >
                Saber más
                <GoArrowRight />
              </button>
            </div>

            <div
              className={`services__right services__split ${getClassNames(
                "right"
              )}`}
              onMouseEnter={() => setHoverSide("right")}
              onMouseLeave={() => setHoverSide(null)}
              onClick={() => setActiveSide("right")}
            >
              <h1 className="u-center-text heading-1 services__title">
                02 Servicio
              </h1>

              <BsStars />
              <h3 className="heading-3 heading-3--services">
                Mejoras De Experiencia Digital
              </h3>

              <button
                type="button"
                className="services__btn services__btn--right"
              >
                Saber más
                <GoArrowRight />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Services;
