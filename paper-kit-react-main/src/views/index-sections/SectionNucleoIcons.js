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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components


function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons" 
      style={{
        backgroundImage:
          "url(" + require("/Users/caknesga/Desktop/paper-kit-react-main/src/pexels-kaip-1341279.jpg") + ")",
      }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Software Solutions </h2>
              <br />
              <p className="description">
                 Utopai solve the problemsyou encounter the most.
              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                href="/nucleo-icons"
                target="_blank"
                
              >
                Early Access
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                View All Features
              </Button>
            </Col>
           
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
