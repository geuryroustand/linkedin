import React, { useRef, useState, useEffect } from "react";
import "../../styles/ProfileFace.css";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import striveLogo from "./strive-logo.ico";
import { BiPencil } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { MdPhotoCamera, MdInsertPhoto } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { CgClose } from "react-icons/cg";
import StickyProfile from "../StickyProfile";
import { AiFillCloseCircle } from "react-icons/ai";
import LoadingSpinner from "../LoadingSpinner";
import bearerKey from "../../bearerKey";

// console.log(profileImg);
const ProfileFace = ({ meProfile, fetchProfile }) => {
  const [picture, setPicture] = useState(null);
  const [showPicForm, setShowPicForm] = useState(false);
  const [exaCoords, setExaCoords] = useState(false);
  const [postPictureLoading, setPostPictureLoading] = useState(false);
  const [postPictureFail, setPostPictureFail] = useState(false);
  const [show, setShow] = useState(false);
  const [ediProfil, setEditProfil] = useState(meProfile);
  let currentCoords = useRef();
  const filesInput = useRef();
  const formRef = useRef(null);

  const [profil, setProfil] = useState();

  useEffect(() => {
    const selected = currentCoords.current.getBoundingClientRect();

    window.addEventListener("scroll", () => {
      if (window.scrollY >= selected.top) {
        setExaCoords(true);
      } else {
        setExaCoords(false);
      }
    });

    // setProfil({
    //   area: meProfile.area,
    //   name: meProfile.name,
    //   surname: meProfile.surname,
    //   title: meProfile.title,
    // });
  }, []);

  const handlerPicOnchange = (e) => {
    setPicture(e.target.files[0]);
    // filesInput.submit();
  };

  const handleSubmitPicture = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profile", picture);

    setPostPictureLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${meProfile._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: bearerKey,
          },
        }
      );

      if (response.ok) {
        fetchProfile();
        setShowPicForm(!showPicForm);
        setPostPictureLoading(false);
      } else {
        setPostPictureLoading(false);
        setPostPictureFail(true);
        setTimeout(() => {
          setPostPictureFail(false);
        }, 5000);
      }
    } catch (error) {
      setPostPictureLoading(false);
      setPostPictureFail(true);
      setTimeout(() => {
        setPostPictureFail(false);
      }, 5000);
      console.log(error);
    }
  };

  const [afterEdit, setAfterEdit] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, [afterEdit]);

  const fetchProfielEdit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "PUT",
          body: JSON.stringify(profil),
          headers: {
            Authorization: bearerKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("profile edit");
        handleCloseProfil();
        setAfterEdit(!afterEdit);
      } else {
        console.log("something was wrong");
      }

      console.log(response);
    } catch (error) {}
  };

  const handlerEditProfile = async (e) => {
    fetchProfielEdit();
    e.preventDefault();
  };

  const handlerProfilChange = (key, value) => {
    setProfil({
      ...profil,
      [key]: value,
    });
  };

  const [showProfil, setShowProfil] = useState(false);

  const handleCloseProfil = () => setShowProfil(false);
  const handleShowProfil = () => setShowProfil(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="profile-main border mb-3 mt-4">
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-profile"
        animation={false}
      >
        <div className="d-flex modal-profile-top-text align-items-center justify-content-between">
          <p>Profile photo</p>
          <CgClose
            style={{ cursor: "pointer", fontSize: "25px" }}
            onClick={handleClose}
          />
        </div>

        <img
          src={meProfile && meProfile.image}
          className="profil-rounded-img-modal"
          alt=""
        />

        <button className="profil-modal-buton-all-member">
          <BsFillEyeFill className="mr-1" style={{ fontSize: "20px" }} />
          All LinkedIn members
        </button>

        <hr className=" line-color " />
        <div>
          <form
            className=" profil-model-icons d-flex  "
            onSubmit={handleSubmitPicture}
            ref={formRef}
          >
            <div>
              <ImPencil className="ml-1" style={{ fontSize: "25px" }} />
              <p>Edit</p>
            </div>

            <div className="ml-5">
              {/* <input type="file" name="" id="" /> */}

              <label style={{ cursor: "pointer" }}>
                <MdPhotoCamera className="ml-4" style={{ fontSize: "25px" }} />
                <input
                  type="file"
                  name=""
                  id=""
                  style={{ display: "none" }}
                  // value={picture}
                  onChange={handlerPicOnchange}
                  // onSubmit={() => formRef.current.submit()}
                />
                <p>Add photo</p>
                <button
                  // onClick={(e) => formRef.current && formRef.current.click()}
                  // className="mt-2 mr-3"
                  type="submit"
                ></button>
              </label>

              {/* <label for="file-upload">Add photo</label> */}
              {/* <input for="file-upload" type="file" name="file-upload" /> */}

              {/*             
            <Form.Control
              ref={filesInput}
              onClick={() => {
                filesInput.current.click();
              }}
              hidden
              onChange={(e) => setPicture(e.target.files[0])}
               value={picture} 
              type="file"
            /> */}

              {/* <label id="profil-input-file"></label> */}

              {/* <input type="file" style={{ cursor: "pointer" }}>
              Add photo{" "}
            </input> */}
            </div>

            <div className="ml-5">
              <MdInsertPhoto className="ml-2" style={{ fontSize: "25px" }} />
              <p>Frames</p>
            </div>

            <div className=" delete-icon ">
              <RiDeleteBin6Line className="ml-2" style={{ fontSize: "25px" }} />
              <p>Delete</p>
            </div>
          </form>
        </div>
      </Modal>

      {/* Modal Profil */}

      <Modal
        size="lg"
        show={showProfil}
        onHide={handleCloseProfil}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlerEditProfile}>
            <Row>
              <Col>
                <Form.Label className="text-muted">First Name *</Form.Label>
                <Form.Control
                  defaultValue={meProfile && meProfile.name}
                  placeholder="First name"
                  onChange={(e) => handlerProfilChange("name", e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label className="text-muted">Last Name *</Form.Label>
                <Form.Control
                  placeholder="Last name"
                  defaultValue={meProfile && meProfile.surname}
                  onChange={(e) =>
                    handlerProfilChange("surname", e.target.value)
                  }
                />
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-muted">Headline *</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                // defaultValue={meProfile && meProfile.title}
                defaultValue={meProfile && meProfile.title}
                onChange={(e) => handlerProfilChange("title", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-muted">Country/Region</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Country/Region"
                defaultValue={meProfile && meProfile.area}
                onChange={(e) => handlerProfilChange("area", e.target.value)}
              />
            </Form.Group>

            <Modal.Footer className="mt-5">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
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
            // onClick={() => setShowPicForm(!showPicForm)}
            onClick={handleShow}
            src={meProfile && meProfile.image}
            className="profil-rounded-img"
            alt=""
          />
          <BiPencil
            onClick={handleShowProfil}
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
            {/* {showPicForm && (
              <form onSubmit={handleSubmitPicture}>
                <Form.Group controlId="pictureForm">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      filesInput.current.click();
                    }}
                  >
                    Change Profile Picture
                  </Button>

                  <Form.Control
                    ref={filesInput}
                    hidden
                    onChange={(e) => setPicture(e.target.files[0])}
                    value={picture}
                    type="file"
                  />
                  <div className="d-flex align-items-center">
                    <button className="mt-2 mr-3" type="submit">
                      Upload
                    </button>
                    {postPictureLoading && <LoadingSpinner />}
                    {postPictureFail && (
                      <span style={{ color: "red" }}>
                        <AiFillCloseCircle />
                      </span>
                    )}
                  </div>
                </Form.Group>
              </form>
            )} */}

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
  );
};

export default ProfileFace;
