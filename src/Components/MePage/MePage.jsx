import { Container, Row, Col } from "react-bootstrap";
import ProfileFace from "./ProfileFace";
// import ProfileFace from "./Components/MePage/ProfileFace";

const MePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ProfileFace />
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
};

export default MePage;
