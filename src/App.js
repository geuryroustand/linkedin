import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MePage from "./Components/MePage/MePage";
import LinkedinNavbar from "./Components/LinkedinNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <LinkedinNavbar />

        <Route path="/" component={MePage} />
      </Router>
    </div>
  );
}

export default App;
