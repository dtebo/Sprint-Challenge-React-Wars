import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

import Page from './components/Page';

const App = () => {
  const [data, setData] = useState(localStorage.getItem("appData") ? JSON.parse(localStorage.getItem("appData")) : null);
  const [pokemonData, setPokemonData] = useState(localStorage.getItem("pokemonData") ? JSON.parse(localStorage.getItem("pokemonData")) : null);
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const base_url = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    // If our data is not in cache
    if(!data){
      Axios.get(`${base_url}version-group/red-blue/`)
         .then((resp) => {
           // Cache our data in localstorage
           localStorage.setItem("appData", JSON.stringify(resp.data));

           setData(resp.data);
         });
    }
    else{
      // If our pokemon data is not in cache
      if(!pokemonData){
        // Our data is in cache, use it to make our call to get our list of pokemon
        Axios.get(`${data.generation.url}`)
             .then((resp) => {
               // Cache our pokemon data in localstorage
               localStorage.setItem("pokemonData", JSON.stringify(resp.data));

               setPokemonData(resp.data);
             });
      }
    }
  }, [data, pokemonData]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Page pokemon={pokemonData} />
    </div>
  );
}

export default App;
