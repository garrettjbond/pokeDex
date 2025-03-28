import { useState } from 'react';
import React from 'react';
// import Card from "./components/Card";
import './App.css';
import pokemon from './pokemon';


function createCard(pokemonCard) {
  return (
    <Card
      key={pokemonCard.id}
      name={pokemonCard.name}
      type={pokemonCard.type}
      img={pokemonCard.imgURL}
      />
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1 className='heading'>PokeDex</h1>
         {/* {pokemon.map(createCard)}  */}
         {/* <Card
         name={pokemon[0].name}
         type={pokemon[0].type}
         img={pokemon[0].imgURL} 
         />
          <Card
         name={pokemon[1].name}
         type={pokemon[1].type}
         img={pokemon[1].imgURL}
          />
          <Card
         name={pokemon[2].name}
         type={pokemon[2].type}
         img={pokemon[2].imgURL}
          />  */}
      </div>
  );
}

export default App
