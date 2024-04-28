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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// core components

function SectionDownload() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Do you like what you see?</h2>
             
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="#ff5c5c"
                href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                target="_blank"
                >
                Contact us 
              </Button>
            </Col>
          </Row>


        





          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              
              
            </Col>
            
          </Row>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                style={{backgroundColor:"#111",color:"#fff",borderColor:"#111"}}
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                 X
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                style={{backgroundColor:"#c13584",color:"#fff",borderColor:"#c13584"}}
                href="#pablo"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
              >
                Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                 Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                target="_blank"
                id="tooltip864353654"
              >
                 Github
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
