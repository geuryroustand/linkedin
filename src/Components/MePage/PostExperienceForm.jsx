import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react"

const PostExperienceForm = (props) => {
  const [job, setJob] = useState({
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  return (
    <Form>
      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          value={job.company}
          type="text"
          placeholder="Write the company"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control value={job.startDate} type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control value={job.endDate} type="date" />
      </Form.Group>

      <Form.Group controlId="jobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control value={job.description} as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="area">
        <Form.Label>Area</Form.Label>
        <Form.Control
          value={job.area}
          type="text"
          placeholder="Write the area."
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default PostExperienceForm
