import React,{useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';


const Home = () => {


// 2. Get the API KEYS
const APP_ID = '8c28ac1c';
const APP_KEY = '33a819b7ffa72d5035152ed7fa432776';
// 3. this is your state
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');

// 4.search query
useEffect(() => {
  getRecipes();
}, [query]);

// 5. PARSE DATA WTH JSON REST API
const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // 5.1 JSON HERE PLEASE
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
}

const updateSearch = e => {
   setSearch(e.target.value);
   console.log(search);
}
// 6. CREATE THE SEARCH QUERY FUNCTION
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

// 7. RETURN MARKUP AND MAP YOUR PROPERTIES OUTPUT HERE
  return (
    <div className="App">
      <h1>Search for a recipe!</h1>
       <form onSubmit={getSearch} className="search-form">
          <input type="text" className="search-bar" value={search} onChange={updateSearch} />
          <button  type="Submit" className="search-button">Search</button>
       </form>
       <div className="recipes">
      {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} 
            totalWeight={recipe.recipe.totalWeight}
            cautions={recipe.recipe.cautions} />
        ))}
      </div> 
    </div>
  );
};

export default Home;
