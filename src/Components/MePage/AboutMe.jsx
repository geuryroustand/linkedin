import "../../styles/AboutMe.css"
import { BiPencil } from "react-icons/bi"

const AboutMe = ({ meProfile }) => {
  return (
    <div id="about-me-div" className="p-4 border mb-3">
      <div className="about-me-title d-flex justify-content-between">
        <h4>About</h4>
        <div className="icon text-muted d-flex align-items-center justify-content-center">
          <BiPencil />
        </div>
      </div>
      <p className="mt-3">{meProfile && meProfile.bio}</p>
    </div>
  )
}

export default AboutMe
