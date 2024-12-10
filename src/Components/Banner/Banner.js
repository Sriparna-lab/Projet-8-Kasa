import React from "react";


function Banner({ image, texte, className }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className={className}></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;