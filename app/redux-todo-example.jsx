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

const store = redux.createStore(reducer)

console.log('default state: ', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Sup!'
});

console.log('searchText should be Sup!', store.getState());