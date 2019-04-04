import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Landing} from './Landing';
import {Eating} from './Eating'
import {ToDo} from './ToDo'
import {Apartment} from './Apartment'
import gridExamplesPage from './gridExamples';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="App">
          {gridExamplesPage()}
        </div>  
        <Route exact path="/" component={Landing} />
        <Route exact path="/eating" component={Eating} />
        <Route exact path="/to-do" component={ToDo} />
        <Route exact path="/apartment" component={Apartment} />
      </div>
      </Router>
      
    );
  }
}

export default App;