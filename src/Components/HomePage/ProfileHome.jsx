import "../../styles/ProfileHome.css"
import { BsSlashSquareFill } from "react-icons/bs"
import { FaBookmark } from "react-icons/fa"

const ProfileHome = ({ meProfile }) => {
  return (
    <div id="profile-home-div" className="overflow-hidden border">
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(https://picsum.photos/200/300)`,
          height: "3rem",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="profile-pic overflow-hidden position-absolute">
          <img
            className="img-fluid"
            src={meProfile && meProfile.image}
            alt="profile pic"
          />
        </div>
      </div>
      <div className="name-title border-bottom text-center pt-5 pb-2 px-2">
        <h6>{meProfile && `${meProfile.name} ${meProfile.surname}`}</h6>
        <p className="text-muted">{meProfile && meProfile.title}</p>
      </div>
      <div className="views border-bottom py-2">
        <div className="text-muted d-flex justify-content-between px-2">
          <span>Who viewed your profile</span>
          <span className="quantity">19</span>
        </div>
        <div className="text-muted d-flex justify-content-between px-2">
          <span>Views of your post</span> <span className="quantity">55</span>
        </div>
      </div>
      <div className="premium border-bottom p-2">
        <span className="text-muted">Access exclusive tools & insight</span>{" "}
        <br />
        <span className="font-weight-bold">
          <span className="icon mr-1">
            <BsSlashSquareFill />
          </span>
          Try Premium for free
        </span>
      </div>
      <div className="my-items p-2">
        <span className="font-weight-bold">
          <span className="icon text-muted mr-1">
            <FaBookmark />
          </span>
          My Items
        </span>
      </div>
    </div>
  )
}

export default ProfileHome
