const languages = require('./src/locales/languages.json');
const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(languages).map(lang => {
      const localizedPath = languages[lang].default
        ? page.path
        : languages[lang].path + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          pathname: page.path,
        }
      })
    })

    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
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
            description {
              childMarkdownRemark {
                html
              }
            }
            node_locale
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allContentfulProjects.edges.forEach(({ node }) => {
      const localizedPath = languages[node.node_locale].default
          ? `/projects/${node.slug}`
          : languages[node.node_locale].path + `/projects/${node.slug}`;

      createPage({
        path: localizedPath,
        component: path.resolve('./src/templates/project.jsx'),
        context: {
          pathname: `/projects/${node.slug}`,
          title: node.title,
          description: node.description.childMarkdownRemark.html,
          locale: node.node_locale,
        },
      })
    })
  })
}
