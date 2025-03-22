import React from "react";
import "../styles/card.css";

function Card({ width = "290px", height = "180px", title, text, imgSrc }) {
  return (
    <div className="card" style={{ width, height }}>
      {imgSrc && <img src={imgSrc} alt={title} className="card-img" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
