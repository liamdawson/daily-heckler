import React from 'react';
import './App.css';
import { Teams } from './teams';
import TeamOrder from './TeamOrder';

const App: React.FC = () => {
  return (
    <div className="App">
      {Teams.map(({ name, members }) => <TeamOrder key={name} name={name} members={members} dateSeed={new Date()} />)}
    </div>
  );
}

export default App;
