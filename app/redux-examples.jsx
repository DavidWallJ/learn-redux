/**
 * Created by david on 5/31/17.
 */
const redux = require('redux');

console.log('Starting redux example');

const reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  // same as above
  return state;
};

const store = redux.createStore(reducer);

const currentState = store.getState();
console.log('current state: ', currentState);
