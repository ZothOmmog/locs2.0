import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Lenta from "./components/Lenta/Lenta.jsx";
import AddIvent from "./components/AddIvent/AddIvent.jsx";
import Registration from "./components/Registration/Registration.jsx";
import s from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <Navbar />
        <Search state={props.state.stateSearch}/>
        <Route path="/Lenta" render={ () => <Lenta state={props.state.stateLenta} /> } />
        <Route path="/AddIvent" render={ () => <AddIvent  /> } />
        <Route path="/Registration" render={ () => <Registration /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
