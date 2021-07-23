import { ImPencil } from "react-icons/im"
import { FiPlus } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import "../../styles/ExperienceEducation.css"
import PostExperienceForm from "./PostExperienceForm"
import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import bearerKey from "../../bearerKey"

const ExperienceEducation = ({ meProfile }) => {
  const [addFormShow, setAddFormShow] = useState(false)
  const [editFormShow, setEditFormShow] = useState(false)
  const [experiences, setExperiences] = useState([])

  /* function to fetch get experiences */
  const fetchExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${meProfile._id}/experiences`,
        {
          headers: {
            Authorization: bearerKey,
          },
        }
      )
      if (response.ok) {
        const myExperiences = await response.json()
        setExperiences(myExperiences)
        console.log(myExperiences)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log("there was an error")
    }
  }

  /* use effect as component did mount */
  useEffect(() => {
    fetchExperiences()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meProfile])

  /* use effect as component did update */
  useEffect(() => {
    fetchExperiences()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addFormShow, editFormShow])

  return (
    <div id="experience-education-div" className="border p-4 mb-3">
      <header>
        <h4 className="flex">Experience</h4>
        <div
          onClick={() => setAddFormShow(!addFormShow)}
          className="change-icons text-muted d-flex justify-content-center align-items-center"
        >
          <FiPlus />
        </div>
      </header>
      <ul>
        {experiences.map((experience) => (
          <li key={experience._id}>
            <div className="Ex-largest">
              <div className="allContainer">
                <div className="infoContainer">
                  <div className="image-div">
                    <img
                      style={{ width: "65px", height: "65px" }}
                      className="Ex-image"
                      src={
                        experience.image
                          ? experience.image
                          : "http://placehold.it/65"
                      }
                      alt={experience.company + " logo"}
                    />
                  </div>
                  <div className="d-flex">
                    <a href="/" className="Ex-info ">
                      <h5>{experience.company}</h5>
                      <h6>{experience.role}</h6>
                      <p>{experience.description}</p>
                      <p>{`${format(
                        parseISO(experience.startDate),
                        `MMM-yyyy`
                      )} - ${format(
                        parseISO(experience.endDate),
                        `MMM-yyyy`
                      )}`}</p>
                    </a>
                  </div>
                </div>
                <div className="icons text-muted">
                  <div
                    onClick={() => setEditFormShow(experience._id)}
                    className="change-icons text-muted d-flex justify-content-center align-items-center"
                  >
                    <ImPencil className="Ex-pencil" />
                  </div>
                  <GiHamburgerMenu className="Ex-burger" />
                </div>
              </div>
            </div>
            {editFormShow === experience._id && (
              <PostExperienceForm
                experienceId={experience._id}
                meProfile={meProfile}
                setEditFormShow={setEditFormShow}
                editFormShow={editFormShow}
              />
            )}
          </li>
        ))}
      </ul>
      {addFormShow && (
        <PostExperienceForm
          addFormShow={addFormShow}
          setAddFormShow={setAddFormShow}
          meProfile={meProfile}
        />
      )}
      <hr />

      <header>
        <h4 className="flex">Education</h4>
        <div className="change-icons text-muted d-flex justify-content-center align-items-center">
          <FiPlus />
        </div>
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
              <div className="icons text-muted">
                <div className="change-icons text-muted d-flex justify-content-center align-items-center">
                  <ImPencil className="Ed-pencil" />
                </div>
                <GiHamburgerMenu className="Ed-burger" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ExperienceEducation
