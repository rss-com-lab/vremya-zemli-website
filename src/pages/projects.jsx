import React from "react";
import { graphql } from 'gatsby';
import { withTranslation } from 'react-i18next';

import LocalizedLink from '../components/localized-link';
import Layout from '../components/layout/layout';
import styles from './projects.module.scss';

const ProjectsPage = ({ i18n, pathContext, data }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);

  const projects = data.allContentfulProjects.edges
    .filter(item => item.node.node_locale === pathContext.locale)  
    .map(item => item.node);

  return (
    <Layout path={pathContext.pathname}>
      {projects.map(project => <LocalizedLink to={`/projects/${project.slug}`} className={styles.link} ><h2>{project.title}</h2></LocalizedLink>)}
    </Layout>
  )
}

export default withTranslation('header')(ProjectsPage);

export const pageQuery = graphql`
  {
    allContentfulProjects(
      sort: {
        fields: [createdAt]
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          node_locale
        }
      }
    }
  }
`
