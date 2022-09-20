import React from 'react';
import { Component } from 'react';
import './App.css';
import PokemonInfo from './Components/PokemonInfo/PokemonInfo';
import PokemonItemList from './Components/PokemonItemList/PokermonItemList';
import RandomPokermon from './Components/RandomPokermon';

class App extends Component {
  
  state = {
    selectedItemId: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id + 1
    })
  }

  render() {
    return (
      <div className="App">
        <RandomPokermon/>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                      <PokemonItemList onItemSelected={this.onItemSelected}/>
                    </ul>
                </div>
                <div className="col">
                  <PokemonInfo selectedItemId={this.state.selectedItemId} />
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
