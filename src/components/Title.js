import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h1 className="title">{headline}</h1>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
