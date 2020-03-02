import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";
import React, { useState } from "react";

import { TeamNav } from "./components";
import { Teams } from "./teams";
import AppSettings from "./settings";
import LandingRedirectPage from "./LandingRedirectPage";
import TeamPage from "./TeamPage";

import "./App.css";

const App: React.FC = () => {
  let [selectedDate, setSelectedDate] = useState(new Date());
  const appSettings = new AppSettings(localStorage);

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/:teamId">
              <TeamPage
                teams={Teams}
                dayNumber={moment(selectedDate).dayOfYear()}
              />
            </Route>
            <Route path="/">
              <LandingRedirectPage
                teams={Teams}
                appSettings={appSettings} />
            </Route>
          </Switch>

          <TeamNav teams={Teams} appSettings={appSettings} />

          <footer className="site-footer" role="banner">
            <a href="https://github.com/liamdawson/daily-heckler">GitHub</a>
          </footer>
        </Router>
      </div>
    </>
  );
};

export default App;
