import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'


const Home = () => {
  const data = useStaticQuery(graphql`
  query wpHome($id: ID! = "cG9zdDo4") {
    home: wpgraphql {
      page(id: $id) {
        id
        seo {
          title
          breadcrumbs {
            text
          }
        }
        title
        content
      }
    }
  }
  `)
  console.log(data);
  const {id, title, content, seo} = data.home.page
  return (
    <Layout>
        <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Home