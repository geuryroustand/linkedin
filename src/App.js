import "bootstrap/dist/css/bootstrap.min.css"
import "./LinkedinNavbar.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MePage from "./Components/MePage/MePage"
import LinkedinNavbar from "./Components/LinkedinNavbar"
import LinkedInFooter from "./Components/LinkedInFooter"


function App() {
  return (
    <div className="App">
      <Router>
        <LinkedinNavbar />
<LinkedInFooter />
        
        <Route path="/" component={MePage} />
        
        
        
      </Router>

    </div>
  )
}

export default App
