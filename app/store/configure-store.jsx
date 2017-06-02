/**
 * Created by david on 6/1/17.
 */
const redux = require('redux');
const thunk = require('redux-thunk').default;
import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from './../reducers/index';

export const configure = () => {
  const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  })

  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
// the redux.compose is just added on to allow you to use the chrome devTools

  return store;
};