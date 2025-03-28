import { useState } from 'react';
import React from 'react';
import Card from "./components/generic/Card";
import './App.css';
import pokemon from './pokemon';

function App() {
  return (
      <div>
        <h1 className='heading'>PokeDex</h1>
        <div className='gallery'>
          {pokemon.map((i) => (
            <Card
              key={i.id}
              name={i.name}
              type={i.type}
              img={i.imgURL} 
              />
              ))}
         </div>
      </div>
  );
}

export default App
