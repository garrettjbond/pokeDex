import React from 'react';
import { Link } from "react-router-dom";

function PokeError() {
  return (
      <div>
        <p>Error: 404</p>
        <Link to="/">Go Back to Gallery</Link>
      </div>
  );
}

export default PokeError;