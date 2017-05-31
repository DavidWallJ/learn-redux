/**
 * Created by david on 5/31/17.
 */
const redux = require('redux');

console.log('Starting redux example');

const reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  // same as above

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
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
  type: 'CHANGE_NAME',
  name: 'Johnny'
});