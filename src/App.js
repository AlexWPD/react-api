import React from 'react';
import { Component } from 'react';
import './App.css';
import PokemonItemList from './Components/PokemonItemList/PokermonItemList';
import RandomPokermon from './Components/RandomPokermon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomPokermon/>
        <PokemonItemList/>
      </div>
    );
  }
}

export default App;
