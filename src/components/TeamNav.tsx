import React from "react";
import { Team } from "../teams";
import { Link } from "react-router-dom";

interface IProps {
  teams: Array<Team>;
}

export const TeamNav: React.FC<IProps> = ({ teams }) => (
  <nav
    style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: '2rem 0' }}
  >
    {teams.map(team => (
      <Link
        key={team.id}
        to={`/${team.id}`}
        style={{
          display: "block",
          padding: "2ex 2rem",
          fontSize: "2rem",
          color: "#fff"
        }}
      >
        {team.name}
      </Link>
    ))}
  </nav>
);

export default TeamNav;
