/**
 * Created by david on 5/31/17.
 */
// YOU ARE HERE 'Organizing your actions' ten minutes in


const redux = require('redux');

console.log('Starting redux example');

const actions = require('./actions/index');
const store = require('./store/configure-store').configure();

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

store.dispatch(actions.fetchLocation());

// unsubscribe();
// you can turn off the subscribe using this

const currentState = store.getState();
console.log('default state: ', currentState);

store.dispatch(actions.changeName('David J'));

store.dispatch(actions.addHobby('laying down'));
store.dispatch(actions.addHobby('sitting'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Johnny'));

store.dispatch(actions.addMovie('Moon', 'Sci-fi'));
store.dispatch(actions.addMovie('Babe: Pig in the City', 'Documentary'));
store.dispatch(actions.removeMovie(1));

