import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegCommentDots, FaShare } from "react-icons/fa";

import { NavDropdown } from "react-bootstrap";

import profileImg from "./profileImg.jpg";
import "./Posts.css";

const Posts = () => {
  return (
    <>
      <div className="d-flex my-2">
        {/* <p className="border"></p> */}
        <hr className="text-muted" style={{ width: "80%" }} />
        <label htmlFor="select" className=" text-muted">
          Sort by:{" "}
        </label>
        <div>
          <select className="select" name="select" id="">
            <option value="recent">Recent</option>
          </select>
        </div>
      </div>

      <div className="post-main border justify-content-between">
        <div className="d-flex">
          <img className="post-profile-img" src={profileImg} alt="" />
          <div className="post-personal-info">
            <a className="font-weight-bold dark-name-color" href="#">
              Geury Roustand
            </a>
            <span className="text-muted">. 1st</span>
            <p className="text-muted">Student at Strive School</p>
            <span className="text-muted">17h .</span>
            <BiWorld />
          </div>
          <div>
            <BsThreeDots style={{ fontSize: "1.8rem" }} />
          </div>
          <p className="hr"></p>
        </div>

        <p>
          On Honeypot, companies apply to you with salaries between €65k–€120k
          for Fullstack developers and tech stack upfront. This means you can
          easily compare offers side by side and choose the one that’s best for
          you. Forget headhunters and their clumsy back and forth, signup to
          Honeypot and find a job you love.
        </p>

        <div>
          <AiOutlineLike className="mr-2" />
          <FcLike className="mr-2" />
          <a className="text-muted" href="#">
            180
          </a>
          <span className="text-muted">.</span>
          <a className="text-muted" href="#">
            12 comments
          </a>
          <hr />
        </div>
        <div className="post-button d-flex">
          <div className="buttons-comments">
            <button className="mr-2">
              <AiOutlineLike className="mr-2 post-button-icons" />
              Like
            </button>
          </div>
          <div className="buttons-comments">
            <button className="mr-2">
              <FaRegCommentDots className="mr-2 post-button-icons" />
              Comment
            </button>
          </div>

          <div className="buttons-comments">
            <button className="mr-2">
              <FaShare className="mr-2 post-button-icons" />
              Share
            </button>
          </div>

          <div className="buttons-comments">
            <button className="mr-2">
              <RiSendPlaneFill className="mr-2 post-button-icons" />
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
