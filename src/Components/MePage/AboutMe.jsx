import "../../styles/AboutMe.css"
import { BiPencil } from "react-icons/bi"

const AboutMe = () => {
  return (
    <div id="about-me-div" className="p-4 border mb-3">
      <div className="about-me-title d-flex justify-content-between">
        <h4>About</h4>
        <div className="text-muted icon d-flex align-items-center justify-content-center">
          <BiPencil />
        </div>
      </div>
      <p className="mt-3">
        Bachelor Degree in Psychology and a great experience in tourism - I
        found these experiences not stimulating my mind. Being a strategy games
        and logic lover, I started seeking for something that could fulfil my
        expectations. I found in programming the best opportunity to do that.
        Getting accepted to Strive School wasn't a piece of cake, but I'm having
        great results, having a tendency to be very organised and creating great
        relationships with all my fellows. Result-Driven, Optimiser - I try to
        leave a well-paved road for those who come after me. My goal, every
        single day, is to be a little be better that I was the day before. Tech
        Stack | HTML, CSS, Javascript
      </p>
    </div>
  )
}

export default AboutMe
