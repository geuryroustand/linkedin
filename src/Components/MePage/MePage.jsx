import { Container, Row, Col } from "react-bootstrap"
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
