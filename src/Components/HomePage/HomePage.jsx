import { Container, Row, Col } from "react-bootstrap"
import CommunityPanel from "./CommunityPanel"
import TopCourses from "./TopCourses"

const HomePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={2}>
          <CommunityPanel/>
        </Col>
        <Col xs={12} md={7}></Col>
        <Col xs={12} md={3}>
          <TopCourses/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
