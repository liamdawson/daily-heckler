import React from 'react';
import { useParams } from 'react-router-dom';
import { Team } from './teams';
import { TeamHeader, TeamOrder } from './components';

interface IProps {
  teams: Array<Team>;
  dayNumber: number;
}

export const TeamPage: React.FC<IProps> = ({ teams, dayNumber }) => {
  const { teamId } = useParams();

  const team = teams.find(t => t.id === teamId);

  if(team) {
    return (<div style={{color: team.color}}>
      <TeamHeader
        team={team} />
      <TeamOrder
        dayNumber={dayNumber}
        members={team.members} />
    </div>);
  } else {
    return (<></>);
  }
};

export default TeamPage;
