import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { FaTrashAlt } from "react-icons/fa"

const PostExperienceForm = (props) => {
  const [job, setJob] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  /* use effect as component did mount */
  useEffect(() => {
    if (props.experienceId) {
      fetchExperience()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* function to keep the change of the inputs on the state */
  const handleInputChange = (key, value) => {
    setJob({ ...job, [key]: value })
  }

  /* function to handle the post */
  const handlePostAndEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        props.experienceId
          ? `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${props.experienceId}`
          : `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences`,
        {
          method: job ? "PUT" : "POST",
          body: JSON.stringify(job),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",

            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        setJob({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        })
        props.experienceId
          ? props.setEditFormShow(!props.editFormShow)
          : props.setAddFormShow(!props.addFormShow)
        console.log("post done successfully")
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log("there was an error")
    }
  }

  /* Function to get experience */
  const fetchExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${props.experienceId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
          },
        }
      )

      if (response.ok) {
        const experience = await response.json()
        console.log(experience)
        setJob(experience)
      } else {
        console.log("There was a n error")
      }
    } catch (error) {
      console.log("There was a n error")
    }
  }

  return (
    <Form onSubmit={(e) => handlePostAndEdit(e)}>
      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("role", e.target.value)}
          value={job.role}
          type="text"
          placeholder="Write the Role"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("company", e.target.value)}
          value={job.company}
          type="text"
          placeholder="Write the company"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          value={job.startDate}
          type="date"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          value={job.endDate}
          type="date"
        />
      </Form.Group>

      <Form.Group controlId="jobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("description", e.target.value)}
          value={job.description}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="area">
        <Form.Label>Area</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange("area", e.target.value)}
          value={job.area}
          type="text"
          placeholder="Write the area."
        />
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button
          variant={props.experienceId ? "success" : "primary"}
          type="submit"
        >
          {props.experienceId ? "Edit" : "Submit"}
        </Button>
        {props.experienceId && (
          <Button variant="danger" type="button">
            <FaTrashAlt />
          </Button>
        )}
      </div>
    </Form>
  )
}

export default PostExperienceForm
