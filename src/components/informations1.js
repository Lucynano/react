const speech = window.speechSynthesis;

function parlerInfo(nom, ville, typeHandicape) {
  const phrase = `L'établissement s'appelle ${nom}, il se localise à ${ville} et le type d'handicap dont il prend en charge est ${typeHandicape}.`;
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "fr-FR";
  speech.speak(utterance);
}

export default parlerInfo();