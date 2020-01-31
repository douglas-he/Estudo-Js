import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemons from './Pokemons';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pokedex </h1>
          <Pokemons unidade={pokemons} />
        </header>
      </div>
    );
  }
}

export default App;
