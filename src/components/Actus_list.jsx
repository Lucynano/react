
import Actus_component from './Actus_component';
import React, { useState, useEffect } from "react";

import image1 from '../assets/img_1.png';
import image2 from '../assets/img_2.png';
import image3 from '../assets/img_3.png';
import image4 from '../assets/img_4.png';
import image5 from '../assets/img_5.png';
import image6 from '../assets/img_6.png';
import image7 from '../assets/img_7.png';

const actusData = [
  {
    id: 1,
    image: image1,
    name: ' L\'absence de règles de responsabilité en matière d\'IA laissera-t-elle les victimes sans recours ?',
    text: 'Pour la première fois dans le monde, l\'UE a créé une législation pour réglementer l\'intelligence artificielle, appelée Règlement sur l’IA. Mais elle semble maintenant s\'éloigner de cette protection efficace des personnes lésées par cette technologie.'
  },
  {
    id: 2,
    image: image2,
    name: 'Façonner la connectivité de demain. En partenariat avec Media City',
    text: 'Alors que les solutions de télécommunications mondiales évoluent, la technologie 5G continue d’améliorer la connectivité et ouvre la voie à la future 6G, au bénéfice des communautés du monde entier.'
  },
  {
    id: 3,
    image: image3,
    name: ' La Chine ouvre une base d\'entraînement de robots humanoïdes',
    text: 'La Chine a lancé son premier centre de formation de robots humanoïdes à Shanghai, visant à former plus de 1 000 robots d\'ici 2027 et à améliorer la robotique interdisciplinaire. '

  },
  {
    id: 4,
    image: image4,
    name: 'Des diamants éthiques ? C\'est possible grâce à la nanotechnologie. En partenariat avec the European Commission',
    text: 'Les lois internationales interdisent le commerce de diamants provenant de pays touchés par les conflits, mais pour l\'instant, il est impossible d\'être certain de l\'origine des pierres précieuses. Un laboratoire polonais a trouvé la solution. '

  },
  {
    id: 5,
    image: image5,
    name: ' « C\'est le rêve » : Quels sont les projets actuels de Google les plus enthousiasmants ?',
    text: 'Matt Brittin, président de Google pour la région EMEA, a vu plus de 50 % de la planète obtenir l\'accès à Internet. Voici ce qu\'il a retenu de sa carrière à la présidence. '

  },
  {
    id: 6,
    image: image6,
    name: ' ChatGPT souffle deux bougies : quelle est la suite ?',
    text: 'Avec deux nouvelles versions de GPT-4, o1, un nouveau moteur de recherche et un drame interne, ChatGPT et sa société mère OpenAI ont connu une deuxième année remarquable. Quelles sont les prochaines étapes ? '

  },
  {
    id: 7,
    image: image7,
    name: ' Au cœur de la bataille des consoles : une nouvelle génération d’expériences de jeu. En partenariat avec Media City',
    text: 'Les sociétés de jeux vidéo s’affrontent sur le champ de bataille des consoles pour atteindre le sommet du marché. Celles-ci essaient d’impressionner les joueurs avec des jeux spéciaux et de nouvelles technologies. '

  }
];



function ActusList() {
    // Index de la carte active (celle dont le texte est lu)
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [speech] = useState(window.speechSynthesis);
  

  // Fonction pour lancer la lecture d'un texte
  const speakText = (text) => {
    speech.cancel(); // Stop toute lecture en cours
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR"; // Voix en français
    speech.speak(utterance);
  };

  // À chaque changement de carte active, lire la concaténation de ses textes
  useEffect(() => {
    const cardText = actusData[activeCardIndex].text;
    speakText(cardText);
  }, [activeCardIndex, speech]);

  // Gestion de la touche "F" pour passer à la carte suivante
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyF") {
        event.preventDefault();
        setActiveCardIndex((prev) => (prev + 1) % actusData.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [actusData.length]);

  return (
    <div className="school-list">
      {actusData.map((school) => (
        <Actus_component
          key={school.id}
          image={school.image}
          name={school.name}
          text={school.text}
        />
      ))}
    </div>
  );
}

export default ActusList;
