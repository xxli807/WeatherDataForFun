
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'app/Root';

window.onload = () => {
  ReactDOM.render((
    <Root />
  ), document.getElementById('app'));
};
