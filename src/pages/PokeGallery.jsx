import React from 'react';
import Card from "../components/generic/Card";
// import './App.css';
import pokemon from '../pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';  
import { Link } from "react-router-dom";


function PokeGallery() {
  return (
      <div>
        <div className='pageHeader'>
          <h1 className='heading'>PokeDex</h1>
           <FontAwesomeIcon icon={faFilter} className='filter'/>
        </div>
        <div className='gallery'>
          {pokemon.map((i) => (
            <Card
              key={i.id}
              name={i.name}
              type={i.type}
              typeImg={i.imgURL1}
              img={i.imgURL2} 
              />
              ))}
         </div>
         <Link to="/PokeError">Error Page</Link>
      </div>
  );
}

export default PokeGallery;
