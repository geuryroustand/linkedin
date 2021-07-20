import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MePage from "./Components/MePage/MePage";
import LinkedinNavbar from "./Components/LinkedinNavbar";
import LinkedInFooter from "./Components/LinkedInFooter";
import StickyProfile from "./Components/MePage/StickyProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <LinkedinNavbar />
        <StickyProfile />
        <Route path="/" component={MePage} />

        <LinkedInFooter />
      </div>
    </Router>
  );
}

export default App;
