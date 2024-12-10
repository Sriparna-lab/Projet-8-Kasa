import React from 'react';

function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card_img" />
        <div className="card_overlay"></div>
        <div className="card_title">{title}</div>
      </div>
    );
}

export default Card;