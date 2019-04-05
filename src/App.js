import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Landing} from './Sections/Landing';
import {Eating} from './Sections/Eating'
import {ToDo} from './Sections/ToDo'
import {Apartment} from './Sections/Apartment'
import header from './header';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="App">
          {header()}
        </div>  
        <Route exact path="/" component={Landing} />
        <Route exact path="/to-do" component={ToDo} />        
        <Route exact path="/eating" component={Eating} />
        <Route exact path="/apartment" component={Apartment} />
      </div>
      </Router>
      
    );
  }
}

export default App;