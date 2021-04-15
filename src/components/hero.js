import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ()=>{
  return(
    <section className={`hero-wrapper grid grid-cols-3 gap-4`}>
      <div className={`flex flex-wrap content-end md:content-start`}>
        <div className={`category-wrap`}>
          <span className={`shadow-lg bg-yellow`}>Category</span>
        </div>
        <div className={`title-wrap uppercase`}>
          <h1 className={`text-yellow tracking-wide`}>This is my Title</h1>
          <h3 className={`text-yellow tracking-wide`}>This is my Sub-Title</h3>
        </div>
      </div>
      <div className={`image-wrap col-span-2 grid justify-items-end`}>
        <StaticImage
          src='../../static/images/heroPlaceholder.jpg'
          alt='placeholder'
          height={450}
          layout='fixed'
          className='rounded-lg shadow-lg'
        />
      </div>
    </section>
  )
}

export default Hero