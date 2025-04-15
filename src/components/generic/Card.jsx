import React from "react";
import Pokemon from "./Pokemon";
import Type from "./Type";
import "../generic/Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
    
  const handleCardClick = () => {
    navigate("/pokemon/" + props.registry, {
      state: {
        name: props.name,
        type1: props.type1,
        type2: props.type2,
        img: props.img,
        pokeBallImg: props.pokeBallImg,
        registry: props.registry
      }
    });
  };

  const getCardBackground = () => {
    const { type1, type2 } = props;

    const typeColors = {
      Grass: "#A5d6a7",
      Fire: "#FFb374",
      Water: "#64B5F6",
      Normal: "#bdbdbd",
      Electric: "#d4c97b",
      Ice: "#00bcd4",
      Fighting: "#e06a60",
      Poison: "#d05ce3",
      Ground: "#a05a4d",
      Flying: "#fff59d",
      Psychic: "#5a2c97",
      Bug: "#ff8a80",
      Rock: "#8d6e63",
      Ghost: "#3f51b5",
      Dragon: "#D94f6e",
      Dark: "607d8b",
      Steel: "#b0bec5",
      Fairy: "#C67a85" // 2d4a6d or 1a2a3a
    };
    if (type2) {
      return `linear-gradient(135deg, ${typeColors[type1]}, ${typeColors[type2]})`;
    }
    return typeColors[type1]
  };

  return (
    <div className="card" onClick={handleCardClick} style={{background: getCardBackground() }}>
        <div className="image-container">
          <img className="pokeball-image" src={props.pokeBallImg} alt={`${props.pokeBallImg}-image`}/>
          <Pokemon img={props.img} alt={`${props.img}-image`}/>
        </div>
        <div className="card-content">
          <p className="registryNumber">{props.registry}</p>
          <h2 className="name">{props.name}</h2>
          <Type type1={props.type1} type2={props.type2}/>
        </div>
    </div>
  );
}

export default Card;