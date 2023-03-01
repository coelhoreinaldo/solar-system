import React from 'react';
import PropTypes from 'prop-types';
import './SolarSystem.css';

export default class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img
          className="planet-image"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetImage: 'https://avatars.githubusercontent.com/u/51808343?s=280&v=4',
};
