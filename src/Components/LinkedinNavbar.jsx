import { withRouter } from "react-router";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
  Container,
  Form,
  NavDropdown,
  Image
} from "react-bootstrap";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsChatQuoteFill,
  BsBellFill,
  BsPersonSquare,
  BsFillCalendarFill,
} from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { render } from "@testing-library/react";

const LinkedinNavbar = () => {
  render();
  {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            {" "}
            <Navbar>
              <Container>
                <Navbar.Brand href="#home" id="NavBar">
                  <Form className="d-flex">
                    <img
                      src="https://image.flaticon.com/icons/png/512/174/174857.png"
                      width="38"
                      height="38"
                      className="d-inline-block align-top"
                      alt="Linkedin logo"
                      id="logo"
                    />
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                    />
                  </Form>
                </Navbar.Brand>
              </Container>
            </Navbar>
          </Col>

          <Col xs={1}>
            <Row> </Row>
          </Col>

          <Col xs={1}>
            <Row id="NavIco"><Nav.Link href="#home"><BsFillHouseDoorFill></BsFillHouseDoorFill></Nav.Link>
              {" "}
              
            </Row>
            <Row id="navn"><Nav.Link href="#home"> Home</Nav.Link></Row>
          </Col>

          <Col xs={1}>
            <Row id="NavIco"> <Nav.Link href="#network">
              <BsPeopleFill></BsPeopleFill>{" "}</Nav.Link>
            </Row>
            <Row id="navn"><Nav.Link href="#network"> My Network</Nav.Link></Row>
          </Col>
          <Col xs={1}>
            <Row id="NavIco"> <Nav.Link href="#network"><FaSuitcase></FaSuitcase> </Nav.Link>
              {" "}
              
            </Row>
            <Row id="navn"><Nav.Link href="#network"> Jobs</Nav.Link></Row>
          </Col>
          <Col xs={1}>
            <Row id="NavIco"><Nav.Link href="#network">
              {" "}
              <BsChatQuoteFill></BsChatQuoteFill></Nav.Link>
            </Row>
            <Row id="navn"><Nav.Link href="#network"> Messaging</Nav.Link></Row>
          </Col>
          <Col xs={1}>
            <Row id="NavIco"><Nav.Link href="#network">
              {" "}
              <BsBellFill></BsBellFill></Nav.Link>
            </Row>
            <Row id="navn"><Nav.Link href="#network"> Notification</Nav.Link></Row>
          </Col>

          <Col xs={1}>
            <Row id="NavIco"><Nav.Link href="#network">
            <Col xs={6} md={4}>
      <Image id="minion" src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg" roundedCircle />
    </Col>{" "}</Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Me">
                
                <NavDropdown.Item id="dropMe" href="#action/3.2">
                 <div>Profile information + picture </div>
                 <Button id="viewProf" variant="outline-primary">View Profile</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  id="dropMe"href="#action/3.3">
                  <b>Account</b>
                </NavDropdown.Item> <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Settings and Privacy
                </NavDropdown.Item> <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Help
                </NavDropdown.Item> <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Language
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  <b> Manage</b>
                </NavDropdown.Item> <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Post & Activity
                </NavDropdown.Item> <NavDropdown.Item  id="dropMe" href="#action/3.3">
                  Job Posting Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  id="dropMe" href="#action/3.3">
                  Sign Out
                </NavDropdown.Item>

              </NavDropdown>
            </Row>
          </Col>

          <Col xs={1}>
            <Row id="NavIco"><Nav.Link href="#network">
              <BsFillCalendarFill></BsFillCalendarFill>{" "}</Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Work">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default withRouter(LinkedinNavbar);
