import React from 'react';
import logo from '../../assets/images/logo.svg';

export default (props) => {
  const {
    title,
  } = props;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {title}
      </h1>
    </header>
  );
}