import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import PageTransition from './transition';

const Layout = ({ children, location }) => {
	return <PageTransition location={location}>{children}</PageTransition>;
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
