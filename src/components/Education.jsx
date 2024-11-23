import { useState } from "react";
import data from "../data/certificates.json";
import ImageViewModal from "./ImageViewModal";
function Education() {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const { education } = data;

  return (
    <div className="education">
      <h2 className="heading-2 u-margin-bottom-small-2">Educación</h2>

      <ul className="education__list">
        {education?.map((data, index) => (
          <div key={data.name} className="education__item">
            <div className="education__b-title ">
              <span className="education__ball"></span>
              <h3 className="heading-3 heading-3--education ">{data.name}</h3>
            </div>

            <div className="education__content">
              <h4 className="heading-4 education__rol">{data.title}</h4>

              {data?.date && (
                <p className=" paragraph education__p">{data.date}</p>
              )}

              <p className="u-margin-top-small paragraph education__text-certificate ">
                certificados:
              </p>

              <ul className="education__certificates">
                {data.certificates?.map((certificate, i) => (
                  <li
                    key={i}
                    className="education__certificate"
                    onClick={() => {
                      setActiveModal(index);
                      setImageIndex(i);
                    }}
                  >
                    <img
                      src={`img/${certificate}`}
                      className="education__image"
                    />
                  </li>
                ))}
              </ul>

              {activeModal === index && (
                <ImageViewModal
                  images={data.certificates}
                  imageIndex={imageIndex}
                  show={activeModal !== null}
                  setShow={() => setActiveModal(null)}
                />
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Education;
