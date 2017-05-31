/**
 * Created by david on 5/31/17.
 */
const redux = require('redux')

console.log('Starting todo redux example')

const stateDefault = {
  searchText: '',
  showCompleted: 'false',
  todos: []
};

const reducer = (state = stateDefault, action) => {

  return state
}

const store = redux.createStore(reducer)

console.log('current state: ', store.getState());