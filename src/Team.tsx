import React from 'react';
import TeamHeader from './TeamHeader';
import TeamOrder from './TeamOrder';

interface IProps {
  team: { name: string; color: string; members: Array<{ name: string; }> };
  dayNumber: number;
}

export const Team: React.FC<IProps> = ({ team, dayNumber }) => (
  <div style={{color: team.color}}>
      <TeamHeader
        team={team} />

      <TeamOrder
        members={team.members}
        dayNumber={dayNumber} />
  </div>
);

export default Team;
