import React from "react";

const Card = ({ width, title, text, onRead }) => {
  return (
    <div className="card" style={{ width }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <button className="read-button" onClick={onRead}>🔊 Lire</button>
    </div>
  );
};

export default Card;
