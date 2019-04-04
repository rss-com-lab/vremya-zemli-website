import React from "react";
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';

import Layout from '../components/layout/layout';
import styles from './contacts.module.scss';

const ContactsPage = ({ pathContext, i18n, t, data }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);

  const pageData = data.allContentfulPages.edges
    .filter(item => item.node.node_locale === pathContext.locale)[0].node;

  return (
    <Layout path={pathContext.pathname}>
      <Helmet>
        <title>{`${pageData.title} – ${t('title')}`}</title>
      </Helmet>
      <h1>{pageData.title}</h1>
      <div 
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: pageData.text.childMarkdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default withTranslation('header')(ContactsPage);

export const pageQuery = graphql`
  {
    allContentfulPages(filter: {contentful_id: {eq: "6npxFyYKQF0WKGSFEiD3DD"}}) {
      edges {
        node {
          title
          node_locale
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
