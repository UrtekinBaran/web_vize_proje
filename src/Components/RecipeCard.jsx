import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  const [isFavorite, setIsFavorite] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleFavorite = () => {
    // Favori işlemleri burada yapılabilir
    setIsFavorite(!isFavorite);
  };

  const handleShowIngredients = () => {
    // Malzemeleri gösterme işlemleri burada yapılabilir
    setShowIngredients(true);
  };

  const handleShowComments = () => {
    // Yorumları gösterme işlemleri burada yapılabilir
    setShowComments(true);
  };

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={`https://www.themealdb.com/meal/${idMeal}`} target="_blank" rel="noopener noreferrer">
          Instructions
        </a>
        <button onClick={handleFavorite}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        <button onClick={handleShowIngredients}>Show Ingredients</button>
        <button onClick={handleShowComments}>Show Comments</button>
      </div>

      {/* Eklenen Modal Component'leri */}
      {showIngredients && (
        // Modal için bir bileşen veya div
        <div className="modal">
          {/* Malzemeleri gösterme içeriği */}
          <button onClick={() => setShowIngredients(false)}>Close</button>
        </div>
      )}

      {showComments && (
        // Modal için bir bileşen veya div
        <div className="modal">
          {/* Yorumları gösterme içeriği */}
          <button onClick={() => setShowComments(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
