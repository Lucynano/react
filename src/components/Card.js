import React from "react";
import SpeechButton from "./SpeechButton";

const Card = ({ width, title, texts }) => {
  return (
    <div className="card" style={{ width }}>
      <h2 className="card-title">{title}</h2>
      <SpeechButton texts={texts} />
    </div>
  );
};

export default Card;
