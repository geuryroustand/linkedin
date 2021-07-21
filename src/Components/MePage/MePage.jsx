import { Container, Row, Col } from "react-bootstrap"
import ExperienceEducation from "./ExperienceEducation"
import YourDashboard from "./YourDashboard"
import AboutMe from "./AboutMe"
import Activity from "./Activity"
import Interests from "./Interests"
import EditProfile from "./EditProfile"
import YourDreamJob from "../YourDreamJob"
import ProfileFace from "./ProfileFace"
import PeopleViewedAndKnow from "./PeopleViewedAndKnow"
import SkillAndEndorsement from "../SkillsAndEndorsement"
import Accomplishments from "../Accomplishments"
import LinkedInFooter from "./LinkedInFooter"

const MePage = (props) => {
  return (
    <Container id="me-page">
      <Row>
        <Col xs={12} md={8}>
          <ProfileFace meProfile={props.meProfile} />
          <YourDashboard />
          <AboutMe meProfile={props.meProfile} />
          <Activity />
          <ExperienceEducation meProfile={props.meProfile} />
          <SkillAndEndorsement />
          <Accomplishments />
          <Interests />
        </Col>
        <Col xs={12} md={4}>
          <EditProfile />
          <YourDreamJob />
          <PeopleViewedAndKnow id="peopleviewed" people="People also viewed" />
          <PeopleViewedAndKnow id="peopleknow" people="People you may know" />
        </Col>
      </Row>
      <LinkedInFooter />
    </Container>
  )
}

export default MePage
