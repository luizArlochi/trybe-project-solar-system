import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="mission__content">
        <Title headline="Missões" />
        { missions.map((element) => (
          <MissionCard
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
            key={ element.name }
          />))}
      </div>
    );
  }
}

export default Missions;
