import React from "react";
import RecipeItem from "./RecipeItem";

const recipes = [
  { id: 1, title: "Pâtes Carbonara", description: "Un plat italien délicieux avec du fromage et des lardons." },
  { id: 2, title: "Tarte aux pommes", description: "Une tarte sucrée avec des pommes caramélisées et une pâte croustillante." },
  { id: 3, title: "Ratatouille", description: "Un mélange de légumes méditerranéens mijotés." },
];

const RecipeList = ({ speech, speakText, setCurrentText }) => {
  return (
    <div className="w-full max-w-lg">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          speech={speech}
          speakText={speakText}
          setCurrentText={setCurrentText}
        />
      ))}
    </div>
  );
};

export default RecipeList;
