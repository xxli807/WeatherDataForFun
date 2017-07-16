
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './settings/Root';

window.onload = () => {
  ReactDOM.render((
    <Root />
  ), document.getElementById('app'));
};
