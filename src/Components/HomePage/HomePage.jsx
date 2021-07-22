import { Container, Row, Col } from "react-bootstrap"
import ProfileHome from "./ProfileHome"
import PostForm from "./PostForm"
import Posts from "./Posts"

const HomePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={2}>
          <ProfileHome meProfile={props.meProfile} />
        </Col>
        <Col xs={12} md={7}>
          <PostForm />
          <Posts />
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  )
}

export default HomePage
