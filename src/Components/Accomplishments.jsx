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

          <ul>
          <li>
            <div className="acc-largest">
              <div className="accContainer">
                <div className="accInfoContainer">
                  <h4 className="acc-num">
                    1
                  </h4>
                  <div className="d-flex underline">
                    <div href="/" className="acc-info">
                      <p className='acc-blue'>Honor & Award</p>
                      <p >Certificate of completion</p>
                    </div>
                  </div>
                </div>
                <div className="acc-icons">
                <button className='acc-button'><BsChevronCompactDown/></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        </div>
      )
    }
  }
  export default Accomplishments


 