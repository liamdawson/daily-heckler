import React from "react";
import { FancyHeading } from ".";
import "./TeamHeader.css";

interface IProps {
  team: { name: string, color: string, };
}

export const TeamHeader: React.FC<IProps> = ({ team }) => {
  // return <h1 className="TeamHeader">{team.name}</h1>;
  return <FancyHeading color={team.color}>{team.name}</FancyHeading>;
};

export default TeamHeader;
