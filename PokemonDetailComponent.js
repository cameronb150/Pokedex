import React, { useState, useEffect } from "react";

function PokemonDetailComponent(props) {
  const { api, pokemon } = props;
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    api
      ?.getPokemonByName(pokemon)
      .then((res) => {
        setPokemonStats(res);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [api, pokemon]);

  return (
    <>
      <div>
        <button onClick={props.back_button}> Back </button>
        <button onClick={props.home}> Home </button>
      </div>
      <img src={pokemonStats?.sprites?.front_default} alt="sorry" />
      <h1>You chose {pokemonStats.name} </h1>
      <h2> Stats</h2>
      <ul>
        {pokemonStats?.stats?.map((stat, i) => (
          <li key={i}>
            {stat?.stat?.name}: {stat.base_stat}
          </li>
        ))}
      </ul>

      <h2> Types</h2>
      <ul>
        {pokemonStats?.types?.map((type, i) => (
          <li key={i}>{type?.type.name}</li>
        ))}
      </ul>

      <h2>Abilities </h2>
      <ul>
        {pokemonStats.abilities?.map((ability, i) => (
          <li key={i}>{ability.ability.name}</li>
        ))}
      </ul>
    </>
  );
}

export default PokemonDetailComponent;
