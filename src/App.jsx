import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Lenta from "./components/Lenta/Lenta.jsx";
import AddIvent from "./components/AddIvent/AddIvent.jsx";
import Registration from "./components/Registration/Registration.jsx";
import s from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        
        <Header />
        <Navbar />
        <Route path="/Lenta" component={Lenta} />
        <Route path="/AddIvent" component={AddIvent} />
        <Route path="/Registration" component={Registration} />
      </div>
    </BrowserRouter>
  );
}

export default App;
