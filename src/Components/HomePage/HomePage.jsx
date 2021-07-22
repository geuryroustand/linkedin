import { Container, Row, Col } from "react-bootstrap"
import ProfileHome from "./ProfileHome"
import PostForm from "./PostForm"
import Posts from "./Posts"
import FooterSmall from "./FooterSmall"
import CommunityPanel from "./CommunityPanel"
import TopCourses from "./TopCourses"

const HomePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={2}>
          <ProfileHome meProfile={props.meProfile} />
          <CommunityPanel />
        </Col>
        <Col xs={12} md={7}>
          <PostForm />
          <Posts />
        </Col>
        <Col xs={12} md={3}>
          <TopCourses />
          <FooterSmall />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
