import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <section className="solarSystem__control">
          {Planets.map((element) => (
            <PlanetCard
              planetName={ element.name }
              planetImage={ element.image }
              key={ element.name }
            />
          ))}
        </section>

      </div>
    );
  }
}
export default SolarSystem;
