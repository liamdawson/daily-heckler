import React from 'react';

interface ITeam {
  name: string;
}

interface IProps {
  teams: Array<ITeam>;
  selectedTeamIndex: number;
  selectedDate: Date;
  onSelectedTeamIndexChanged: (selectedTeamIndex: number) => any;
  onSelectedDateChanged: (selectedDate: Date) => any;
}

const toInputString = (date: Date): string => {
  let year = `${date.getFullYear()}`;
  let month = `${date.getMonth() + 1}`.padStart(2, '0');
  let day = `${date.getDate()}`.padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const TeamSelector: React.FC<IProps> = ({ teams, selectedTeamIndex, selectedDate, onSelectedDateChanged, onSelectedTeamIndexChanged }) => {
  return (
    <>
      <select value={selectedTeamIndex} onChange={(e) => onSelectedTeamIndexChanged(parseInt(e.target.value, 10))}>
        {teams.map((team, index) => <option key={index} value={index}>{team.name}</option>)}
      </select>
      <input type="date" defaultValue={toInputString(selectedDate)} onChange={(e) => onSelectedDateChanged(new Date(e.target.value))} />
  </>);
};

export default TeamSelector;
