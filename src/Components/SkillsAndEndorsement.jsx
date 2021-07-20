import { Component } from "react"
import { ImPencil } from "react-icons/im"
import '../styles/SkillsAndEndorsement.css'
import {VscChevronDown} from 'react-icons/vsc'


class SkillAndEndorsement extends Component {
  render() {
    return (
      <div id="experience-education-div" className="border p-3 mb-3">
        <header>
          <h4 className="flex">Skills & endorsements</h4>
          <a href="/">Add a new skill</a>
          <a className='ml-4' href="/">
        <ImPencil />
          </a>
        </header>
        <button className='skill-quiz'>Take skill quiz</button>
        <ul>
          <li className='skill-list'>
              <div><p >Problem Solving</p></div>
          </li>
        </ul>
        <div className='show-more-div'><button className='showMore'>Show more<VscChevronDown/></button></div>
      </div>
    )
  }
}
export default SkillAndEndorsement




  

