import { withRouter } from "react-router";
import "../styles/LinkedinNavbar.css";

import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Col,
  Row,
  Container,
  Form,
  NavDropdown,
  Image,
  Card,
} from "react-bootstrap";
import React from "react";
import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsChatQuoteFill,
  BsBellFill,
  BsFillCalendarFill,
  BsSearch,
} from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import {
  FcFilm,
  FcComboChart,
  FcBusinessContact,
  FcPieChart,
} from "react-icons/fc";

import{ AiOutlineClose }from "react-icons/ai";

const LinkedinNavbar = () => {
  return (
    <div id="linked-in-navbar" classNameName="border-bottom">
      <Container>
        <Row>
          <Col className="ABC" xs={4}>
            {" "}
            <Navbar>
              <Navbar.Brand href="#home" className="d-flex">
                <Image
                  id="logoIN"
                  src="https://image.flaticon.com/icons/png/512/174/174857.png"
                  width="36"
                  height="36"
                  className="mr-1"
                />

                <Form>
                  <Form.Group
                    id="NavIco"
                    className="d-flex"
                    controlId="searchBAR"
                  >
                    <Form.Label>
                      <BsSearch />
                    </Form.Label>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      classNameName="mr-2"
                      
                      classNameName="SearchMe"
                    />
                  </Form.Group>
                </Form>
              </Navbar.Brand>
            </Navbar>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link href="#home">
                <BsFillHouseDoorFill></BsFillHouseDoorFill>
              </Nav.Link>{" "}
            </Row>
            <Row className="navn">
              <Nav.Link href="#home"> Home</Nav.Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              {" "}
              <Nav.Link className="NavIco" href="#network">
                <BsPeopleFill></BsPeopleFill>{" "}
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link href="#network"> My Network</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              {" "}
              <Nav.Link href="#jobs">
                <FaSuitcase></FaSuitcase>{" "}
              </Nav.Link>{" "}
            </Row>
            <Row className="navn">
              <Nav.Link href="#jobs"> Jobs</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link href="#messaging">
                {" "}
                <BsChatQuoteFill></BsChatQuoteFill>
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link href="#messaging"> Messaging</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link href="#notifications">
                {" "}
                <BsBellFill></BsBellFill>
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link href="#notifications"> Notification</Nav.Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link href="#Me">
                <Col xs={6} md={4}>
                  <Image
                    id="minion"
                    src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
                    roundedCircle
                  />
                </Col>{" "}
              </Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Me">
                <NavDropdown.Item id="meForm" href="#action/3.2">
                  <Row>
                    <Col>
                      {" "}
                      <Image
                        id="minion"
                        src="https://1075koolfm.com/wp-content/uploads/2020/02/miniomn.jpg"
                        roundedCircle
                        className="d-flex"
                      />
                    </Col>
                    <Col id="" className="d-flex m-1">
                      NAME{" "}
                    </Col>
                    <Col className="d-flex m-1">
                      Strive School Student =><br></br> Full Stack Developer{" "}
                    </Col>
                  </Row>
                  <Button id="viewProf" variant="outline-primary">
                    View Profile
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  <b>Account</b>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Settings and Privacy
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Help
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Language
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  <b> Manage</b>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Post & Activity
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Job Posting Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe" href="#action/3.3">
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link href="#work">
                <BsFillCalendarFill></BsFillCalendarFill>{" "}
              </Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Work">
              <NavDropdown.Item id="closeCross" className="Visit" href="#action/3.1">
                  <AiOutlineClose></AiOutlineClose>
                </NavDropdown.Item>
                <NavDropdown.Item className="Visit" href="#action/3.1">
                  Visit more LinkedIn Products
                </NavDropdown.Item>
                <Card style={{ width: "23rem" }}>
                  <Row className="XXX">
                    <Col>
                      <FcFilm></FcFilm>{" "}
                    </Col>
                    <Col>
                      <FcComboChart></FcComboChart> 
                    </Col>
                    <Col>
                      {" "}
                      <FcBusinessContact></FcBusinessContact> 
                    </Col>
                    <Col>
                      {" "}
                      <FcPieChart> </FcPieChart>
                    </Col>
                  </Row>
                  <Row className="XXX">
                    <Col><FcFilm></FcFilm> </Col>
                    <Col><FcPieChart> </FcPieChart> </Col>
                    <Col><FcPieChart> </FcPieChart> </Col>
                    <Col><FcPieChart> </FcPieChart> </Col>
                  </Row>
                  <Card.Body></Card.Body>
                </Card>
                <Card style={{ width: "23rem" }}>
                  <Row className="XXX"></Row>
                  <NavDropdown.Item className="Visit" href="#action/3.1">
                    LinkedIn Business Services{" "}
                  </NavDropdown.Item>
                  <Card.Body>
                    <NavDropdown.Item href="#action/3.1">
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                  </Card.Body>
                </Card>
              </NavDropdown>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(LinkedinNavbar);
