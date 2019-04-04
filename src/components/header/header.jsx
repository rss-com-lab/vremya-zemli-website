import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LocalizedLink from '../localized-link';
import LanguageSelector from '../language-selector/language-selector';
import styles from './header.module.scss';

const Header = ({ path }) => {
  const { t } = useTranslation('header');

  return (
    <header className={styles.header}>
      <div>
        <LanguageSelector path={path} className={styles.languageSelector} />
        <h2 style={{ margin: 0 }}>
          <LocalizedLink to="/">
            {t('title')}
          </LocalizedLink>
        </h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default Header
