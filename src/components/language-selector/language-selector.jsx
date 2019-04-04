import { navigate } from "gatsby";
import React from "react";
import { useTranslation } from 'react-i18next';

import styles from './language-selector.module.scss';

import { languages } from '../../locales';
const langs = Object.keys(languages);

const LanguageSelector = ({ path, className }) => {
  const { i18n } = useTranslation();

  return (
    <ul className={[styles.languageSelector, className].join(' ')}
      onClick={e => {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        const localizedPath = languages[lang].default
          ? path
          : languages[lang].path + path;
        navigate(localizedPath);
      }}
    >
      {langs.map(lang => <li key={lang}>
        <button data-lang={lang} disabled={lang === i18n.language}>
          {languages[lang].title}
        </button>
      </li>)}
    </ul>
  )
}

export default LanguageSelector;
