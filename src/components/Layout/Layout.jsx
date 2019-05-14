import React from 'react';
import PropTypes from 'prop-types';

import './bootstrap.min.css';
import './layout.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
