import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="left">
        <h2 className="name">{props.name}</h2>
        <h2 className="type">{props.type}</h2>
      </div>
      <div className="right">
        <img className="image">{props.img}</img>
      </div>
    </div>
  );
}

export default Card;