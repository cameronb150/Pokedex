import "./App.css";
import React, { useState } from "react";
import PokedexSlctor from "./PokedexSelctor";
import PokemonSelector from "./PokemonSelector";
import PokemonDetailComponent from "./PokemonDetailComponent";

const _Pokedex = require("pokeapi-js-wrapper");
const Pokedex = new _Pokedex.Pokedex();

function App() {
  const [userPokedex, setUserPokedex] = useState(null);
  const [userPokemon, setUserPokemon] = useState(null);

  const userSelectedPokedex = (pokedexName) => {
    setUserPokedex(pokedexName);
  };

  const userSelectedPokemon = (PokemonName) => {
    setUserPokemon(PokemonName);
  };

  const back_button = () => {
    if (userPokemon) {
      setUserPokemon(null);
    } else {
      setUserPokedex(null);
    }
  };

  const home = () => {
    setUserPokedex(null);
    setUserPokemon(null);
  };

  if (userPokedex == null) {
    return <PokedexSlctor api={Pokedex} onClick={userSelectedPokedex} />;
  }

  if (userPokemon == null) {
    return (
      <PokemonSelector
        api={Pokedex}
        onClick={userSelectedPokemon}
        pokedex={userPokedex}
        home={home}
        back_button={back_button}
      />
    );
  }

  if (userPokemon && userSelectedPokedex) {
    return (
      <PokemonDetailComponent
        api={Pokedex}
        pokemon={userPokemon}
        home={home}
        back_button={back_button}
      />
    );
  }
}
export default App;
