import React from "react";
import "../styles/item.css"; // Importez le fichier CSS

function Item({ children }) {
  return (
    <div>
      <div className="list-item">{children}</div>
    </div>
  );
}
export default Item;
