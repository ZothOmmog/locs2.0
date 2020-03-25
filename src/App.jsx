import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import AddEventContainer from "./components/AddEvent/AddEventContainer.jsx";
import Registration from "./components/Registration/Registration.jsx";
import s from './App.module.css';
import { Route } from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer.jsx';
import LentaContainer from './components/Lenta/Event/LentaContainer.jsx';

function App(props) {
  return (
    <div className={s.App}>
      <Header />
      <Navbar />
      <SearchContainer />
      <Route
        path="/Lenta"
        render={() => <LentaContainer />}
      />
      <Route
        path="/AddIvent"
        render={() => <AddEventContainer />}
      />
      <Route
        path="/Registration"
        render={() => <Registration />}
      />
    </div>
  );
}

export default App;