const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query WPPages {
      wpgraphql {
        pages(last: 30) {
          edges{
            node {
              id
              uri
              title
              content
            }
          }
        }
      }
    }
  `)
  if (result.err){
    reporter.panic(`Error loading events, ${result.err}`)
  }

  const pages = result.data.wpgraphql.pages.edges.forEach(page => {
    createPage({
      path: page.node.uri,
      component: path.resolve(`./src/templates/pages.js`),
      context: {
        id: page.node.id,
      },
    })
  })
}