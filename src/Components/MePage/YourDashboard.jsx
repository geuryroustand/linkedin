import "../../styles/yourDashboard.css";

import { AiOutlineStar } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import { BsPeopleFill, BsBookmarkFill } from "react-icons/bs";

const YourDashboard = () => {
  return (
    <div id="your-dashboard-div" className="border p-4 mb-3">
      <div className="dashboard-title">
        <h4 className="font-weight-normal">Your Dashboard</h4>
        <div className="d-flex justify-content-between">
          <div className="text-muted font-italic">Private to you</div>
          <div className="text-muted">
            <AiOutlineStar /> All Star
          </div>
        </div>
        <div className="stats d-flex mt-3">
          <div className="border flex-fill px-3 pt-3">
            <a href="/">
              <h3>19</h3>
              <p>Who viewed your profile</p>
            </a>
          </div>
          <div className="border-top border-bottom flex-fill px-3 pt-3">
            <a href="/">
              <h3>55</h3>
              <p>Post views</p>
            </a>
          </div>
          <div className="border flex-fill px-3 pt-3">
            <a href="/">
              <h3>8</h3>
              <p>Search appearances</p>
            </a>
          </div>
        </div>
        <div className="creator-network-items mt-3">
          <div className="d-flex border p-3">
            <div className="icon d-flex align-items-center justify-content-center text-muted pr-3">
              <FaSatelliteDish />
            </div>
            <div>
              <a href="/">
                <p>
                  <strong>Creator mode: </strong>
                  <span className="text-muted">Off</span> <br />
                  <span className="text-muted">
                    Grow your audience and get discovered by highlighting
                    content on your profile.
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex border-left border-right p-3">
            <div className="icon d-flex align-items-center justify-content-center text-muted pr-3">
              <BsPeopleFill />
            </div>
            <div>
              <a href="/">
                <p>
                  <strong>My Network</strong>
                  <br />
                  <span className="text-muted">
                    Manage your connections. events, interests.
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="d-flex border p-3">
            <div className="icon d-flex align-items-center justify-content-center text-muted pr-3">
              <BsBookmarkFill />
            </div>
            <div>
              <a href="/">
                <p>
                  <strong>My items</strong>
                  <br />
                  <span className="text-muted">
                    Keep track of your jobs. courses and articles.
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDashboard;
