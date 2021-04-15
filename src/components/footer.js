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
    <footer className="bg-black text-white mt-5 py-10">
      <div className="text-center max-w-5xl mx-auto flex justify-between items-center flex-wrap">
        <div className="social-wrap flex max-w-5xl justify-center">
          {socialItems.map(item =>(
            <a key={item.id} href={item.url} className={`rounded-full bg-orange h-10 w-10 flex items-center justify-center mx-2 hover:bg-turquoise`}>
              <i className={`icon-${item.label}`}></i>
            </a>
          ))}
        </div>
        <div className="menu-wrap">
          {footerItems.map(item =>(
            <Link key={item.id} to={item.path} target={item.target} className={`mx-2 hover:text-orange`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid justify-items-center">
        <p className={`text-center`}>Twist and Shout Events © 2021</p>
        <small className={`text-center opacity-20 pt-10`}>Site by | Breakaway Dezigns (BA_D) Agency © 2021</small>
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