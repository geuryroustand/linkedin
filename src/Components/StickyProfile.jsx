import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";

import "../styles/StickyProfile.css";
const stickyProfile = document.querySelector(".sticky-profile");

const StickyProfile = (props) => {
  const [coords, setCoords] = useState(0);

  // console.log(props.coords);
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > props.coords.top) {
  //     console.log("yes");
  //   }
  // });

  // console.log(props.coords);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > props.coords.top) {
    //     console.log("yes");
    //   }
    // });
    // const obsCallback = (entries) => {
    //   entries.forEach((entry) => {
    //     console.log(entry);
    //   });
    // };
    // const obsOptions = {
    //   root: null,
    //   threshold: 1,
    // };
    // const observer = new IntersectionObserver();
    // observer.observe(props.coords);
  }, []);

  return (
    <div className={props.coords ? "sticky-profile  border " : "d-none"}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <div className="d-flex">
            <img className="sticky-profile-img" src={props.profilImg} alt="" />
            <div className="d-flex flex-column ml-2">
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "600",
                }}
              >
                {props.name} {props.surname}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "400",
                }}
              >
                {props.profesion}{" "}
              </p>
            </div>
          </div>
          <div className="buttons-personal-info">
            <button className="first-button">Open to</button>
            <button className="secondary-button">Add section</button>
            <button className="third-button">More</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default StickyProfile;
