/**
 * Created by david on 5/31/17.
 */
const redux = require('redux');

console.log('Starting todo redux example');

const stateDefault = {
  searchText: '',
  showCompleted: 'false',
  todos: []
};

const reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
store.subscribe(() => {
  const state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});

console.log('default state: ', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Sup!'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: '...what?'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'I said, sup!'
});