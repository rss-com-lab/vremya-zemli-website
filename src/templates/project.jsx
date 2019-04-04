import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from '../components/layout/layout';

const ProjectPage = ({ i18n, pathContext }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);

  return (
    <Layout path={pathContext.pathname}>
      <h1>{pathContext.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: pathContext.description }}
      ></div>
    </Layout>
  )
}

export default withTranslation('header')(ProjectPage);
