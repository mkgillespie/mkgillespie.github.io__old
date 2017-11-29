import React, { Component } from 'react';
import Header from './screens/Header/header.js';
import About from './screens/About/about.js';
import Actions from './screens/Actions/actions.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

	      <Router>
	      	<div>
		      	<Route exact path="/" component={Actions}/>
		      	<Route path="/about" component={About}/>
		      </div>
	      </Router>
      </div>
    );
  }
}

export default App;
