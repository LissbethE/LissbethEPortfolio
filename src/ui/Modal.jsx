import { createPortal } from "react-dom";
import { GoArrowLeft, GoX, GoXCircle } from "react-icons/go";
import Button from "./Button";

function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className="Overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal__btns">
          <Button type="secundaryWithIcon" onClick={onClose}>
            <GoArrowLeft />
            <p>Volver</p>
          </Button>

          <Button type="secundary" onClick={onClose}>
            <GoXCircle />
          </Button>
        </div>

        <div className="modal__content">{children}</div>
      </div>
    </>,
    document.body
  );
}

export default Modal;
