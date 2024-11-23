import { useState } from "react";
import { createPortal } from "react-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function ImageViewModal({ images, show, setShow, imageIndex }) {
  const [image, setImage] = useState(imageIndex);

  const totalImages = images?.length;
  const currentImageUrl = images[image];

  ///////////////////////////

  // <--
  const handlePrev = () => {
    setImage((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  // -->
  const handleNext = () => {
    setImage((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  ///////////////////////////

  return (
    show &&
    createPortal(
      <div className="imageModal">
        <button
          onClick={() => setShow(false)}
          className="imageModal__btn-X"
          aria-label="Close image preview"
          role="button"
        >
          Cerrar
        </button>

        {currentImageUrl && (
          <img
            src={`img/${currentImageUrl}`}
            alt="Image preview"
            className="imageModal__image"
          />
        )}

        {totalImages > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="imageModal__btn imageModal__btn--left"
            >
              <GoArrowLeft />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next image"
              className="imageModal__btn imageModal__btn--right"
            >
              <GoArrowRight />
            </button>
          </>
        )}
      </div>,
      document.body
    )
  );
}

export default ImageViewModal;
