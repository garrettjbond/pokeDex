import React from "react";
import '../generic/Pokemon.css';

function Pokemon(props) {
  return (
    <div>
      <img className="pokemon-image" src={props.img} alt="pokemon image"/>
    </div>
  );
}

export default Pokemon;