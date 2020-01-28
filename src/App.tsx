import React, { useState } from 'react';
import './App.css';
import { Teams } from './teams';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TeamNav } from './components';
import TeamPage from './TeamPage';

const App: React.FC = () => {
  let [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:teamId">
            <TeamPage
              teams={Teams}
              dayNumber={moment(selectedDate).dayOfYear()} />
          </Route>
        </Switch>

        <TeamNav
          teams={Teams} />

        <footer className="site-footer" role="banner">
          <a href="https://github.com/liamdawson/daily-heckler">Hack the Source?</a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
