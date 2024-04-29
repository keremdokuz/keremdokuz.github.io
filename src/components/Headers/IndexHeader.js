/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
const styles = {
  
  heading: {
      fontSize: '200px',
      fontWeight: '',
      color: '#fff',
      fontFamily: 'Arial, Helvetica, Arial, sans-serif',
      
  },
 
};

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Unbenannt.PNG") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 style={styles.heading} >     Utopai </h1>
             
              
            </div>
            <h2 className="presentation-subtitle text-center" style={{fontStyle: "italic ", fontFamily: "Arial, Helvetica, Arial, sans-serif"} }>
             Designed by people
            </h2>
          </Container>
        </div>
        <div
          
        />
        
      </div>
    </>
  );
}

export default IndexHeader;
