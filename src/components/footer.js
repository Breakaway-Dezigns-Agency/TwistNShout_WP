import * as React from "react"
import PropTypes from "prop-types"
// import {useState} from "react"
// import { Link } from "gatsby"

const Footer = () => {
  return(
    <footer className="bg-cyber mt-5 p-5">
      <div className="text-center max-w-5xl mx-auto">
        <h2>this is my footer</h2>
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