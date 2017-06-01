/**
 * Created by david on 5/31/17.
 */

// you are here 'redux actions: add to arrays'
  // challenge time about 7 mins in


const redux = require('redux');

console.log('Starting redux example');

const stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

let nextHobbyId = 1;
let nextMovieId = 1;

const nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}

const hobbiesReducer = (state = [], action) => {
  // state = state || [];
  // es6 set default
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];

    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);

    default:
      return state;
  }
}

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          hobby: action.movie
        }
      ];

    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);

    default:
      return state;
  }
}

const reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// the redux.compose is just added on to allow you to use the chrome devTools


// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  document.getElementById('app').innerHTML = state.name;

  console.log('new state: ', store.getState());
});

// unsubscribe();
// you can turn off the subscribe using this

const currentState = store.getState();
console.log('default state: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'David J'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Sitting'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Johnny'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Moon',
  genre: 'Sci-fi'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Primer',
  genre: 'Sci-fi'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

