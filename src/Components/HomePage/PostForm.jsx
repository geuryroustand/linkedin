import React, { useState } from "react";
import "./PostForm.css";
import profileImg from "./profileImg.jpg";
import { MdInsertPhoto } from "react-icons/md";
import { BiCalendar, BiWorld } from "react-icons/bi";
import { ImPlay } from "react-icons/im";
import { TiUser } from "react-icons/ti";
import { Modal, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import { FaIndent } from "react-icons/fa";
const PostForm = () => {
  const [enteredPost, setEnteredPost] = useState("");

  const handlerPost = (event) => {
    setEnteredPost(event.target.value);
  };

  const submitPost = async (event) => {
    event.preventDefault();

    // const dataPost =
    const post = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MmMxMDBlZmU3ODAwMTU1YzM0OWIiLCJpYXQiOjE2MjY5MzU5OTgsImV4cCI6MTYyODE0NTU5OH0.ayURV_hOBVQ3kWS5Cagdlkftwl9Cxoq3RA-VXZ1-gzA",
        },

        body: JSON.stringify(enteredPost),
      }
    );
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Example() {
    return (
      <>
        <form onSubmit={submitPost}>
          <Modal
            // style={{ width: "80px" }}
            show={show}
            onHide={handleClose}
            className="border "
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-muted">Create a post</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-box">
              <div className="d-flex">
                <img
                  style={{ height: "45px", width: "45px" }}
                  className="post-profile-img mr-2"
                  src={profileImg}
                  alt=""
                />
                <button className="post-user">
                  <p>
                    <TiUser />
                    Geury Roustand
                  </p>
                </button>
                <button className="post-user">
                  <p>
                    <BiWorld />
                    Anyone
                  </p>
                </button>
              </div>

              <input
                className="post-input"
                value={enteredPost}
                placeholder="What do you want to talk about"
                type="text"
                name=""
                id=""
                onChange={handlerPost}
              />
            </Modal.Body>
            <Modal.Footer>
              <button type="submit">Post</button>
            </Modal.Footer>
          </Modal>
        </form>
      </>
    );
  }

  return (
    <div className="post-form border">
      <div className="post-center">
        <div className="d-flex">
          <img className="post-profile-img mr-2" src={profileImg} alt="" />

          <input
            className="text-muted"
            type="text"
            name=""
            id=""
            placeholder="Start a post"
            onClick={handleShow}
          />
        </div>
        <div className="d-flex justify-content-between my-2">
          <div className="post-icons">
            <MdInsertPhoto style={{ fontSize: "1.4rem", color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="post-icons ">
            <span>
              <ImPlay style={{ fontSize: "1.4rem", color: "#7fc15e" }} />
            </span>
            <span>Video</span>
          </div>

          <div className="post-icons">
            <BiCalendar style={{ fontSize: "1.4rem", color: "#e7a33e" }} />
            <span>Event</span>
          </div>

          <div className="post-icons">
            <FaIndent style={{ fontSize: "1.4rem", color: "#fc9295" }} />
            <span>Write article</span>
          </div>
        </div>
      </div>
      <Example />
    </div>
  );
};

export default PostForm;
