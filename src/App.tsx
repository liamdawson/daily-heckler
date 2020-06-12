import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moment from "moment";
import React, { useState } from "react";

import { TeamNav } from "./components";
import { Teams } from "./teams";
import AppSettings from "./settings";
import LandingRedirectPage from "./pages/LandingRedirectPage";
import TeamPage from "./pages/TeamPage";
import BingoCardPage from "./pages/BingoCardPage";

import "./App.css";

const App: React.FC = () => {
  let [selectedDate] = useState(new Date());
  const appSettings = new AppSettings(localStorage);

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/teams/:teamId">
              <TeamPage
                teams={Teams}
                dayNumber={moment(selectedDate).dayOfYear()}
              />
            </Route>
            <Route path="/bingo">
              <BingoCardPage />
            </Route>
            <Route path="/">
              <LandingRedirectPage
                teams={Teams}
                appSettings={appSettings} />
            </Route>
          </Switch>

          <TeamNav teams={Teams} appSettings={appSettings} />

          <footer className="site-footer" role="banner">
            <a href="https://github.com/liamdawson/daily-heckler">GitHub</a>{' | '}
            <Link to="/bingo">Bingo!</Link>
          </footer>
        </Router>
      </div>
    </>
  );
};

export default App;
