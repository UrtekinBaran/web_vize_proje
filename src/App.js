// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

import Profil from "./Components/Profil";
import LoginForm from "./Components/LoginForm/LoginForm";
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
console.log(page)

  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

const [page, setPage] = useState('profile')

  const handleLogin = () => {
    // Giriş başarılı olduğunda showLogin durumunu false yaparak yemek tarifleri bölümünü göster
    setPage('recipe');
  };

  return (
    <div className="container">
      {
        page == 'profile' && <Profil toLogin={() => setPage('login')} />
      }
            {
        page == 'login' && <LoginForm onLogin={handleLogin} />
      }
            {
        page == 'recipe' &&        <>
        <h2>Yemek Tarifleri</h2>
        <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
        <div className="recipes">
          {recipes ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p>No Results.</p>
          )}
        </div>
      </>
      } 
 
      
    </div>
  );
}

export default App;
