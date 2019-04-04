import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LocalizedLink from '../localized-link';
import styles from './nav-line.module.scss';

const NavLine = ({ parentStyles = {} }) => {
  const { t } = useTranslation('header');

  return (
    <div className={styles.navLine}>
      <div className={parentStyles.container}>
        <nav>
          <ul>
            <li>
              <LocalizedLink to="/" activeClassName={styles.active}>{t('Home')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/projects" activeClassName={styles.active}>{t('Projects')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/blog" activeClassName={styles.active}>{t('News')}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/contact" activeClassName={styles.active}>{t('Contacts')}</LocalizedLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

NavLine.propTypes = {
  parentStyles: PropTypes.objectOf(PropTypes.string),
};

export default NavLine;
