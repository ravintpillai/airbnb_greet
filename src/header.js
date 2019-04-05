import React from "react";
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const header = () => {
  return (
    <MDBContainer>
        <MDBRow className = "header-row">
            <MDBCol md="3"><NavLink className="header-link" to="/">Home</NavLink></MDBCol>
            <MDBCol md="3"><NavLink className="header-link" to="/to-do">Things To Do</NavLink></MDBCol>            
            <MDBCol md="3"><NavLink to="/eating" className="header-link">Eating Out</NavLink></MDBCol>
            <MDBCol md="3"><NavLink className="header-link" to="/apartment">The Apartment</NavLink></MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default header;