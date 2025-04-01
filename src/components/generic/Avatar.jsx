import React from "react";
import '../generic/Avatar.css';

function Avatar(props) {
  return (
    <div>
      <img className="avatar-image" src={props.img} alt="avatar_img"/>
    </div>
  );
}

export default Avatar;