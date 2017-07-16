import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Layout = ({ children }) => (
  <div>
    <div className={classnames('container-fluid')}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
