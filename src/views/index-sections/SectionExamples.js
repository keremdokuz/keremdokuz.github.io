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
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div
        className="section section-dark"
        style={{
          backgroundColor: "#111",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Evolve With Change </h2>
              <p
                className="description"
                style={{ fontSize: 20, color: "#fff" }}
              >
                The construction industry is on the cusp of a transformation. At
                Utopai, we're driving this change with a suite of innovative
                software products designed specifically for architects and
                construction professionals. . <br /> Explore today!
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Screenshot 2024-04-29 020444.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Link to="/landing-page">
                <Button
                  className="btn-outline-neutral btn-round"
                  color="default"
                  target="_blank"
                >
                  Plan to render
                </Button>
              </Link>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Unbenannt3.PNG")}
                  style={{ width: "100%" }}
                />
              </a>
              <Link to="/profile-page">
                <Button
                  className="btn-outline-neutral btn-round"
                  color="default"
                  target="_blank"
                >
                  Detail Solver
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
