import React from "react";
import "../../styles/ProfileFace.css";
import profileImg from "./profileImg.jpg";
import striveLogo from "./strive-logo.ico";
import { BiPencil } from "react-icons/bi";
import profileBg from "./profileBg.png";

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
              marginLeft: "37rem",
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
            <p className="text-muted personal-info-text ">
              Talk about #travel, #learninglive, #frontendengineer, and
              <br></br>
              #javascriptframeworkTalks
            </p>
            <div className="d-flex">
              <p className=" text-muted personal-info-text">
                Göppingen, Baden-Württemberg, Germany.
              </p>
              <a
                className="ml-2 personal-info-text personal-info-text-color"
                href="/"
              >
                Contact Info
              </a>
            </div>

            <div className="d-flex my-2">
              <a
                className="mr-1 personal-info-text personal-info-text-color "
                href="/"
              >
                286 followers
              </a>
              <p className="mr-1">.</p>
              <a className="personal-info-text personal-text-color " href="/">
                284 connections
              </a>
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
    </div>
  );
};

export default ProfileFace;
