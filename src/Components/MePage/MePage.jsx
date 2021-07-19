import { Container, Row, Col } from "react-bootstrap"
import ExperienceEducation from "./ExperienceEducation"
import YourDashboard from "./YourDashboard"
import AboutMe from "./AboutMe"
import Activity from "./Activity"
import Interests from "./Interests"
import EditProfile from "./EditProfile"
import YourDreamJob from "../YourDreamJob"
import ProfileFace from "./ProfileFace";


const MePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ProfileFace />
          <YourDashboard />
          <AboutMe />
          <Activity />
          <ExperienceEducation/>
          <Interests />
        </Col>
        <Col xs={12} md={4}>
          <EditProfile />
          <YourDreamJob />
        </Col>
      </Row>
    </Container>
  );
};

export default MePage;
