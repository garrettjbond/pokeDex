import React from "react";
import '../generic/Avatar.css';

function Avatar(props) {
  return (
  <div>
  <img className="pokemon-img" src={props.img} alt="avatar_img"/>
  </div>)
}

export default Avatar;