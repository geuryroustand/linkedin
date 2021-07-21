import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MePage from "./Components/MePage/MePage";
import LinkedinNavbar from "./Components/LinkedinNavbar";
import LinkedInFooter from "./Components/LinkedInFooter";
import StickyProfile from "./Components/StickyProfile";
import { useState, useEffect } from "react";

function App(props) {
  const [meProfile, setMeProfile] = useState(null);

  /* Function to fetch profile */
  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
          },
        }
      );
      if (response.ok) {
        const myProfile = await response.json();
        console.log(myProfile);
        setMeProfile(myProfile);
      } else {
        console.log("there was an error");
      }
    } catch (error) {
      console.log("there was an error");
    }
  };

  /* use effect */
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <LinkedinNavbar />
        <StickyProfile />
        <Route
          path="/"
          render={(routerProps) => (
            <MePage {...routerProps} meProfile={meProfile} />
          )}
        />

        <LinkedInFooter />
      </div>
    </Router>
  );
}

export default App;
