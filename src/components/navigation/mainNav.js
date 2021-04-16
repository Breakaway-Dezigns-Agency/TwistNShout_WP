import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import UniversalLink from "../../utils/universalLink"
import { FlatListToHierarchical } from "../../utils/FlatListToHierarchical"

const MainNav = ()=>{
  const data = useStaticQuery(graphql`
    query MainMenu {
      header: wpgraphql {
        parentMenu: menuItems(where: { location: PRIMARY}, last: 20) {
          nodes {
            id
            title: label
            path
            target
            parent: parentId
          }
        }
      }
    }
  `)

  const mainMenuItems = data.header.parentMenu.nodes

  const headerMenu = FlatListToHierarchical(mainMenuItems, {
    idKey: `id`,
    childrenKey: `routes`,
    parentKey: `parent`,
  })

  const [notClicked, setClick] = useState(false)

  const MenuLoop = ({menuItems}) =>{
    return(
      <>
        {menuItems.map((item, i)=>(
          <>
            <UniversalLink
              key={i}
              activeClassName="current-page"
              to={item.path}
              className={`py-4 px-3 ${item.routes.length > 0 ? `dropdown ${notClicked ? "active" : null }` : ''}`}
            >
              {item.title}
              {item.routes.length > 0 && (<div className={`sub-menu z-50 bg-yellow text-sm rounded-md`} ><MenuLoop menuItems={item.routes} /></div>)}
            </UniversalLink>
          </>
        ))}
      </>
    )
  }
  return(
    <div className={`hidden md:flex items-center space-x-1`} >
      {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu} />}
    </div>
  )

}

export default MainNav