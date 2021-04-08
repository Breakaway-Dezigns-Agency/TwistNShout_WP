import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
// import {useState} from "react"
// import { Link } from "gatsby"
import "../styles/vendor/fontello/css/fontello.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query wpFooterMenu {
    menus: wpgraphql {
      footer: menu(id: "dGVybTo0MjY=") {
        menuItems {
          nodes {
            label
            id
            path
            target
            order
          }
        }
      }
      social: menu(id: "dGVybTo0NTI=") {
        menuItems {
          nodes {
            label
            id
            url
            target
            order
          }
        }
      }
    }
  }
`)
const footerItems = data.menus.footer.menuItems.nodes
const socialItems = data.menus.social.menuItems.nodes

  return(
    <footer className="bg-cyber mt-5 p-5">
      <div className="text-center max-w-5xl mx-auto">
        <h2>this is my footer</h2>
        {footerItems.map(item =>(
          <Link key={item.id} to={item.path} target={item.target}>
            {item.label}
          </Link>
        ))}
        {socialItems.map(item =>(
          <a key={item.id} href={item.url}>
            <i className={`icon-${item.label}`}></i>
          </a>
        ))}
      </div>
    </footer>
  )
}
// console.log(PropTypes);
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer