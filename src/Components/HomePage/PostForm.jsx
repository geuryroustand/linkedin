import React, { useState } from "react";
import "./PostForm.css";
import profileImg from "./profileImg.jpg";
import { MdInsertPhoto } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { ImPlay } from "react-icons/im";
// import { TiUser } from "react-icons/ti";
// import { Modal } from "react-bootstrap";

import { FaIndent } from "react-icons/fa";

const PostForm = () => {
  const [enteredPost, setEnteredPost] = useState({
    text: "",
  });

  console.log(enteredPost);

  const handlerPost = (event) => {
    setEnteredPost({ text: event.target.value });
  };

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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
          },

          body: JSON.stringify(enteredPost),
        }
      );

      // const responsephoto = await fetch(
      //   `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${experienceId}/picture`,
      //   {
      //     method: "POST",
      //     body: formData,
      //     headers: {
      //       Authorization:
      //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
      //     },
      //   }
      // );

      if (response.ok) {
        console.log("post done");
        setEnteredPost({
          text: "",
        });
      } else {
        console.log("there was an error ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // function Example() {
  //   return (
  //     <>
  //       <form onSubmit={submitPost}>
  //         <Modal
  //           // style={{ width: "80px" }}
  //           show={show}
  //           onHide={handleClose}
  //           className="border "
  //         >
  //           <Modal.Header closeButton>
  //             <Modal.Title className="text-muted">Create a post</Modal.Title>
  //           </Modal.Header>
  //           <Modal.Body className="modal-box">
  //             <div className="d-flex">
  //               <img
  //                 style={{ height: "45px", width: "45px" }}
  //                 className="post-profile-img mr-2"
  //                 src={profileImg}
  //                 alt=""
  //               />
  //               <button className="post-user">
  //                 <p>
  //                   <TiUser />
  //                   Geury Roustand
  //                 </p>
  //               </button>
  //               <button className="post-user">
  //                 <p>
  //                   <BiWorld />
  //                   Anyone
  //                 </p>
  //               </button>
  //             </div>
  //             {/* {enteredPost && setShow(false)} */}
  //             <input
  //               className="post-input"
  //               // value={enteredPost.text}
  //               placeholder="What do you want to talk about"
  //               type="text"
  //               name=""
  //               id=""
  //               onChange={handlerPost}
  //             />
  //           </Modal.Body>
  //           <Modal.Footer>
  //             <button type="submit">Post</button>
  //           </Modal.Footer>
  //         </Modal>
  //       </form>
  //     </>
  //   );
  // }

  return (
    <div className="post-form border">
      <div className="post-center">
        <div className="d-flex">
          <img className="post-profile-img mr-2" src={profileImg} alt="" />

          {/* <input
            className="text-muted"
            type="text"
            name=""
            id=""
            placeholder="Start a post"
            // value={enteredPost.text}
            onClick={handleShow}
          /> */}

          <form onSubmit={submitPost} className="w-100">
            <input
              className="post-input"
              value={enteredPost.text}
              placeholder="What do you want to talk about"
              type="text"
              name=""
              id=""
              onChange={handlerPost}
            />{" "}
            <br />
            {/* <input type="file" onChange={handlerPost} name="" id="" /> */}
            {/* <button type="submit"></button> */}
          </form>
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
      {/* <Example /> */}
    </div>
  );
};

export default PostForm;
