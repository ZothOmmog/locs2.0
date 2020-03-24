import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header.jsx";
import Lenta from "./components/Lenta/Lenta.jsx";
import AddEventContainer from "./components/AddEvent/AddEventContainer.jsx";
import Registration from "./components/Registration/Registration.jsx";
import s from './App.module.css';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className={s.App}>
      <Header />
      <Navbar />
      <Search state={props.store.getState().searchPage} />
      <Route
        path="/Lenta"
        render={() => <Lenta state={props.store.getState().lentaPage} />}
      />
      <Route
        path="/AddIvent"
        render={() => <AddEventContainer store={props.store} />}
      />
      <Route
        path="/Registration"
        render={() => <Registration />}
      />
    </div>
  );
}

export default App;