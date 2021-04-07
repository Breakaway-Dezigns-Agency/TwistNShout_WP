import * as React from "react"
import {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, navMenu, bookButton }) => {

  const [active, setActive] = useState(false);
  const mobileHidden = "mobile-menu md:hidden grid text-center slide-right"
  const mobileShown = "mobile-menu hidden md:hidden grid text-center"

  // const [open, setOpen] = useState(false);
  // const data = useStaticQuery(
  //   graphql`
  //     query Menu{
  //       wpgraphql {
  //         menu(id: "dGVybToy") {
  //           menuItems(last: 20) {
  //             edges {
  //               node {
  //                 id
  //                 label
  //                 path
  //                 childItems {
  //                   edges {
  //                     node {
  //                       id
  //                       label
  //                       path
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //           locations
  //         }
  //       }
  //     }
  // `)
  // console.log(data);

  return (
    <header>
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* logo & primary group */}
            <div className="flex space-x-4 items-center">
              {/* site logo */}
              <div>
                <Link to="/" className="flex py-3 px-2 text-gray-700">
                  <svg className="h6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="font-bold">{siteTitle}</span>
                </Link>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                {/* {navMenu.map((item, index) =>{
                    return (
                      item.title
                      // {item.subNav
                        // ? console.log(true)
                        // : console.log(false)
                        // ? <Link to={item.path} key={index} className="py-4 px-3">
                        //     {item.path}
                        //     <div className={`sub-nav`}>
                        //       {item.subNav.map((sub, index)=>{
                        //         <Link to={sub.path} key={index}>{sub.title}</Link>
                        //       })}
                        //     </div>
                        //   </Link>
                        // : <Link to={item.path} key={index} className="py-4 px-3">{item.path}</Link>
                      // }
                    )
                  })} */}
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/page-2" className="py-2 px-3 bg-yellow-200 rounded shadow">Book Now</Link>
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
          {/* {navMenu.map((item, index) =>{
            return(
            <Link to={item.path} key={index} className="py-4 px-3">
              {item.subNav
              ? <span>{item.title}
                  <div className={`sub-nav mobile`}>
                    {item.subNav.map((sub, index)=>{ return(
                      <Link to={sub.path} key={index} className="py-3 px-2">{sub.title}</Link>
                    )})}
                  </div>
                </span>
              : <Link to={item.path} key={index} className="py-4 px-3">{item.title}</Link>
              }
            </Link>
            )
          })} */}
        </div>
      </nav>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  navMenu: [
    {
      title: `Pricing`,
      path: `/pricing`
    },
    {
      title: `Services`,
      path: `/services`,
      subNav: [
        {
          title: 'Balloon Twisting',
          path: '/balloon-twisting'
        },
        {
          title: 'Balloon Arches',
          path: '/balloon-arches'
        },
        {
          title: 'Yard Signs',
          path: '/yard-signs'
        },
        {
          title: 'Photo Booth',
          path: '/photo-booth'
        },
        {
          title: 'Face Painting',
          path: '/face-painting'
        },
        {
          title: 'Airbrush & Glitter',
          path: '/airbrush-tattoos'
        },
        {
          title: 'Henna Tattoos',
          path: '/henna-tattoos'
        },
        {
          title: 'Hair Braiding',
          path: '/hair-braiding'
        },
        {
          title: 'Caricature',
          path: '/caricature'
        },
      ]
    },
    {
      title: 'FAQs',
      path: '/faq'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ],
  bookButton:{
    title: 'Book Now',
    path: '/book-now'
  }
}

export default Header