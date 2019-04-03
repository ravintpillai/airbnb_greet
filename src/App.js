import React, { Component } from 'react';
import photo from './images/airbnb.jpg';
import './App.css';
import Welcome from './Welcome'
import gridExamplesPage from './gridExamples';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        {gridExamplesPage()}
        <div class="header-image">
          <img
                src="https://live.staticflickr.com/7898/32588548347_102e2859a7_z.jpg"
                className="img-fluid"
                alt=""
          />
        </div>
          <Welcome />
      </div>
    );
  }
}

export default App;
