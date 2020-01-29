import React from "react";
import { useParams } from "react-router-dom";
import { Team } from "./teams";
import { HazeBackground, TeamHeader, TeamOrder } from "./components";

interface IProps {
  teams: Array<Team>;
  dayNumber: number;
}

export const TeamPage: React.FC<IProps> = ({ teams, dayNumber }) => {
  const { teamId } = useParams();

  const team = teams.find(t => t.id === teamId);

  let content = <></>;

  if (team) {
    content = (
      <div style={{ color: "var(--team-color)" }}>
        <HazeBackground />
        <TeamHeader team={team} />
        <TeamOrder dayNumber={dayNumber} members={team.members} />
      </div>
    );
  }

  return (
    <div style={{ ["--team-color" as any]: (team && team.color) || "#00ffaa" }}>
      {content}
    </div>
  );
};

export default TeamPage;
