import React, { useState, useEffect } from "react";

function PokemonSelector(props) {
  const { api, onClick, pokedex } = props;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api
      .getPokedexByName(pokedex)
      .then((res) => {
        setPokemon(res.pokemon_entries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [api, pokedex]);

  return (
    <>
      <div>
        <button onClick={props.back_button}> Back </button>
        <button onClick={props.home}> Home </button>
      </div>

      <h1>Pick a Pokemon </h1>

      <ol>
        {pokemon.map((pokemon) => (
          <li
            key={pokemon.pokemon_species.name}
            className={pokemon.pokemon_species.name}
          >
            {pokemon.pokemon_species.name}
            <button onClick={() => onClick(pokemon.pokemon_species.name)}>
              View
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default PokemonSelector;
