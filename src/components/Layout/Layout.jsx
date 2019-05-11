import React from 'react';
import PropTypes from 'prop-types';

import './bootstrap.min.css';
import './layout.css';

import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
