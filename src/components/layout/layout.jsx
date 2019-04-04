import React from 'react';
import PropTypes from 'prop-types';

import NavLine from '../nav-line/nav-line';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../i18next';
import './layout.scss';  
import styles from './layout.module.scss'

const Layout = ({ children, path }) => (
  <div className={styles.wrapper}>
    <Header path={path}/>
    <NavLine/> 
    <main className={[styles.container, styles.main].join(' ')}>{children}</main>
    <Footer parentStyles={styles} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout;
