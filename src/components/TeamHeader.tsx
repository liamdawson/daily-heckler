import React from "react";
import "./TeamHeader.css";

interface IProps {
  team: { name: string };
}

export const TeamHeader: React.FC<IProps> = ({ team }) => {
  return <h1 className="TeamHeader">{team.name}</h1>;
};

export default TeamHeader;
