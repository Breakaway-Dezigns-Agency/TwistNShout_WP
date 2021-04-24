import React from 'react'
import UniversalLink from "../../utils/universalLink"

const NavItems = ({navItems})=>{
  const navList = navItems.map((navItem, i)=>{
    if (navItem.children.length){
      return (
        <div
          key={i}
          title={navItem.title}
          className={`nav-item has-dropdown`}
        >
          {navItem.label}
          <ul
            id="dropdown"
            className={`dropdown`}
          >
          {navItem.children.map((navItemChild, u)=>(
              <UniversalLink
                key={u}
                to={navItemChild.path}
                className={`dropdown-item`}
              >
                {navItemChild.label}
              </UniversalLink>
          ))}
          </ul>
        </div>
      )
    }
    return (
      <UniversalLink
        key={i}
        to={navItem.path}
        className={`nav-item`}
      >
        {navItem.label}
      </UniversalLink>
    )
  })

  return (
    <nav>
      {navList}
    </nav>
  )
}

export default NavItems

// const MobileNav = ()=>{
//   const data = useStaticQuery(graphql`
//     query MobileMenu {
//       header: wpgraphql {
//         parentMenu: menuItems(where: { location: PRIMARY}, first: 20) {
//           nodes {
//             id
//             title: label
//             path
//             target
//             parent: parentId
//           }
//         }
//       }
//     }
//   `)

//   const mainMenuItems = data.header.parentMenu.nodes

//   const headerMenu = FlatListToHierarchical(mainMenuItems, {
//     idKey: `id`,
//     childrenKey: `routes`,
//     parentKey: `parent`,
//   })

//   console.log(mainMenuItems);
//   console.log(headerMenu);

//   const [notClicked, setClick] = useState(false)

//   const MenuLoop = ({menuItems}) =>{
//     return(
//       <>
//         {menuItems.map((item, index)=>(
//           <>
//             <UniversalLink
//               key={index}
//               activeClassName="current-page"
//               to={item.path}
//               className={`py-4 px-3 ${item.routes.length > 0 ? `` : ''}`}
//             >
//               {item.title}
//             </UniversalLink>
//             {item.routes.length > 0 && (
//               <MenuLoop menuItems={item.routes} />
//             )}
//           </>
//         ))}
//       </>
//     )
//   }
//   return(
//     < >
//       {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu} />}
//     </>
//   )

// }

// export default MobileNav