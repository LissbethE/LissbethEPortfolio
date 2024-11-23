import { useState } from "react";
import data from "../data/certificates.json";
import ImageViewModal from "./ImageViewModal";

function Experience() {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const { experience } = data;

  return (
    <div className="experience">
      <h2 className="heading-2 u-margin-bottom-small-2">Experiencia</h2>

      <ul className="experience__list">
        {experience.map((data, index) => (
          <div key={data.name} className="experience__item">
            <div className="experience__b-title ">
              <span className="experience__ball"></span>
              <h3 className="heading-3 heading-3--experience ">{data.name}</h3>
            </div>

            <div className="experience__content">
              <h4 className="heading-4 experience__rol">{data.rol}</h4>
              <p className="u-margin-bottom-small paragraph experience__p">
                {data.date} | {data.location}
              </p>

              {/*  <p className="u-margin-bottom-small paragraph experience__p">
                <span>
                  <GoCalendar />
                  {data.date}
                </span>
                <span>|</span>
                <span>
                  <GoLocation />
                  {data.location}
                </span>
              </p> */}

              <p className=" paragraph experience__text-certificate ">
                certificados:
              </p>

              <ul className="experience__certificates">
                {data.certificates.map((certificate, i) => (
                  <li
                    key={i}
                    className="experience__certificate"
                    role="button"
                    onClick={() => {
                      setActiveModal(index);
                      setImageIndex(i);
                    }}
                  >
                    <img
                      src={`img/${certificate}`}
                      className="experience__image"
                    />
                  </li>
                ))}
              </ul>

              {activeModal === index && (
                <ImageViewModal
                  images={data.certificates}
                  imageIndex={imageIndex}
                  show={activeModal !== null}
                  setShow={() => setActiveModal(null)} // Cierra el modal
                />
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
