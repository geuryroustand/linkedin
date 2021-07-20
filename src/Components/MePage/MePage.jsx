import { Container, Row, Col } from "react-bootstrap"
import ExperienceEducation from "./ExperienceEducation"
import YourDashboard from "./YourDashboard"
import AboutMe from "./AboutMe"
import Activity from "./Activity"
import Interests from "./Interests"
import EditProfile from "./EditProfile"
import YourDreamJob from "../YourDreamJob"
import ProfileFace from "./ProfileFace"

const MePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={9}>
          <ProfileFace meProfile={props.meProfile} />
          <YourDashboard />
          <AboutMe meProfile={props.meProfile} />
          <Activity />
          <ExperienceEducation />
          <Interests />
        </Col>
        <Col xs={12} md={3}>
          <EditProfile />
          <YourDreamJob />
        </Col>
      </Row>
    </Container>
  )
}

export default MePage
