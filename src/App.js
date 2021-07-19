import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MePage from "./Components/MePage/MePage"
import LinkedinNavbar from "./Components/LinkedinNavbar"
import LinkedInFooter from "./Components/LinkedInFooter"

function App() {
  return (
    <Router>
      <div className="App">
        <LinkedinNavbar />
        <Route path="/" component={MePage} />
        <LinkedInFooter />
      </div>
    </Router>
  )
}

export default App
