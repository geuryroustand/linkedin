import "../styles/YourDreamJob.css"
import yourDreamJobImg from "../assets/your-dream-job.png"
const YourDreamJob = () => {
  return (
    <div id="your-dream-job-div" className="mb-3 border overflow-hidden">
      <img
        className="img-fluid"
        src={yourDreamJobImg}
        alt="your-dream-job-pic"
      />
    </div>
  )
}

export default YourDreamJob
