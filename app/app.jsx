import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Biolerplate 3 Project</p>,
//   document.getElementById('app')
// );

require('./redux-examples');
// require('./redux-todo-example');