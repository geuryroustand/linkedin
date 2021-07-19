import { Component } from "react"
import { ImPencil } from "react-icons/im"
import { FiPlus } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import "../../styles/ExperienceEducation.css"

class ExperienceEducation extends Component {
  render() {
    return (
      <div id="experience-education-div" className="border p-3 mb-3">
        <header>
          <h4 className="flex">Experience</h4>
          <a href="/">
            <FiPlus />
          </a>
        </header>
        <ul>
          <li>
            <div className="Ex-largest">
              <div className="allContainer">
                <div className="infoContainer">
                  <div className="image-div">
                    <img
                      className="Ex-image"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <a href="/" className="Ex-info ">
                      <h5>Strive School</h5>
                      <p>Full Stack web Developer</p>
                      <p>2021-2022</p>
                    </a>
                  </div>
                </div>
                <div className="icons">
                  <ImPencil className="Ex-pencil" />
                  <GiHamburgerMenu className="Ex-burger" />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <hr />

        <header>
          <h4 className="flex">Education</h4>
          <a href="/">
            <FiPlus />
          </a>
        </header>
        <ul>
          <li>
            <div className="Ed-largest">
              <div className="allContainer">
                <div className="infoContainer">
                  <div className="image-div">
                    <img
                      className="Ed-image"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                  </div>
                  <div className="d-flex underline">
                    <a href="/" className="Ed-info">
                      <h5>Strive School</h5>
                      <p>Full Stack web Developer</p>
                      <p>2021-2022</p>
                    </a>
                  </div>
                </div>
                <div className="icons">
                  <ImPencil className="Ed-pencil" />
                  <GiHamburgerMenu className="Ed-burger" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default ExperienceEducation
