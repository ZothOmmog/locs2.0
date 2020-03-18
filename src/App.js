import React from 'react';
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Lenta from "./Lenta.js";
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
