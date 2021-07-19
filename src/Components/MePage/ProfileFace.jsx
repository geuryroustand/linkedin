import React from "react"
import "../../styles/ProfileFace.css"
import profileImg from "./profileImg.jpg"
import striveLogo from "./strive-logo.ico"
import { BiPencil } from "react-icons/bi"
import profileBg from "./profileBg.png"

// console.log(profileImg);
const ProfileFace = () => {
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
          <img src={profileImg} className="profil-rounded-img" alt="" />
          <BiPencil
            className="profile-pencil"
            style={{
              marginLeft: "30rem",
              marginBottom: "50px",
              fontSize: "25px",
              color: "#818181",
              cursor: "pointer",
            }}
          />
        </div>

        <div className="d-flex">
          <div className="personal-info p-3">
            <h2>Geury Roustand</h2>
            <p>Junior Frontend Developer 🧑🏿‍💻 Traveler 🗺️ </p>
            <p>
              Talk about #travel, #learninglive, #frontendengineer, and
              #javascriptframeworkTalks
            </p>
            <div className="d-flex">
              <p>Göppingen, Baden-Württemberg, Germany.</p>
              <a href="/">Contact Info</a>
            </div>

            <div className="d-flex">
              <a href="/"> 286 followers </a>
              <p>.</p>
              <a href="/"> 284 connections </a>
            </div>
            <div className="buttons-personal-info">
              <button className="first-button">Open to</button>
              <button className="secondary-button">Add section</button>
              <button className="third-button">More</button>
            </div>
          </div>

          <div>
            <div>
              <div className="d-flex justify-content-between ">
                <img
                  className="small-img-personal-info"
                  src={striveLogo}
                  alt=""
                />
                <p className="p-personal-info">Strive School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFace
