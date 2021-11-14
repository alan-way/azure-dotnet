import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        侧边栏
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
