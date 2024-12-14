import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

const Slider = () => {


  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}  className=' my-3 sm:m-4'>
                <div>
                    <img  src="/images/slide1.webp" />
                 
                </div>
                <div>
                    <img  src="/images/slide2.webp" />
                 
                </div>
                <div>
                    <img  src="/images/slide3.webp" />
                 
                </div>
                <div>
                    <img  src="/images/slide4.webp" />
                 
                </div>
                <div>
                    <img  src="/images/slide5.webp" />
                 
                </div>
                
    </Carousel>
  
  )
}

export default Slider
