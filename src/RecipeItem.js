import React from "react";

const RecipeItem = ({ recipe, speakText, setCurrentText }) => {
  const handleSpeak = () => {
    setCurrentText(recipe.description); // Met à jour le texte actif
    speakText(recipe.description);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.description}</p>
      <button
        onClick={handleSpeak}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Lire la description
      </button>
    </div>
  );
};

export default RecipeItem;
