import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Lenta from "./components/Lenta/Lenta.jsx";
import AddEvent from "./components/AddEvent/AddEvent.jsx";
import Registration from "./components/Registration/Registration.jsx";
import s from './App.module.css';
import { Route } from 'react-router-dom';

function App(props) {
  return (
      <div className={s.App}>
        <Header />
        <Navbar />
        <Search state={props.state.search}/>
        <Route path="/Lenta" render={ () => <Lenta state={props.state.lenta} /> } />
        <Route path="/AddIvent" render={ () => <AddEvent  state={props.state.addEvent}/> } />
        <Route path="/Registration" render={ () => <Registration /> } />
      </div>
  );
}

export default App;
