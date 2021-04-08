import { graphql} from 'gatsby'
import React from 'react'
import Layout from '../components/layout';
import SEO from "../components/seo"
// import Img from "gatsby-image"

const Post = ({data}) => {

  const {title, slug, content, seo} = data.wpgraphql.page

  console.log(data);

  return (
    <Layout>
      <SEO title={seo.title} />
      <div>
        {/* <Img key={featured_img.childImageSharp.id} fluid={featured_img.childImageSharp.fluid}  /> */}
        <div>
          <h2>{title}</h2>
          <h3>{slug}</h3>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query wpPagesBySlug($id: ID!) {
    wpgraphql {
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
`