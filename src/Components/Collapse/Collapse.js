import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  
  const [isOpen, setIsOpen] = useState(false); 

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
        {isOpen && <div className="collapse__dropdown__drop">{content}</div>}
      </div>
   
  );
};

export default Collapse;