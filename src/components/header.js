import * as React from "react"
import {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import MainNav from "./navigation/mainNav"
// import MobileNav from "./navigation/mobileNav"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {

  const [active, setActive] = useState(false);
  const mobileHidden = "mobile-menu md:hidden grid items-center text-center absolute w-full bg-black left-0 transition-all duration-500"
  const mobileShown = "mobile-menu md:hidden grid text-center absolute -left-full transition-all"

  return (
    <header>
      <nav className="bg-black text-white z-20 font-nav uppercase tracking-widest text-md md:text-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* logo & primary group */}
            <div className="flex space-x-4 items-center">
              {/* site logo */}
              <div>
                <Link to="/" className="flex py-3 px-2 w-40 h-24 transition transform hover:scale-125">
                  <StaticImage
                    src='../../static/images/twistnShout_logo_BLK.png'
                    alt='Twist and Shout Logo'
                    width={350}
                    height={200}
                    layout='constrained'
                    objectFit='contain'
                  />
                  {/* <span className="font-bold">{siteTitle}</span> */}
                </Link>
              </div>
              {/* primary nav */}
              <MainNav />
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/page-2" className="py-3 px-4 bg-turquoise text-white rounded shadow">Book Now</Link>
            </div>
            {/* mobile button */}
            <div className="flex md:hidden items-center">
              <button className="mobile-menu-button" onClick={() => setActive(!active)}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className={active ? mobileHidden : mobileShown }>
          {/* <MobileNav /> */}
        </div>
      </nav>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header