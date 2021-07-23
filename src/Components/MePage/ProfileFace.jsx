import React, { useRef, useState, useEffect } from "react"
import "../../styles/ProfileFace.css"
import { Form } from "react-bootstrap"
import striveLogo from "./strive-logo.ico"
import { BiPencil } from "react-icons/bi"
import profileBg from "./profileBg.png"
import StickyProfile from "../StickyProfile"

// console.log(profileImg);
const ProfileFace = ({ meProfile, fetchProfile }) => {
  const [picture, setPicture] = useState(null)
  const [showPicForm, setShowPicForm] = useState(false)
  const [exaCoords, setExaCoords] = useState(false)
  let currentCoords = useRef()

  useEffect(() => {
    const selected = currentCoords.current.getBoundingClientRect()

    window.addEventListener("scroll", () => {
      if (window.scrollY >= selected.top) {
        setExaCoords(true)
      } else {
        setExaCoords(false)
      }
    })
  }, [])

  const handleSubmitPicture = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("profile", picture)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${meProfile._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
          },
        }
      )

      if (response.ok) {
        fetchProfile()
        setShowPicForm(!showPicForm)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="profile-main border mb-3 mt-4">
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(https://picsum.photos/1000/500)`,
          height: "12rem",
          objectFit: "cover",
        }}
      ></div>

      <div className="profile-info">
        <div className="rounded-img-section">
          <img
            onClick={() => setShowPicForm(!showPicForm)}
            src={meProfile && meProfile.image}
            className="profil-rounded-img"
            alt=""
          />
          <BiPencil
            className="profile-pencil"
            style={{
              fontSize: "25px",
              color: "text-muted",
              cursor: "pointer",
              position: "absolute",
              right: "36px",
              top: "240px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="d-flex justify-content-between ">
          <div className="personal-info  pb-3">
            {showPicForm && (
              <form onSubmit={handleSubmitPicture}>
                <Form.Group controlId="pictureForm">
                  <Form.Label>Upload Picture</Form.Label>
                  <Form.Control
                    onChange={(e) => setPicture(e.target.files[0])}
                    /* value={picture} */
                    type="file"
                  />
                </Form.Group>
                <button type="submit">Submit</button>
              </form>
            )}
            <h2>{meProfile && `${meProfile.name} ${meProfile.surname}`}</h2>
            <p>{meProfile && meProfile.title}</p>
            {meProfile && (
              <StickyProfile
                name={meProfile.name}
                surname={meProfile.surname}
                profesion={meProfile.title}
                profilImg={meProfile.image}
                coords={exaCoords}
              />
            )}

            <p className="text-muted personal-info-text ">
              Talk about #travel, #learninglive, #frontendengineer, and
              <br></br>
              #javascriptframeworkTalks
            </p>
            <div className="d-flex">
              <p className=" text-muted personal-info-text">
                {meProfile && meProfile.area}
              </p>
              <span className="ml-1">.</span>
              <p className="ml-2">
                <a className=" personal-text-color " href="/">
                  Contact Info
                </a>
              </p>
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
            <div className="d-flex personal-company-info ">
              <img
                className="small-img-personal-info"
                src={striveLogo}
                alt=""
              />

              <a
                // style={{ color: "#191919", fontSize: "14px" }}
                className="p-personal-info  font-weight-bold "
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
