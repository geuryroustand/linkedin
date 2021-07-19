import "../../styles/Activity.css"

const Activity = () => {
  return (
    <div id="activity-div" className="border mb-3">
      <div className="px-4 pt-4">
        <div>
          <div className="activity-title d-flex justify-content-between">
            <h4>Activity</h4>
            <div className="start-post text-muted d-flex align-items-center justify-content-center px-2">
              Start a post
            </div>
          </div>
          <p className="followers">
            <a href="/">189 followers</a>
          </p>
        </div>
        <p className="mt-3">
          Posts you created, shared, or commented on in the last 90 days are
          displayed here.
        </p>
      </div>
      <div className="see-all-activity  border-top d-flex justify-content-center mt-2 py-3">
        <span className="text-muted">See all activity</span>
      </div>
    </div>
  )
}

export default Activity
