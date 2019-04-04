import React from "react";
import { Link } from "gatsby";
import { useTranslation } from 'react-i18next'; 

import { languages } from '../locales';

const LocalizedLink = ({ to, ...props }) => {
  const { i18n } = useTranslation();
  const lang = languages[i18n.language] || {};
  const path = lang.default ? to : '/' + i18n.language + to;

  return (
    <Link {...props} to={path} />
  )
}

export default LocalizedLink;
