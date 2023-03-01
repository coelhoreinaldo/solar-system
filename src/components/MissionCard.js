import React from 'react';
import PropTypes from 'prop-types';
import './Missions.css';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h1 data-testid="mission-name">{name}</h1>
        <div className="card-desc">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p
            data-testid="mission-destination"
            className="mission-destination"
          >
            {destination}

          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
