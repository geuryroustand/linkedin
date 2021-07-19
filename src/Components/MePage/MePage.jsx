import { Container, Row, Col } from "react-bootstrap"
import YourDashboard from "./YourDashboard"
import AboutMe from "./AboutMe"
import Activity from "./Activity"

const MePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <YourDashboard />
          <AboutMe />
          <Activity />
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default MePage
