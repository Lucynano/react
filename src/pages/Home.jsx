import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Card from "../components/Card";

const Home = () => {
  const [speech] = useState(window.speechSynthesis);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Empêche le scroll

        if (speech.speaking) {
          if (isPaused) {
            speech.resume();
          } else {
            speech.pause();
          }
          setIsPaused(!isPaused);
        } else if (currentText) {
          speakText(currentText);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [speech, isPaused, currentText]);

  const speakText = (text) => {
    speech.cancel(); // Stop toute lecture en cours
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR"; // Définit la langue en français
    speech.speak(utterance);
  };

  return (
    <div className="home-container">
      <div className="top-div">
        <h1 className="title">Bienvenue sur Miahy Anao</h1>
        <p className="subtitle">
          Un centre qui vous apporte du social par Miahy Anao
        </p>
      </div>
      <div className="card-home">
        <Card
          width="270px"
          title="Etablissement"
          text="Nous présentons des établissements qui prennent en charge les personnes souffrant de handicap et d'exclusion sociale."
          onRead={() => {
            setCurrentText(
              "Nous présentons des établissements qui prennent en charge les personnes souffrant de handicap et d'exclusion sociale."
            );
            speakText(
              "Nous présentons des établissements qui prennent en charge les personnes souffrant de handicap et d'exclusion sociale."
            );
          }}
        />
        <Card
          width="270px"
          title="Offre d'emploi"
          text="Nous offrons une liste d'emplois possibles pour les personnes handicapées cherchant du travail."
          onRead={() => {
            setCurrentText(
              "Nous offrons une liste d'emplois possibles pour les personnes handicapées cherchant du travail."
            );
            speakText(
              "Nous offrons une liste d'emplois possibles pour les personnes handicapées cherchant du travail."
            );
          }}
        />
        <Card
          width="270px"
          title="Activités diverses"
          text="Les communautés de personnes handicapées proposent des activités en groupe diverses et libres pour tout le monde."
          onRead={() => {
            setCurrentText(
              "Les communautés de personnes handicapées proposent des activités en groupe diverses et libres pour tout le monde."
            );
            speakText(
              "Les communautés de personnes handicapées proposent des activités en groupe diverses et libres pour tout le monde."
            );
          }}
        />
      </div>
    </div>
  );
};

export default Home;
