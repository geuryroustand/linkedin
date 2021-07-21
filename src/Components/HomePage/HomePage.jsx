import { Container, Row, Col } from "react-bootstrap"

const HomePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={7}></Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  )
}

export default HomePage
