import { Component } from "react"
import { ImPencil } from "react-icons/im"
import { FiPlus } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import '../../styles/SkillsAndEndorsement.css'


class SkillAndEndorsement extends Component {
  render() {
    return (
      <div id="experience-education-div" className="border p-3 mb-3">
        <header>
          <h4 className="flex">Skills & endorsements</h4>
          Add a new skill
          <a className='ml-4' href="/">
        <ImPencil />
          </a>
        </header>
        <button>Take skill quiz</button>
        <ul>
          <li>
              <div><p>Problem Solving</p></div>
          </li>
        </ul>
      </div>
    )
  }
}
export default SkillAndEndorsement



import {Component} from 'react'
import '../styles/Accomplishments.css'
import { FiPlus } from "react-icons/fi"
import {BsChevronCompactDown} from 'react-icons/bs'
class Accomplishments extends Component {
    render() {
      return (
        <div id="experience-education-div" className="border p-3 mb-3">
          <header>
            <h4 className="flex">Accomplishments</h4>
            <a className='ml-4' href="/">
          <FiPlus />
            </a>
          </header>
          <button>Take skill quiz</button>
          <ul>
            <li>
                <div>
                    <h4>1</h4>
                    <div>
                        <h4>Honor & Award</h4>
                        <button><BsChevronCompactDown/></button>
                        <div></div>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      )
    }
  }
  export default Accomplishments
  
  

