import React, { CSSProperties } from "react";
import "./TeamNav.css";
import { Team } from "../teams";
import { Link } from "react-router-dom";

interface IProps {
  teams: Array<Team>;
}

export const TeamNav: React.FC<IProps> = ({ teams }) => (
  <nav className="TeamNav">
    {teams.map(team => (
      <Link
        key={team.id}
        to={`/${team.id}`}
        style={{ "--team-color": team.color } as CSSProperties}
      >
        {team.name}
      </Link>
    ))}
  </nav>
);

export default TeamNav;
