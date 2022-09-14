import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import PokemonService from './Services/PokemonService';

// const pokemonService = new PokemonService()
// pokemonService.getAllChars().then(res => console.log(res.results.forEach(item => console.log(item.name))))
// pokemonService.getChar(9).then(res => console.log(res.height))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
