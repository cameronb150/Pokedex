import React, { useState, useEffect } from "react";

function PokedexSlctor(props) {
  const { api, onClick } = props;
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    api
      .getPokedexsList()
      .then((res) => {
        setPokedexList(res.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [api]);

  return (
    <>
      <div>{/* Buttons GO Here */}</div>

      <h1>Pick a Pokedex </h1>

      <ul>
        {pokedexList.map((pokedex) => (
          <li key={pokedex.name} className={pokedex.name}>
            {pokedex.name}

            <button onClick={() => onClick(pokedex.name)}> View </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokedexSlctor;
