import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from 'gatsby'


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
        }
      }`} render={props =>(
        <div>
          {props.wpgraphql.pages.edges.map(page => (
            <div key={page.node.id}>
              <h1>{page.node.title}</h1>
              <div dangerouslySetInnerHTML={{__html: page.node.content}} />
            </div>
          ))}
        </div>
      )}/>
    </Layout>
  )
}
