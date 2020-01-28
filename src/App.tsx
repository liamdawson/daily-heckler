import React, { useState } from 'react';
import './App.css';
import { Teams } from './teams';
import Team from './Team';
import TeamSelector from './TeamSelector';
import moment from 'moment';

const App: React.FC = () => {
  let [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  let [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <TeamSelector
        teams={Teams}
        selectedDate={selectedDate}
        selectedTeamIndex={selectedTeamIndex}
        onSelectedTeamIndexChanged={setSelectedTeamIndex}
        onSelectedDateChanged={setSelectedDate} />

      <Team
        team={Teams[selectedTeamIndex]}
        dayNumber={moment(selectedDate).dayOfYear()} />
    </div>
  );
}

export default App;
