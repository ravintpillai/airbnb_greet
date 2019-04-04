import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome'


export class Landing extends Component {
  render() {
    return (
      <div className="App">
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