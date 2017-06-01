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
const reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};
  // same as above

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            // by putting the ++ after the var it the next use is one higher
            // by putting the ++ before the var the id is one higher for this use
            hobby: action.hobby
          }
        ]
        // concat onto an array without updating the original
      };
    case 'REMOVE_HOBBY':
      return{
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
      }

    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      }

    case 'REMOVE_MOVIE':
      return{
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      }

    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// the redux.compose is just added on to allow you to use the chrome devTools


// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('Name is', state.name);
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

