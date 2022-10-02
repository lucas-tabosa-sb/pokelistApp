import './App.css';
import data from './localData'

import Header from './components/Header'
import PokemonSearch from './components/PokemonSearch'
import AddPokemon from './components/AddPokemon';

function App() {
  return (
    <div className="App">
      <Header pokemons={data} />
      <PokemonSearch />
      <AddPokemon />
    </div>
  );
}

export default App;
