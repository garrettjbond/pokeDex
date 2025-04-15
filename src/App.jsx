import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeGallery from "./pages/PokeGallery";
import PokeStats from "./pages/PokeStats";
import PokeError from "./pages/PokeError";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokeGallery />} />
        <Route path="/pokemon/:id" element={<PokeStats />} /> 
        <Route path="*" element={<PokeError />} />
      </Routes>
    </Router>
  );
}

export default App;
