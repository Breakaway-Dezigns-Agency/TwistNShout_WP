import { graphql, useStaticQuery } from "gatsby"

const FlatListToHierarchical = (
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) => {
  const tree = []
  const childrenOf = {}
  data.forEach(item => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    newItem.type = `link`
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

export const GetMenuItems = () =>{
  const data = useStaticQuery(graphql`
    query ServiceSlides {
      primaryNav: wpgraphql {
         menuItems(where: {location: PRIMARY}, first: 20) {
          nodes {
            id
            parentId
            label
            path
          }
        }
      }
    }
  `)
  // console.log(primaryNav)
  return {
    data: FlatListToHierarchical(data.primaryNav.menuItems.nodes)
  }
}
// exports.ensureTrailingSlash = str => (str.endsWith("/") ? str : `${str}/`)