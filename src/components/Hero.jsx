import React from 'react'

const Hero = () => {
    const data=[
        {
            id:1,
            src:'/images/img1.webp',
            text:'Grocery'
        },
        {
            id:2,
            src:'/images/img2.webp',
            text:'Mobiles'
        },
        {
            id:3,
            src:'/images/img3.webp',
            text:'Fashion'
        },
        {
            id:4,
            src:'/images/img4.webp',
            text:'Electronics'
        },
        {
            id:5,
            src:'/images/img5.webp',
            text:'Home & Furniture'
        },
        {
            id:6,
            src:'/images/img6.webp',
            text:'Appliances'
        },
        {
            id:7,
            src:'/images/img7.webp',
            text:'Flight Boookings'
        },
        {
            id:8,
            src:'/images/img8.webp',
            text:'Beauty, Toys & More'
        },
        {
            id:9,
            src:'/images/img9.webp',
            text:'Two wheelers'
        },

    ]
  return (
        <div className='bg-white w-full h-28 sm:m-4 md:my-3 px-4 md:py-4  overflow-clip '>
           <div className='flex space-x-10 justify-around md:justify-center overflow-x-scroll lg:overflow-hidden items-center'>
                 {
                        data.map(({id,src,text})=>(
                            <div
                            key={id}>
                                <img className='w-14 h-14 md:w-12 md:h-12 md:mr-5' src={src} alt="imges" />
                                <p className='font-medium text-sm text-gray-400'>{text}</p>
                            </div>
                        ))
                    }
           </div>
        </div>
      
  
  )
}

export default Hero
