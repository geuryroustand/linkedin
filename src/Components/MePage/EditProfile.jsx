import "../../styles/EditProfile.css";
import { AiFillQuestionCircle } from "react-icons/ai";
const EditProfile = () => {
  return (
    <div id="edit-profile-div" className="p-3 border mb-3 mt-4">
      <a href="/">
        <div className="border-bottom d-flex justify-content-between text-muted pb-3">
          <span>Edit public profile & URL</span>
          <span className="question-mark">
            <AiFillQuestionCircle />
          </span>
        </div>
      </a>
      <a href="/">
        <div className="d-flex justify-content-between text-muted pt-3">
          <span>Add profile in another language</span>
          <span className="question-mark">
            <AiFillQuestionCircle />
          </span>
        </div>
      </a>
    </div>
  );
};

export default EditProfile;
