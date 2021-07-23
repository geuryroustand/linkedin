import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MePage from "./Components/MePage/MePage"
import HomePage from "./Components/HomePage/HomePage"
import LinkedinNavbar from "./Components/LinkedinNavbar"
import StickyProfile from "./Components/StickyProfile"
import { useState, useEffect } from "react"
import bearerKey from "./bearerKey"

function App(props) {
  const [meProfile, setMeProfile] = useState(null)

  /* Function to fetch profile */
  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: bearerKey,
          },
        }
      )
      if (response.ok) {
        const myProfile = await response.json()
        console.log(myProfile)
        setMeProfile(myProfile)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log("there was an error")
    }
  }

  /* use effect */
  useEffect(() => {
    fetchProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <div className="App">
        <LinkedinNavbar meProfile={meProfile} />
        <StickyProfile />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <HomePage {...routerProps} meProfile={meProfile} />
          )}
        />
        <Route
          path="/me-page"
          exact
          render={(routerProps) => (
            <MePage
              {...routerProps}
              meProfile={meProfile}
              fetchProfile={fetchProfile}
            />
          )}
        />
      </div>
    </Router>
  )
}

export default App
