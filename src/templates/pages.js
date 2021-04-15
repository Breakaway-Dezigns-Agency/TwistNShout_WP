import { graphql, Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from "../components/seo"
import ServiceMenu from './sections/serviceMenu';
// import Img from "gatsby-image"

const Page = ({data}) => {

  const {title, slug, content, seo} = data.wpgraphql.page
  const book = data.wpgraphql.book

  return (
    <Layout>
      <SEO title={seo.title} />
      <section className={`page-wrap`}>
        <Hero />
        <section className={`content-wrap grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center my-20`}>
          <div className={`book-wrap flex flex-wrap content-center`}>
            <StaticImage
              src='../../static/images/placeholder.jpg'
              alt='placeholder'
              height={350}
              width={350}
              layout='constrained'
              className='book-image shadow-lg rounded-lg'
            />
            <div className="book-btn">
              <button className={`px-12 py-6 text-white bg-yellow rounded-xl shadow-lg hover:bg-orange hover:scale-110 transition-all transform`}>
                {/* <a className={`text-xl font-heading uppercase`} href={book.path} target={book.target}>{book.label}</a> */}
              </button>
            </div>
          </div>
          <div className={`max-w-7xl mx-auto px-5 pr-9 mt-10 md:pr-20 flex flex-wrap content-center`}>
            <h2>{title}</h2>
            <h3>{slug}</h3>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </section>
        <ServiceMenu />
      </section>
    </Layout>
  )
}

export default Page

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