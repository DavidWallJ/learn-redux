/**
 * Created by david on 5/31/17.
 */

// you are here 'redux actions: add to arrays'
  // challenge time about 7 mins in


const redux = require('redux');
import axios from 'axios';

console.log('Starting redux example');


// Name reducer and action generators
// ---------------
const nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

// this is called an action generator.  It's really just a simple function
const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
    // same as name: name
  }
};

// Hobbies reducer and action generators
// ---------------
let nextHobbyId = 1;
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
};

const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

// Movies reducer and action generators
// ---------------
let nextMovieId = 1;
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ];

    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);

    default:
      return state;
  }
}

const addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    genre,
    movie
  }
};

const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

// Map reducer and action generators
// ---------------
const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

const startLocationFetch = () => {
    return {
      type: 'START_LOCATION_FETCH'
    };
};

const completeLocationFetch = (url) => {
    return {
      type: 'COMPLETE_LOCATION_FETCH',
      url
    };
};

const fetchLocation = () => {
    store.dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then((res) => {
      // axios has been included in this project
      const loc = res.data.loc;
      const baseUrl = 'http://maps.google.com?q=';

      store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};

const reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// the redux.compose is just added on to allow you to use the chrome devTools


// subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View Your Location</a>'
  }

  console.log('new state: ', store.getState());
});

fetchLocation();

// unsubscribe();
// you can turn off the subscribe using this

const currentState = store.getState();
console.log('default state: ', currentState);

store.dispatch(changeName('David J'));

store.dispatch(addHobby('laying down'));
store.dispatch(addHobby('sitting'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Johnny'));

store.dispatch(addMovie('Moon', 'Sci-fi'));
store.dispatch(addMovie('Babe: Pig in the City', 'Documentary'));
store.dispatch(removeMovie(1));

