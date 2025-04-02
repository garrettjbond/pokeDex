import React from "react";
import '../generic/Type.css';

function Type({ type1, type2 }) {
  return (
    <div className="type-container">
      {type1 && <div className="type" data-type={type1}>{type1}</div>}
      {type2 && <div className="type" data-type={type2}>{type2}</div>}
    </div>
  );
}

export default Type;