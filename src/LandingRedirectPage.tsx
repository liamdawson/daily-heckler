import { Redirect } from "react-router-dom";
import React from "react";

import { Team } from "./teams";
import AppSettings from "./settings";

import "./LandingRedirectPage.css";

interface IProps {
  teams: Array<Team>;
  appSettings: AppSettings;
}

export const LandingRedirectPage: React.FC<IProps> = ({
  teams,
  appSettings
}) => {
  const lastTeam = appSettings.lastTeam;

  if (lastTeam && teams.map(t => t.id).indexOf(lastTeam) !== -1) {
    return <Redirect to={`/${lastTeam}`} />;
  }

  return (
    <div className="LandingRedirectPage">
      <p className="instruction">Choose your team:</p>
    </div>
  );
};

export default LandingRedirectPage;
