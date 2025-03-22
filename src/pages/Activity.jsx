import React from "react";
import "../styles/home.css";
import Card from "../components/Card";
import img1 from "../assets/img2.png";
import img2 from "../assets/img.png";
import img3 from "../assets/img3.png";
import Button from "../components/Button";

function Activity() {
  return (
    <div className="home-container">
      <div className="top-div">
        <h1 className="title">Vie Sociale Egalitaire</h1>
        <p className="subtitle">Centre de sociale par Miahy anao</p>
      </div>
      <div className="card-home">
        <Card
          width="270px"
          title="Randonnée"
          text="Nous présentons des établissements qui prennent en charge les personnes souffrant d'handicap et d'exclusion sociale."
          imgSrc={img1}
        />
        <Card
          width="270px"
          title="Excursion"
          text="Nous offrons une liste d'emplois possibles pour les personnes handicapées cherchant du travail."
          imgSrc={img2}
        />
        <Card
          width="270px"
          title="Activités sportives"
          text="Les communautés de personnes handicapées proposent des activités en groupe diverses et libres pour tout le monde."
          imgSrc={img3}
        />
      </div>
    </div>
  );
}

export default Activity;
