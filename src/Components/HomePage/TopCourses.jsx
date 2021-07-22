import { Component } from "react"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { HiInformationCircle } from "react-icons/hi"
import { BiRightArrowAlt } from "react-icons/bi"
import "../../styles/TopCourses.css"
class TopCourses extends Component {
  render() {
    return (
      <div className="top-course">
        <div className="p-3">
          <div className="top-course-info mb-2">
            <p className="top-course-title pl-3">Today’s top courses</p>
            <span className="top-course-infoIcon">
              <HiInformationCircle />
            </span>
          </div>
          <div className="top-course-list">
            <div className="top-course-author-link mb-2">
              <p className="top-course-authorInfo pl-3">
                <p className="top-course-author ">1. Digital Transformation</p>
                <p className="top-course-author-name ">Peter High</p>
              </p>

              <p className="top-course-arrow">
                <BsBoxArrowUpRight />
              </p>
            </div>
            <div className="top-course-author-link mb-2">
              <p className="top-course-authorInfo pl-3">
                <p className="top-course-author">2. Strive School</p>
                <p className="top-course-author-name">Tomas Berhane</p>
              </p>

              <p className="top-course-arrow">
                <BsBoxArrowUpRight />
              </p>
            </div>
            <div className="top-course-author-link mb-2">
              <p className="top-course-authorInfo pl-3">
                <p className="top-course-author">2. Strive School</p>
                <p className="top-course-author-name">Stacey Gordon</p>
              </p>

              <p className="top-course-arrow">
                <BsBoxArrowUpRight />
              </p>
            </div>
          </div>
          <div></div>
          <p className="top-course-showMore pl-3">
            Show more on Linkedin Learning <BiRightArrowAlt />{" "}
          </p>
        </div>
      </div>
    )
  }
}
export default TopCourses
