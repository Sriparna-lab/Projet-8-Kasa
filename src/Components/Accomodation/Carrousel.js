import React, { useState } from "react";

function Carousel({ slides }) {
 
  const [current, setCurrent] = useState(0);
  const length = slides.length; 

 
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };



  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={previousImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <>
                <img src={image} alt="appartement" className="slide__image" />
                {length > 1 && (
                  <p className="photocount">
                    {current + 1}/{length}
                  </p>
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
