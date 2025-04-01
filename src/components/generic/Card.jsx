import React from "react";
import Avatar from "./Avatar";
import "../generic/Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="text-container">
        <h2 className="name">{props.name}</h2>
        <h2 className="type">{props.type}</h2>
      </div>
      <div className="image-container">
        <img className="type-image" src={props.typeImg} alt={`${props.typeImg}-image`}/>
        <Avatar img={props.img} alt={`${props.img}-image`}/>
      </div>
    </div>
  );
}

export default Card;