import React from 'react'

const Beauty = () => {

    const data=[
        {
            id:1,
            src:'/images/Beauty/img1.webp',
            text:'Top Selling Stationery'
        },
        {
            id:2,
            src:'/images/Beauty/img2.webp',
            text:'Geared Cycles'
        },
        {
            id:3,
            src:'/images/Beauty/img3.webp',
            text:'Coffee Powder'
        },
        {
            id:4,
            src:'/images/Beauty/img4.webp',
            text:'Remote Control Toys'
        },
        {
            id:5,
            src:'/images/Beauty/img5.webp',
            text:'Soft Toys'
        },
        {
            id:6,
            src:'/images/Beauty/img6.webp',
            text:'Best of A Action Toys '
        },
        {
            id:7,
            src:'/images/Beauty/img7.webp',
            text:'Dry Fruits'
        },
        {
            id:8,
            src:'/images/Beauty/img8.webp',
            text:'Gym Essentials'
        },
       

    ]



  return (

    <div className='bg-white w-full h-screen sm:h-56 flex-col justify-center items-center overflow-x-hidden md:m-4'>
       <h1 className=' px-4 font-medium text-xl text-gray-500'>Beauty, Food, Toys & more</h1>
               <div className='bg-white w-full sm:flex justify-between items-center  sm:float-none  gap-1 overflow-x-scroll lg:overflow-hidden '>
                   
                   {
                       data.map(({id,src,text})=>(
                           <div
                           className=' p-2 sm:p-5 bg-white flex items-center sm:flex-col  border-2 border-gray-100 gap-10 sm:gap-0'
                           key={id}>
                               <img className='w-8 h-8  sm:w-16 sm:h-16  md:mr-5' src={src} alt="imges" />
                               <span className='font-medium text-sm text-gray-500 py-2 pt-2'>{text}</span>
                           </div>
                       ))
                   }
               </div>
      </div> 
     

  )
}

export default Beauty
