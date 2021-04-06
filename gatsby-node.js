const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions
  const result = await graphql(`
  query PostPages {
    wpgraphql {
      posts {
        nodes {
          id
          slug
          title
          content
        }
      }
    }
  }
  `)
  // result.data.allMarkdownRemark.nodes.forEach(node => {
  //   createPage({
  //     path: '/posts/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/posts.js'),
  //     context: {
  //       slug: node.frontmatter.slug
  //     }
  //   })
  // });
  result.data.wpgraphql.posts.nodes.forEach(node => {
    createPage({
      path: '/post/' + node.slug,
      component: path.resolve('./src/templates/posts.js'),
      context: {
        id: node.id
      }
    })
  });
}