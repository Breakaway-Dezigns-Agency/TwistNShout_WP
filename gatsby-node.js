const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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

  result.data.wpgraphql.posts.nodes.forEach(node => {
    createPage({
      path: '/post/' + node.slug,
      component: path.resolve('./src/templates/posts.js'),
      context: {
        id: node.id,
      },
    })
  })
}