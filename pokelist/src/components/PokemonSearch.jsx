import React from "react";
import data from '../localData'

import { useState } from 'react'


const Pokemon = () => {
  let discoveredPokemon = []

  // eslint-disable-next-line
  const pokenames = data.map((poke) => discoveredPokemon.push(poke.name))
  const [pokemon, setPokemon] = useState("")
  
  const searchPokemon = () => {
    const searchField = document.getElementById('pokeSearch')
    setPokemon(searchField.value)
  }

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          name="pokeSearch"
          id="pokeSearch"
          placeholder="type the name of the Pokémon, e.g.: Pikachu"
        />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <div className="result-container">
        {discoveredPokemon.includes(`${pokemon}`) ? (
          <div className="poke-img-container">
            <img
              src={require(`../../public/assets/${pokemon}.png`)}
              alt="pokemon"
            />
          </div>
        ) : (
          <div className="error-message-container">
            <h2>Sorry, this pokemon hasn't been registered yet!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Pokemon;
