import { Container, Row, Col } from "react-bootstrap"
import ExperienceEducation from "./ExperienceEducation"

const MePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ExperienceEducation/>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default MePage
