import React from 'react';
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Lenta from "./Lenta.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Lenta />
    </div>
  );
}

export default App;
