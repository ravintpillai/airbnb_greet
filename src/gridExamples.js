import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';

const gridExamplesPage = () => {
  return (
    <MDBContainer>
      <MDBRow className = "header-row">
        <MDBCol md="4"><a className="header-link" href="https://www.google.com">Eating Out</a></MDBCol>
        <MDBCol md="4">Things to See</MDBCol>
        <MDBCol md="4">Keys</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default gridExamplesPage;