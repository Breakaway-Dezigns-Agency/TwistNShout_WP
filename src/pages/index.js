import React from "react"
import Layout from "../components/layout"
import { graphql, Link, StaticQuery } from 'gatsby'


export default function Home() {
  return (
    <Layout>
      <StaticQuery query={graphql`
      {
        wpgraphql{
          pages{
            edges{
              node{
                id
                title
                content
              }
            }
          }
          posts {
            nodes {
              id
              slug
              title
              content
            }
          }
        }
      }`} render={props =>(
        <div>
          {props.wpgraphql.posts.nodes.map(post => (
            <Link to={`/posts/${post.slug}`} key={post.id}>
                <h1>{post.title}</h1>
            </Link>
          ))}
        </div>
      )}/>
    </Layout>
  )
}
