import { combineReducers, createStore } from 'redux';

import searchReducer from './searchReducer';
import addEventReducer from './addEventReducer';
import lentaReducer from './lentaReducer';

const reducers = combineReducers({
    searchPage: searchReducer,
    addEventPage: addEventReducer,
    lentaPage: lentaReducer
});

const store = createStore(reducers);

export default store;