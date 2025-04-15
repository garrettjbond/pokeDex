import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Pokemon from "../components/generic/Pokemon";
import Type from "../components/generic/Type";
import "../components/generic/Card.css";
import "../components/generic/Type.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../components/generic/PokeStats.css';

function PokeStats() {
  const location = useLocation();
  const { state } = location;

  const props = state || {};

  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className='pokeStats-about'>
          <p className='about-paragraph'>placeholder paragraph</p>
          <div className='about-grid'>
            <div className='about-height'>
              <p className='line1'>Height placeholder</p>
              <p className='line2'>Height</p>
            </div>
            <div className='about-weight'>
              <p className='line1'>Weight placeholder</p>
              <p className='line2'>Weight</p>
            </div>
            <div className='about-category'>
              <p className='line1'>Category placeholder</p>
              <p className='line2'>Category</p>
            </div>
            <div className='about-abilities'>
              <p className='line1'>Abilities placeholder</p>
              <p className='line2'>Abilities</p>
            </div>
          </div>
        </div>
        );
      case 'baseStats':
        return (
          <div className='pokeStats-baseStats'>
              <div className='baseStats-hp'>
                <p>HP</p>
                <p>hp bar placeholder</p>
              </div>
              <div className='baseStats-attack'>
                <p>Attack</p>
                <p>Attack bar placeholder</p>
              </div>
              <div className='baseStats-defense'>
                <p>Defense</p>
                <p>Defense bar placeholder</p>
              </div>
              <div className='baseStats-specialAttack'>
                <p>Special Attack</p>
                <p>Special Attack bar placeholder</p>
              </div>
              <div className='baseStats-specialDefense'>
                <p>Special Defense</p>
                <p>Special Defense bar placeholder</p>
              </div>
              <div className='baseStats-speed'>
                <p>Speed</p>
                <p>Speed bar placeholder</p>
              </div>
            </div>
        );
      case 'evolutions':
        return (
            <div className='pokeStats-evolutions'>
              <p>Evolution 1</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                <p>level ...</p>
              </div>
              <p>Evolution 2</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                <p>level ...</p>
              </div>
              <p>Evolution 3</p>
            </div>
      );
      case 'moves':
        return (
        <div className='pokeStats-moves'>
          <p>Move 1</p>
          <p>Move 2</p>
          <p>Move 3</p>
          <p>Move 4</p>
        </div>
      );
      default:
        return null;
    }
  };

    return (
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon'/>
          </Link>
          <div className='pokeStats-header'>
            <p className='name'>Pokemon Name</p>
            <p>Number</p>
          </div>
          <div className='pokeStats-header2'>
          <Type type1={props.type1} type2={props.type2}/>
          </div>
          <div className='pokeStats-images'>
          <img className="pokeball-image" src={props.pokeBallImg} alt={`${props.pokeBallImg}-image`}/>
          <Pokemon img={props.img} alt={`${props.img}-image`}/>
          </div>
          <div className='pokeStats-backdrop'>
            <div className='pokeStats-navBar'>
              <p onClick={() => setActiveSection("about")}>About</p>
              <p onClick={() => setActiveSection("baseStats")}>Base Stats</p>
              <p onClick={() => setActiveSection("evolutions")}>Evolutions</p>
              <p onClick={() => setActiveSection("moves")}>Moves</p>
            </div>
           {renderSection()}
           </div>
        </div>
    );
  }
  
  export default PokeStats;