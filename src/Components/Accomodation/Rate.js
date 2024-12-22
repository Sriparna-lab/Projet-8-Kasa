import React from 'react';
import Staractive from "../../Assets/Rating/Staractive.png";
import Starinactive from "../../Assets/Rating/Starinactive.png";

function Rate({score}) {
 
const stars = [1, 2, 3, 4, 5];
return (
  <div className="rate"> 
    {stars.map((level) =>
      score >= level ? (
        <img
          key={level.toString()}
          className="star"
          src={Staractive}
          alt="star"
        />
      ) : (
        <img
          key={level.toString()}
          className="star"
          src={Starinactive}
          alt="star"
        />
      )
    )}
  </div>
);
}
export default Rate;


