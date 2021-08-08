import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import LoadingSpinner from "../LoadingSpinner";
import bearerKey from "../../bearerKey";
import "../../styles/PostExperienceForm.css";

const PostExperienceForm = (props) => {
  const [job, setJob] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    /*isloading:false*/
  });

  const [postPictureLoading, setPostPictureLoading] = useState(false);
  const [postPictureFail, setPostPictureFail] = useState(false);
  const [postPictureSuccess, setPostPictureSuccess] = useState(false);

  const [experiencePic, setExperiencePic] = useState(null);

  /* use effect as component did mount */
  useEffect(() => {
    if (props.experienceId) {
      fetchExperience();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* function to keep the change of the inputs on the state */
  const handleInputChange = (key, value) => {
    setJob({ ...job, [key]: value });
  };

  /* Function to get experience */
  const fetchExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${props.experienceId}`,
        {
          headers: {
            Authorization: bearerKey,
          },
        }
      );

      if (response.ok) {
        const experience = await response.json();
        console.log(experience);
        setJob(experience);
      } else {
        console.log("There was a n error");
      }
    } catch (error) {
      console.log("There was a n error");
    }
  };

  /* function to handle the post */
  const handlePostAndEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        props.experienceId
          ? `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${props.experienceId}`
          : `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences`,
        {
          method: props.experienceId ? "PUT" : "POST",
          body: JSON.stringify(job),
          headers: {
            Authorization: bearerKey,

            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setJob({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        props.experienceId
          ? props.setEditFormShow(!props.editFormShow)
          : props.setAddFormShow(!props.addFormShow);
        console.log("post done successfully");
      } else {
        console.log("there was an error");
      }
    } catch (error) {
      console.log("there was an error");
    }
  };

  /* Function to delete experience*/
  const deleteExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${props.experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: bearerKey,
          },
        }
      );
      if (response.ok) {
        props.setEditFormShow(!props.editFormShow);
        console.log("experience deleted with success");
      } else {
        console.log("there was an error");
      }
    } catch (error) {
      console.log("there was an error", error);
    }
  };

  /* Function to upload company logo */
  const postCompanyLogo = async (experienceId) => {
    const formData = new FormData();
    formData.append("experience", experiencePic);
    setPostPictureLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.meProfile._id}/experiences/${experienceId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: bearerKey,
          },
        }
      );

      if (response.ok) {
        setPostPictureLoading(false);
        setPostPictureSuccess(true);
        setTimeout(() => {
          setPostPictureSuccess(false);
        }, 5000);
      } else {
        setPostPictureLoading(false);
        setPostPictureFail(true);
        setTimeout(() => {
          setPostPictureFail(false);
        }, 5000);
      }
    } catch (error) {
      setPostPictureLoading(false);
      setPostPictureFail(true);
      setTimeout(() => {
        setPostPictureFail(false);
      }, 5000);
      console.log(error);
    }
  };
  const [show, setShow] = useState(props.addFormShow || props.clickFormShow);

  const [showEditForm, setShowEditForm] = useState(props.clickFormShow);

  console.log(props.clickFormShow);
  console.log(props.addFormShow);

  const handleClose = () => setShow(false);
  const handleCloseShowEditForm = () => setShowEditForm(false);

  return (
    <>
      <Modal
        size="lg"
        show={show}
        // show={showEditForm && showEditForm}
        onHide={handleClose && handleClose}
        // onHide={handleCloseShowEditForm && handleCloseShowEditForm}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px", fontWeight: "400" }}>
            {props.addFormShow ? "Add experience" : "Edit experience"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handlePostAndEdit(e)}>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("company", e.target.value)}
                value={job.company}
                type="text"
                placeholder="Write the company"
              />
            </Form.Group>

            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("role", e.target.value)}
                value={job.role}
                type="text"
                placeholder="Write the Role"
              />
            </Form.Group>

            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("startDate", e.target.value)}
                value={job.startDate.dateTime}
                type="date"
              />
            </Form.Group>

            <Form.Group controlId="endDate">
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
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                value={job.description}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                onChange={(e) => handleInputChange("area", e.target.value)}
                value={job.area}
                type="text"
                placeholder="Write the area."
              />
            </Form.Group>
            {props.experienceId && (
              <Form.Group controlId="profilePicForm">
                {/* <Form.Label>Company Logo</Form.Label> */}
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setExperiencePic(e.target.files[0]);
                    }}
                  />
                  <p className="upload-company-button-logo">Upload</p>

                  <div className="edit-text-modal">
                    <p>
                      We no longer share changes to past positions with your
                      network .
                      <a href="#">Learn how these are shared and when</a>
                    </p>
                  </div>
                  {/* <button
                    className="mr-3 mt-2"
                    onClick={() => postCompanyLogo(props.experienceId)}
                    type="button"
                  ></button> */}
                </label>

                <div className="d-flex align-items-center">
                  {postPictureLoading && <LoadingSpinner />}
                  {postPictureSuccess && (
                    <span style={{ color: "green" }}>
                      <AiFillCheckCircle />
                    </span>
                  )}
                  {postPictureFail && (
                    <span style={{ color: "red" }}>
                      <AiFillCloseCircle />
                    </span>
                  )}
                </div>
              </Form.Group>
            )}

            <div className="d-flex ">
              {props.experienceId && (
                <Button
                  className="delete-button"
                  onClick={deleteExperience}
                  // variant="danger"
                  type="button"
                >
                  {/* <FaTrashAlt /> */}
                  Delete
                </Button>
              )}
              <Button
                className={
                  props.experienceId ? "primary-color" : "primary-color "
                }
                type="submit"
                onClick={() => postCompanyLogo(props.experienceId)}
              >
                {props.experienceId ? "Save" : "Save"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostExperienceForm;
