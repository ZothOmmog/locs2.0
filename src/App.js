import React from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import Lenta from "./components/Lenta/Lenta.js";
import s from  './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Navbar />
      <Lenta />
    </div>
  );
}

export default App;
