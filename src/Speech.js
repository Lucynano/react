import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";

const App = () => {
  const [speech] = useState(window.speechSynthesis);
  const [currentUtterance, setCurrentUtterance] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Empêche le scroll de la page

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
    speech.cancel(); // Arrêter toute lecture en cours
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR"; // Définit la voix en français
    setCurrentUtterance(utterance);
    speech.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des Recettes</h1>
      <p className="text-gray-500 mb-4">
        Appuie sur <b>Espace</b> pour lire, mettre en pause ou reprendre.
      </p>
      <RecipeList speech={speech} speakText={speakText} setCurrentText={setCurrentText} />
    </div>
  );
};

export default App;
