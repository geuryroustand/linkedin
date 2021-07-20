import React, { useRef, useState, useEffect } from "react"
import "../../styles/ProfileFace.css"
import profileImg from "./profileImg.jpg"
import striveLogo from "./strive-logo.ico"
import { BiPencil } from "react-icons/bi"
import profileBg from "./profileBg.png"
import StickyProfile from "../StickyProfile"

// console.log(profileImg);
const ProfileFace = ({ meProfile }) => {
  let currentCoords = useRef()
  const [coords, setCoords] = useState()
  const [exaCoords, setExaCoords] = useState(false)

  useEffect(() => {
    setCoords(currentCoords.current.getBoundingClientRect())
  }, [])

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > coords.top) {
  //     setExaCoords(true);
  //   }
  // });

  console.log(coords)
  // console.log(coords);
  // currentCoords
  // const inicialCoords = buttonSection.current.getBoundingClientRect();
  // const inicialCoords = buttonSection.getBoundingClientRect();
  // console.log(inicialCoords);
  return (
    <div className="profile-main border mb-3">
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${profileBg})`,
          height: "10rem",
          objectFit: "cover",
        }}
      ></div>

      <div className="profile-info">
        <div className="rounded-img-section">
          <img
            src={meProfile && meProfile.image}
            className="profil-rounded-img"
            alt=""
          />
          <BiPencil
            className="profile-pencil"
            style={{
              fontSize: "25px",
              color: "#818181",
              cursor: "pointer",
              position: "absolute",
              right: "35px",
              top: "181px",
            }}
          />
        </div>

        <div className="d-flex justify-content-between ">
          <div className="personal-info p-3">
            <h2>{meProfile && `${meProfile.name} ${meProfile.surname}`}</h2>
            <p>{meProfile && meProfile.title}</p>
            <StickyProfile
              name="Geury Roustand"
              profesion="Junior Frontend Developer 🧑🏿‍💻 Traveler 🗺️ "
              profilImg={profileImg}
              coords={exaCoords}
            />
            <p className="text-muted personal-info-text ">
              Talk about #travel, #learninglive, #frontendengineer, and
              <br></br>
              #javascriptframeworkTalks
            </p>
            <div className="d-flex">
              <p className=" text-muted personal-info-text">
                {meProfile && meProfile.area}
              </p>
              <a className="ml-2 personal-info-text " href="/">
                Contact Info
              </a>
            </div>

            <div className="d-flex my-2">
              <a
                className="mr-1 personal-info-text personal-text-color  "
                href="/"
              >
                286 followers
              </a>
              <p className="mr-1">.</p>
              <a className="personal-info-text personal-text-color " href="/">
                284 connections
              </a>
            </div>

            <div ref={currentCoords} className="buttons-personal-info">
              <button className="first-button">Open to</button>
              <button className="secondary-button">Add section</button>
              <button className="third-button">More</button>
            </div>
          </div>

          <div>
            <div className="d-flex  ">
              <img
                className="small-img-personal-info"
                src={striveLogo}
                alt=""
              />

              <a
                style={{ color: "rgba(0, 0, 0, 0.9)", fontSize: "14px" }}
                className="p-personal-info personal-info-text font-weight-bold "
                href="/#"
              >
                Strive School
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFace
