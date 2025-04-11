import React from 'react';
import Card from "../components/generic/Card";
import pokemon from '../pokemon';
import axios from 'axios';
import FilterModal from '../components/features/FilterModal/FilterModal';
import filterActiveOptionsContext from '../context/filterOptionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


function PokeGallery() {
  const [selectedGen, setSelectedGen] = useState("gen1");
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [filterActiveOptions, setFilterActiveOptions] = useState({
    generation: [],
    type: [],
    evolution: []
  });

  const genList = {
    gen1: [1, 151],
    gen2: [152, 251],
    gen3: [252, 386],
    gen4: [387, 493],
    gen5: [494, 649]
  };

  useEffect(() => {
    const fetchPokemonByGen = async (gen) => {
      setIsLoading(true);
      setPokemonData([]);
      const [min, max] = genList[gen];
  
      const newPokemonData = [];
  
      for (let id = min; id <= max; id++) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          newPokemonData.push(response.data);
        } catch (error) {
          console.error(`Error fetching Pokémon ID ${id}:`, error);
        }
      }
  
      setPokemonData(newPokemonData);
      setIsLoading(false);
      console.log(newPokemonData); // Log the fresh data instead of potentially stale state
    };
  
    fetchPokemonByGen(selectedGen);
  }, [selectedGen]);
  
  
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  return (
    <filterActiveOptionsContext.Provider value = {{filterActiveOptions, setFilterActiveOptions}}>
      <div>
        <div className='pageHeader'>
          <h1 className='heading'>PokeDex</h1>
          <button className='buttonWrapper' onClick={()=>{ setIsFilter(!isFilter)}}>
           <FontAwesomeIcon icon={faFilter} className='filter'/>
          </button>
        </div>
        { isFilter && <FilterModal isFilter={isFilter} setIsFilter={setIsFilter} /> }
        <div className='gallery'>
          {pokemonData.map((i) => (
            <Card
              key={i.id}
              pokeBallImg={pokemon[0].imgURL1}
              img={i.sprites.front_default}
              name={capitalizeFirstLetter(i.name)}
              registry={i.id}
              type1={capitalizeFirstLetter(i.types[0].type.name)}
              type2={i.types[1] ? capitalizeFirstLetter(i.types[1].type.name) : null}
              />
              ))}
         </div>
         <Link to="/PokeError">Error Page</Link>
      </div>
    </filterActiveOptionsContext.Provider>
  );
}

export default PokeGallery;
