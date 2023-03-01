import React from 'react';
import PropTypes from 'prop-types';
import './Missions.css';
import date from '../images/date.svg'; // with import
import local from '../images/local.svg'; // with import
import destinationSvg from '../images/destination.svg'; // with import

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h1 data-testid="mission-name">{name}</h1>
        <div className="card-desc">
          <div className="desc-container">
            <img src={ date } alt="date" />
            <p data-testid="mission-year">{year}</p>
          </div>
          <div className="desc-container">
            <img src={ local } alt="local" />
            <p data-testid="mission-country">{country}</p>
          </div>
          <div
            className="mission-destination"
          >
            <img src={ destinationSvg } alt="destination" />
            <p
              data-testid="mission-destination"
            >
              {destination}

            </p>
          </div>
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
