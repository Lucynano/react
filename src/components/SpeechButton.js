import React, { useState, useEffect } from "react";

const SpeechButton = ({ texts = [] }) => {
  const [speech] = useState(window.speechSynthesis);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return; // ⚠️ Empêche les erreurs si texts est vide

    const handleKeyDown = (event) => {
      event.preventDefault(); // Empêche le scroll avec espace

      if (event.code === "Space") {
        if (speech.speaking) {
          isPaused ? speech.resume() : speech.pause();
          setIsPaused(!isPaused);
        } else {
          speakText();
        }
      } else if (event.code === "KeyJ") {
        nextText();
      } else if (event.code === "KeyF") {
        prevText();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [speech, isPaused, currentIndex, texts.length]); // Ajout de texts.length

  useEffect(() => {
    if (currentIndex >= texts.length) setCurrentIndex(0); // Reset si texts change
  }, [texts.length]);

  const speakText = () => {
    if (texts.length === 0) return;
    speech.cancel();
    const utterance = new SpeechSynthesisUtterance(texts[currentIndex]);
    utterance.lang = "fr-FR";
    speech.speak(utterance);
  };

  const nextText = () => {
    if (texts.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevText = () => {
    if (texts.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <div className="speech-container">
      {texts.length > 0 ? (
        <>
          <p className="current-text">{texts[currentIndex]}</p>
          <button className="read-button" onClick={speakText}>🔊 Lire</button>
          <button className="nav-button" onClick={prevText}>⬅️ Précédent (F)</button>
          <button className="nav-button" onClick={nextText}>➡️ Suivant (J)</button>
        </>
      ) : (
        <p>Aucun texte à lire.</p>
      )}
    </div>
  );
};

export default SpeechButton;






