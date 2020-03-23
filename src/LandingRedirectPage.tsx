import React from "react";

import { Team } from "./teams";
import { randomTitle } from "./titles";
import { Entry } from "./components";
import AppSettings from "./settings";

import "./LandingRedirectPage.css";

interface IProps {
  teams: Array<Team>;
  appSettings: AppSettings;
}

export const LandingRedirectPage: React.FC<IProps> = ({
  teams,
  appSettings
}) => (
    <div className="LandingRedirectPage">
      <Entry title={randomTitle()} />
      <p className="instruction">Choose your team:</p>
    </div>
  );

export default LandingRedirectPage;
