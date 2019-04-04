import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './footer.module.scss';

const Footer = ({ parentStyles = {} }) => {
  const { t } = useTranslation('footer');

  return (
    <footer className={styles.footer}>
      <div className={parentStyles.container}>
        © 2018 - {new Date().getFullYear()}: {t('title')}, {t('All Rights Reserved')}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  parentStyles: PropTypes.objectOf(PropTypes.string),
}

export default Footer;
