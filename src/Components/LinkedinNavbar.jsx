import { withRouter, Link } from "react-router-dom"
import "../styles/LinkedinNavbar.css"

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
} from "react-bootstrap"
import React from "react"
import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsChatQuoteFill,
  BsBellFill,
  BsFillCalendarFill,
  BsSearch,
} from "react-icons/bs"
import { FaSuitcase } from "react-icons/fa"
import {
  FcFilm,
  FcComboChart,
  FcBusinessContact,
  FcPieChart,
} from "react-icons/fc"

import { AiOutlineClose } from "react-icons/ai"

const LinkedinNavbar = (props) => {
  return (
    <div id="linked-in-navbar" className="border-bottom">
      <Container>
        <Row>
          <Col className="ABC" xs={4}>
            {" "}
            <Navbar>
              <Navbar.Brand className="d-flex">
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
                      className="mr-2 SearchMe"
                    />
                  </Form.Group>
                </Form>
              </Navbar.Brand>
            </Navbar>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsFillHouseDoorFill />
              </Nav.Link>{" "}
            </Row>
            <Row className="navn">
              <Link
                to={"/"}
                style={{
                  color: "rgb(112, 112, 112)",
                }}
              >
                Home
              </Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              {" "}
              <Nav.Link className="NavIco">
                <BsPeopleFill></BsPeopleFill>{" "}
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link> My Network</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              {" "}
              <Nav.Link>
                <FaSuitcase></FaSuitcase>{" "}
              </Nav.Link>{" "}
            </Row>
            <Row className="navn">
              <Nav.Link> Jobs</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                {" "}
                <BsChatQuoteFill></BsChatQuoteFill>
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link> Messaging</Nav.Link>
            </Row>
          </Col>
          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                {" "}
                <BsBellFill></BsBellFill>
              </Nav.Link>
            </Row>
            <Row className="navn">
              <Nav.Link> Notification</Nav.Link>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <Col xs={6} md={4}>
                  <Image
                    id="minion"
                    src={props.meProfile && props.meProfile.image}
                    roundedCircle
                  />
                </Col>{" "}
              </Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Me">
                <NavDropdown.Item id="meForm">
                  <Row>
                    <Col>
                      {" "}
                      <Image
                        id="minion"
                        src={props.meProfile && props.meProfile.image}
                        roundedCircle
                        className="d-flex"
                      />
                    </Col>
                    <Col id="" className="d-flex m-1">
                      {props.meProfile &&
                        `${props.meProfile.name} ${props.meProfile.surname}`}
                    </Col>
                    <Col className="d-flex m-1">
                      Strive School Student <br /> Full Stack Developer{" "}
                    </Col>
                  </Row>
                  <Button
                    onClick={() => props.history.push("/me-page")}
                    id="viewProf"
                    variant="outline-primary"
                  >
                    View Profile
                  </Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">
                  <b>Account</b>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe">
                  Settings and Privacy
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe">Help</NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe">Language</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">
                  <b> Manage</b>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe">Post & Activity</NavDropdown.Item>{" "}
                <NavDropdown.Item id="dropMe">
                  Job Posting Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="dropMe">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Col>

          <Col xs={1}>
            <Row className="NavIco">
              <Nav.Link>
                <BsFillCalendarFill></BsFillCalendarFill>{" "}
              </Nav.Link>
            </Row>
            <Row>
              {" "}
              <NavDropdown id="navnMe" title="Work">
                <NavDropdown.Item id="closeCross" className="Visit">
                  <AiOutlineClose></AiOutlineClose>
                </NavDropdown.Item>
                <NavDropdown.Item className="Visit">
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
                    <Col>
                      <FcFilm></FcFilm>{" "}
                    </Col>
                    <Col>
                      <FcPieChart> </FcPieChart>{" "}
                    </Col>
                    <Col>
                      <FcPieChart> </FcPieChart>{" "}
                    </Col>
                    <Col>
                      <FcPieChart> </FcPieChart>{" "}
                    </Col>
                  </Row>
                  <Card.Body></Card.Body>
                </Card>
                <Card style={{ width: "23rem" }}>
                  <Row className="XXX"></Row>
                  <NavDropdown.Item className="Visit">
                    LinkedIn Business Services{" "}
                  </NavDropdown.Item>
                  <Card.Body>
                    <NavDropdown.Item>
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <b>Talent Solutions</b>
                      <p>
                        <small>Find, attract and recruit talent</small>{" "}
                      </p>{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item>
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
  )
}

export default withRouter(LinkedinNavbar)
