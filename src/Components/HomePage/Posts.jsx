import React from "react"
import { BsThreeDots } from "react-icons/bs"
import { BiWorld } from "react-icons/bi"
import { AiOutlineLike } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { RiSendPlaneFill } from "react-icons/ri"
import { FaRegCommentDots, FaShare } from "react-icons/fa"
import { format, parseISO } from "date-fns"

import "../../styles/Posts.css"

const Posts = (props) => {
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
        <div className="d-flex w-100 align-items-center">
          <div className="mr-2">
            <img
              style={{ width: "4rem", height: "4rem" }}
              className="post-profile-img"
              src={props.post.user.image}
              alt=""
            />
          </div>
          <div className="post-personal-info w-100">
            <div className="d-flex justify-content-between w-100 py-n2">
              <a className="font-weight-bold dark-name-color mr-3" href="/">
                {`${props.post.user.name} ${props.post.user.surname}`}
                <span className="pl-2 text-muted">
                  {format(parseISO(props.post.createdAt), `do`)}
                </span>
              </a>
              <div>
                <BsThreeDots style={{ fontSize: "1.8rem" }} />
              </div>
            </div>

            <p className="text-muted">{props.post.user.title}</p>
            <span className="text-muted mr-2">
              {`${format(parseISO(props.post.createdAt), `h`)} h`}
            </span>
            <BiWorld />
          </div>

          <p className="hr"></p>
        </div>

        <p className="p-3">{props.post.text}</p>

        {props.post.image && (
          <img
            className="img-fluid"
            src={props.post.image}
            alt="Comments PIC"
          />
        )}
        <div>
          <AiOutlineLike className="mr-2" />
          <FcLike className="mr-2" />
          <a className="text-muted" href="/">
            180
          </a>
          <span className="text-muted">.</span>
          <a className="text-muted" href="/">
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
  )
}

export default Posts
