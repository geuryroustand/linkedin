import { withRouter } from "react-router"
import "../styles/LinkedinNavbar.css"
import {
  Nav,
  Col,
  Row,
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"
import React from "react"

import { FaQuestionCircle } from "react-icons/fa"
import { MdSettings } from "react-icons/md"

const LinkedInFooter = () => {
  return (
    <Container id="FOOOOOOOOOTer">
      <Row>
        <Col>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png"
            width="38"
            height="38"
            className="d-inline-block align-top"
            alt="Linkedin logo"
            id="logoFooter"
          />{" "}
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> About</Nav.Link>{" "}
        </Col>

        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> Accessibility </Nav.Link>{" "}
        </Col>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> Talent Solution </Nav.Link>{" "}
        </Col>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#....">
            <FaQuestionCircle></FaQuestionCircle> Questions?{" "}
          </Nav.Link>{" "}
        </Col>
        <Col xs={4}> Select Language </Col>
        <Col> </Col>
      </Row>
      <Row>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> Community Guidelines</Nav.Link>{" "}
        </Col>

        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> Careers </Nav.Link>{" "}
        </Col>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> Marketing Solutions </Nav.Link>{" "}
        </Col>
        <Col xs={2}>
          {" "}
          <Nav.Link href="#...."> </Nav.Link>{" "}
        </Col>
        <Col xs={4}>
          <DropdownButton id="language-button" title="English (English)">
            <Dropdown.Item id="language-button" as="button">
              English
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
            <Dropdown.Item id="language-button" as="button">
              Another One
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Nav.Link href="#...."> Privacy & Terms </Nav.Link>{" "}
        </Col>

        <Col xs={2}>
          <Nav.Link href="#...."> Ad Choices </Nav.Link>{" "}
        </Col>
        <Col xs={2}>
          <Nav.Link href="#...."> Advertising </Nav.Link>{" "}
        </Col>
        <Col xs={4}>
          <Nav.Link id="manage" href="#....">
            <MdSettings></MdSettings>Manage your account and privacy{" "}
          </Nav.Link>
        </Col>
        <Col> </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link href="#...."> Sales Solutions</Nav.Link>{" "}
        </Col>

        <Col>
          <Nav.Link href="#...."> Mobile </Nav.Link>{" "}
        </Col>
        <Col>
          <Nav.Link href="#...."> Small Business</Nav.Link>{" "}
        </Col>
        <Col>
          <Nav.Link href="#...."> </Nav.Link>{" "}
        </Col>
        <Col> </Col>
        <Col> </Col>
      </Row>
      <Row> </Row>
      <Row>
        <Col>
          <Nav.Link href="#...."> Safety Center</Nav.Link>{" "}
        </Col>

        <Col>
          <Nav.Link href="#...."> </Nav.Link>{" "}
        </Col>
        <Col>
          <Nav.Link href="#...."> </Nav.Link>{" "}
        </Col>
        <Col>
          <Nav.Link href="#...."> </Nav.Link>{" "}
        </Col>
        <Col> </Col>
        <Col> </Col>
      </Row>
      <Row>
        <Col id="corp"> LinkedIn Corporation © 2021</Col>
      </Row>
      <Row></Row>
    </Container>
  )
}

export default withRouter(LinkedInFooter)
