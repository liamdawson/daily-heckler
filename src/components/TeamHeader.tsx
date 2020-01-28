import React from 'react';

interface IProps {
  team: { name: string; };
}

export const TeamHeader: React.FC<IProps> = ({ team }) => {
  return <h1>{team.name}</h1>;
};

export default TeamHeader;
