import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Team } from "../teams";
import { HazeBackground, TeamHeader, TeamOrder } from "../components";
import { FiMusic } from "react-icons/fi";

interface IProps {
  teams: Array<Team>;
  dayNumber: number;
}

export const TeamPage: React.FC<IProps> = ({ teams, dayNumber }) => {
  const { teamId } = useParams();
  const [playWaitingMusic, setPlayWaitingMusic] = useState(false);

  const team = teams.find((t) => t.id === teamId);

  let content = <></>;

  if (team) {
    const presentMembers = team.members.filter((member) => !member.away);

    content = (
      <>
        <div style={{ color: "var(--team-color)" }}>
          <HazeBackground />
          <TeamHeader team={team} />
          <TeamOrder dayNumber={dayNumber} members={presentMembers} />
        </div>
        <p style={{ paddingTop: "2ex" }}>
          <button
            onClick={() => setPlayWaitingMusic(!playWaitingMusic)}
            style={{
              background: "none",
              border: "none",
              font: "inherit",
              color: "inherit",
              padding: "2ex 1em",
              cursor: "pointer",
            }}
          >
            <FiMusic /> Toggle waiting music <FiMusic />
          </button>
          {playWaitingMusic ? (
            <audio
              autoPlay={true}
              loop={true}
              src="/waiting/girl-from-ipanema.ogg"
            >
              Aww, your browser doesn't support this.
            </audio>
          ) : null}
        </p>
      </>
    );
  }

  return (
    <div style={{ ["--team-color" as any]: (team && team.color) || "#00ffaa" }}>
      {content}
    </div>
  );
};

export default TeamPage;
