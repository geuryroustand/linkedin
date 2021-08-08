import { useRef } from "react";
import React, { useState } from "react";
import "../../styles/PostForm.css";
import { MdInsertPhoto } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { ImPlay } from "react-icons/im";
import { Button } from "react-bootstrap";
import { TiUser } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { FaPoll, FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { HiDocumentText } from "react-icons/hi";
import { Modal, NavDropdown } from "react-bootstrap";

import bearerKey from "../../bearerKey";

import { FaIndent } from "react-icons/fa";

const PostForm = (props) => {
  const [enteredPost, setEnteredPost] = useState({
    text: "",
  });

  const [postImage, setPostImage] = useState(null);

  const handlerPost = (event) => {
    setEnteredPost({ text: event.target.value });

    // console.log(event.target.value);
  };

  console.log(enteredPost.text.length > 0);
  const filesInput = useRef();
  // console.log(enteredPost);

  const submitPost = async (event) => {
    event.preventDefault();

    // const dataPost =
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: bearerKey,
          },

          body: JSON.stringify(enteredPost),
        }
      );

      if (response.ok) {
        setEnteredPost({ text: "" });

        const post = await response.json();

        const formData = new FormData();

        formData.append("post", postImage);

        try {
          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization: bearerKey,
              },
            }
          );

          if (response.ok) {
            props.fetchPosts();
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("there was an error ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="post-form border">
      <div className="post-center">
        <div className="d-flex">
          {props.meProfile && (
            <img
              className="post-profile-img mr-2"
              src={props.meProfile.image}
              alt=""
            />
          )}

          <input
            className="post-input mr-2"
            // value={enteredPost.text}
            placeholder=" Start a post"
            type="text"
            name=""
            id=""
            // onChange={handlerPost}
            onClick={handleShow}
          />

          <Modal show={show} className="modal-header " onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "22px", fontWeight: "normal" }}>
                Create a post
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex ">
                {props.meProfile && (
                  <img
                    className="post-profile-img mr-2"
                    src={props.meProfile.image}
                    alt=""
                  />
                )}
                {props.meProfile && (
                  <button className="mr-1 button-modal">
                    <TiUser />

                    {` ${props.meProfile.name} ${props.meProfile.surname} `}
                  </button>
                )}
                <button className="d-flex justify-content-between button-modal  ">
                  <BiWorld />
                  <NavDropdown title=" Anyone" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </button>
              </div>

              <form onSubmit={submitPost}>
                <input
                  type="text"
                  placeholder="What do you want to talk about?"
                  value={enteredPost.text}
                  onChange={handlerPost}
                  className="input-modal mb-5"
                />

                {/* post-icons */}

                <div className=" d-flex justify-content-between align-items-center ">
                  <div className="post-icons-modal post-icons mt-1">
                    <input
                      id="img"
                      ref={filesInput}
                      hidden
                      type="file"
                      onChange={(e) => setPostImage(e.target.files[0])}
                    />

                    <label for="img">
                      <MdInsertPhoto
                        style={{ fontSize: "1.4rem", color: "#666666" }}
                      />
                    </label>
                  </div>
                  {/* post-icons post-icons-modal */}
                  <div className="post-icons-modal post-icons ">
                    <span>
                      <ImPlay
                        style={{ fontSize: "1.4rem", color: " #666666" }}
                      />
                    </span>
                  </div>

                  <div className=" post-icons-modal post-icons ">
                    <span>
                      <HiDocumentText
                        style={{ fontSize: "1.4rem", color: " #666666" }}
                      />
                    </span>
                  </div>

                  <div className="post-icons-modal post-icons ">
                    <span>
                      <FaPoll
                        style={{ fontSize: "1.4rem", color: " #666666" }}
                      />
                    </span>
                  </div>
                  <div className="post-icons-modal post-icons">
                    <span>
                      <BsThreeDots
                        style={{ fontSize: "1.4rem", color: " #666666" }}
                      />
                    </span>
                  </div>

                  <div className="">
                    <span>
                      <FaRegCommentDots
                        style={{ fontSize: "1.4rem", color: " #666666" }}
                      />
                    </span>
                    <span>Anyone</span>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={
                        enteredPost.text.length > 0
                          ? "post-button-modal-active "
                          : "post-button-modal text-muted "
                      }
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer> */}
          </Modal>

          {/* <input
            className="text-muted"
            type="text"
            name=""
            id=""
            placeholder="Start a post"
            // value={enteredPost.text}
            onClick={handleShow}
          /> */}

          {/* <form onSubmit={submitPost} className="w-100">
            <div className="d-flex align-items-center">
              <input
                className="post-input mr-2"
                value={enteredPost.text}
                placeholder="What do you want to talk about"
                type="text"
                name=""
                id=""
                onChange={handlerPost}
              />
              <Button
                variant="outline-primary"
                onClick={() => {
                  filesInput.current.click();
                }}
              >
                Image
              </Button>
              <input
                ref={filesInput}
                hidden
                type="file"
                onChange={(e) => setPostImage(e.target.files[0])}
              />
            </div>
          </form> */}
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
    </div>
  );
};

export default PostForm;
