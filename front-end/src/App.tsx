import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Demo } from "./demo/Demo";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
