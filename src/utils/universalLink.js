 import { Link as GatsbyLink } from "gatsby"
 import React from "react"

 const UniversalLink = ({
   children,
   to,
   activeClassName,
   partiallyActive,
   uri,
   ...other
 }) => {
   const internal = /^\/(?!\/)/.test(to)
   if (internal) {
     return (
       <GatsbyLink
         to={to}
         activeClassName={activeClassName}
         partiallyActive={partiallyActive}
         uri={uri}
         {...other}
       >
         {children}
       </GatsbyLink>
     )
   }
   return (
     <a href={to} {...other} uri={uri}>
       {children}
     </a>
   )
 }
 export default UniversalLink