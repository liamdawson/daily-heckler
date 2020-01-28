import React from "react";
import { Team } from "../teams";
import { Link } from "react-router-dom";

interface IProps {
  teams: Array<Team>;
}

export const TeamNav: React.FC<IProps> = ({ teams }) => (
  <nav className="choose-team">
    {teams.map(team => (
      <Link key={team.id} to={`/${team.id}`} style={{ color: team.color }}>
        {team.name}
      </Link>
    ))}
  </nav>
);

export default TeamNav;
