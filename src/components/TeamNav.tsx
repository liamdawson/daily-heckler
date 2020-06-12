import React, { CSSProperties } from "react";
import "./TeamNav.css";
import { Team } from "../teams";
import { Link } from "react-router-dom";
import AppSettings from "../settings";

interface IProps {
  teams: Array<Team>;
  appSettings: AppSettings;
}

export const TeamNav: React.FC<IProps> = ({ teams, appSettings }) => (
  <nav className="TeamNav">
    {teams.map(team => (
      <Link
        key={team.id}
        to={`/teams/${team.id}`}
        style={{ "--team-color": team.color } as CSSProperties}
        onClick={() => appSettings.lastTeam = team.id}
      >
        {team.name}
      </Link>
    ))}
  </nav>
);

export default TeamNav;
