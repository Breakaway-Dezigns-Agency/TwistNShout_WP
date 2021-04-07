import { graphql} from 'gatsby'
import React from 'react'
// import Layout from '../components/layout'
// import SEO from "../components/seo"
// import Img from "gatsby-image"

const Post = ({data}) => {
  const {slug, title, content} = data.wpgraphql.post

  console.log(data);

  return (
    <div>
      {slug}, <br />{title},<br />{content}
    </div>
      // <div>
      //   <Img key={featured_img.childImageSharp.id} fluid={featured_img.childImageSharp.fluid}  />
      //   <div class="max-w-2xl lg:max-w-screen-lg mx-auto p-5 md:p-10 bg-washed-200 rounded relative md:-mt-20 text-onyx-200">
      //     <h2>{title}</h2>
      //     <h3>{slug}</h3>
      //     <div dangerouslySetInnerHTML={{__html: content}} />
      //   </div>
      // </div>
  )
}

export default Post

export const query = graphql`
query wpPostsBySlug($id: ID!){
  wpgraphql{
    post(id: $id) {
      id
      slug
      title
      content
    }
  }
}
`