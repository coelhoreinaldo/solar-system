import React from 'react';
import titleSvg from '../images/titleSvg.svg'; // with import

export default class Header extends React.Component {
  render() {
    return (
      <header className="title">
        <img src={ titleSvg } alt="destination" />
      </header>
    );
  }
}
