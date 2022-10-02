import React from "react";
import { useState, useEffect } from "react";

import "./styles/AddPokemon.component.css";

const AddPokemon = () => {

  const [newPokemon, setNewPokemon] = useState([]);

   const addPokemon = useEffect((e) => {
    e.preventDefault()
    const addField = document.getElementById("pokeName");
    setNewPokemon(newPokemon.push(addField.value));
  })


  return (
    <div className="form-container">
      <h3>Register a New Pokémon: </h3>
      <form action="submit" id="register-pokemon">
        <label htmlFor="pokeName">Name of the Pokémon: </label>
        <input type="text" id="pokeName" name="pokeName" />
        <label htmlFor="pokeImage" id="pokeImage">
          Choose an Image:
        </label>
        <input type="file" name="pokeImage" id="pokeImage" />
        <button type="submit" id="pokeAdd" onClick={addPokemon}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default AddPokemon;
