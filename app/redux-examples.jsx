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

const store = redux.createStore(reducer);

const currentState = store.getState();

console.log('current state: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'David J'
});

console.log('Name should be david', store.getState());