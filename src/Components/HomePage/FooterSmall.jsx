//import { withRouter } from "react-router-dom"
import "../../styles/FooterSmall.css";
import { Nav, Row, Container, Dropdown } from "react-bootstrap";
import React from "react";

const FooterSmall = () => {
  return (
    <Container className="FOOOOOOOOOTer">
      <div>
        <div className="LLL d-inline-block  mr-4 ">
          {" "}
          <Nav.Link id="about"> About </Nav.Link>{" "}
        </div>
        <div className="LLL d-inline-block mr-4">
          {" "}
          <Nav.Link id="about"> Accessibility </Nav.Link>{" "}
        </div>
        <div className="LLL d-inline-block mr-4">
          {" "}
          <Nav.Link id="about"> Help Center </Nav.Link>{" "}
        </div>
      </div>{" "}
      <Row>
        <div>
          {" "}
          <Nav.Link>
            {" "}
            <Dropdown>
              <Dropdown.Toggle className="DROP ml-4" id="about">
                Privacy & Terms
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="drop-inside" href="">
                  Privacy Policy
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  User Agreement
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  Cookie Policy
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  Copyright Policy
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </Nav.Link>{" "}
        </div>
        <div className=" d-inline-block  ml-4">
          {" "}
          <Nav.Link id="about"> Ad Choices </Nav.Link>{" "}
        </div>
      </Row>
      <Row>
        <div className=" d-inline-block  ml-3">
          {" "}
          <Nav.Link id="about"> Advertising </Nav.Link>{" "}
        </div>
        <div className=" d-inline-block  ml-4">
          {" "}
          <Nav.Link id="about">
            {" "}
            <Dropdown>
              <Dropdown.Toggle className="DROP" id="about">
                Business Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="drop-inside" href="">
                  {" "}
                  Sales Solutions
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  Post a job for free
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  Marketing Solution
                </Dropdown.Item>
                <Dropdown.Item className="drop-inside" href="">
                  Learning Solution
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="drop-inside" eventKey="4">
                  Create a Company Page{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </Nav.Link>{" "}
        </div>
      </Row>
      <Row>
        <div className="DROP d-inline-block  ml-4">
          {" "}
          <Nav.Link id="about"> Get the LinkedIn app </Nav.Link>{" "}
        </div>
        <div className="DROP d-inline-block  ml-3">
          {" "}
          <Nav.Link id="about"> More </Nav.Link>{" "}
        </div>
      </Row>
      <div className="d-inline-block  ">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png"
          width="18"
          id="LogoFooter"
          alt="Linkedin logo"
        />{" "}
        LinkedIn Corporation © 2021
      </div>
    </Container>
  );
};

export default FooterSmall;
