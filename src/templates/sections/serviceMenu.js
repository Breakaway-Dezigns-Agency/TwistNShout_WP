import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import ImageSlider from '../../components/slider';

const ServiceMenu = ()=>{
  const data = useStaticQuery(graphql`
    query ServiceMenu{
      wpgraphql{
        services: menuItems(where: {parentId: "cG9zdDoyODE0", location: PRIMARY}, last: 20) {
          nodes {
            id
            label
            path
          }
        }
      }
    }
  `)
  const services = data.wpgraphql.services.nodes
  return(
    <section className={`service-wrap grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-items-center my-20`}>
      <div className={`service-menu max-w-md mx-auto rounded-xl`}>
        <div className="border-2 border-orange px-20 rounded-xl">
        <h1>Services</h1>
          <div className="categories-sidebar">
            <div className="flex flex-col text-center">
              {services.map((service)=>(
                <Link key={service.id} className={`py-2`} to={service.path}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`max-w-xs md:max-w-md mx-auto px-5 mt-4`}>
        <ImageSlider />
      </div>
    </section>
  )
}

export default ServiceMenu