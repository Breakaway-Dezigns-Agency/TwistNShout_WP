import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StaticImage } from 'gatsby-plugin-image'


const ImageSlider = ()=>{
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }
  return(
    <Slider {...settings}>
      <div className='slider-slide'>
        <StaticImage
          src='../../static/images/slidePlaceholder.jpg'
          alt='placeholder'
          height={450}
          width={450}
          layout='constrained'
        />
      </div>
      <div className='slider-slide'>
        <StaticImage
          src='../../static/images/slidePlaceholder.jpg'
          alt='placeholder'
          height={450}
          width={450}
          layout='constrained'
        />
      </div>
      <div className='slider-slide'>
        <StaticImage
          src='../../static/images/slidePlaceholder.jpg'
          alt='placeholder'
          height={450}
          width={450}
          layout='constrained'
        />
      </div>
      <div className='slider-slide'>
        <StaticImage
          src='../../static/images/slidePlaceholder.jpg'
          alt='placeholder'
          height={450}
          width={450}
          layout='constrained'
        />
      </div>
    </Slider>
  )
}

export default ImageSlider