import './App.css';
import data from './localData'

import Header from './components/Header'
import PokemonSearch from './components/PokemonSearch'

function App() {
  return (
    <div className="App">
      <Header pokemons={data} />
      <PokemonSearch />
    </div>
  );
}

export default App;
