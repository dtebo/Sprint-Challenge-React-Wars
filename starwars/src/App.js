import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [data, setData] = useState(localStorage.getItem("appData") ? JSON.parse(localStorage.getItem("appData")) : null);
  const [pokemon, setPokemon] = useState(localStorage.getItem("pokemon") ? JSON.parse(localStorage.getItem("pokemon")) : null);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const base_url = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    // If our data is in cache
    if(!data){
      Axios.get(`${base_url}version-group/red-blue/`)
         .then((resp) => {
           console.log("from version group call", resp);

           // Cache our data in localstorage
           localStorage.setItem("appData", JSON.stringify(resp.data));

           return resp.data;
         })
         .then((data) => {
           // Get the Pokemon for the generation associated with this version group
           Axios.get(data.generation.url)
                .then((resp) => {
                  console.log("from Generation API Call", resp.data);
                });
         });
    }
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
