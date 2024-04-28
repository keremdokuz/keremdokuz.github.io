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
import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";

function SectionButtons() {
  

  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div  className="title">
            <h2 > Architectural Projects  </h2>
          </div>
          <p style={{fontSize: 20}}>
           At [Your Company Name], we're a revolutionary architecture startup pushing the boundaries of design and construction.
           We leverage the power of AI and cutting-edge software to deliver fast-tracked, innovative architectural projects that meet your needs efficiently.
       
           Our unique approach combines the creativity of human vision with the precision and speed of advanced technology. 
           We can translate your ideas into stunning, functional designs in a fraction of the traditional timeframe.s
            </p>
           
         
            
         
          <br />
          
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
