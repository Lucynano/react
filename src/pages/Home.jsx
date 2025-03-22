import React from "react";
import "../styles/home.css";
import Card from "../components/Card";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Home() {
  return (
    <div className="home-container">
      <div className="top-div">
        <h1 className="title">Bienvenue sur Miahy Anao</h1>
        <p className="subtitle">Un centre qui vous apporte de sociale par Miahy anao</p>
      </div>
      <div className="card-home">
        <Card
          width="270px"
          title="Etablissement"
          text="Nous presentons des etablissement qui prends en charge les personnes
            souffrants d'handicape et d'exclusion sociale"
          imgSrc={img1}
        />
        <Card
          width="270px"
          title="Offre d'emploie"
          text="Nous offrons une liste d'emplois possibles pour les personnes handicapées cherchant du travail."
          imgSrc={img2}
        />
        <Card
          width="270px"
          title="Activités diverses"
          text="Les communautes des personnes handicape proposent des activites en groupes diverse 
            et libre en groupe diverse et libre pourtout le monde"
          imgSrc={img3}
        />
      </div>
    </div>
  );
}

export default Home;
