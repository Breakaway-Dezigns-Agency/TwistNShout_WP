import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function Post({data}) {
  const {html} = data.postDetails
  const {title, stack, featured_img} = data.postDetails.frontmatter

  return (
    <Layout>
      <SEO title="post"/>
      <div>
        <Img key={featured_img.childImageSharp.id} fluid={featured_img.childImageSharp.fluid}  />
        <div class="max-w-2xl lg:max-w-screen-lg mx-auto p-5 md:p-10 bg-washed-200 rounded relative md:-mt-20 text-onyx-200">
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query wpPostsBySlug($id: ID!) {
  wpgraphql {
    post(id: $id) {
      id
      title
      content
      featuredImage {
        node {
          id
          sourceUrl
          altText
        }
      }
    }
  }
}
`