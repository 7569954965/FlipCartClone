import React from 'react'

const Winter = () => {

    const data=[
        {
            id:1,
            src:'/images/winter/img1.webp',
            text:"Men's Jackets",
            offer:"Min. 50% Off"
        },
        {
            id:2,
            src:'/images/winter/img2.webp',
            text:"Men's Sweaters",
            offer:"Min. 50% Off"
        },
        {
            id:3,
            src:'/images/winter/img3.webp',
            text:"Men's Mufflers",
            offer:"Min. 50% Off"
        },
        {
            id:4,
            src:'/images/winter/img4.webp',
            text:"Men's Scarves ",
             offer:"Min. 50% Off"
        },
    ]






  return (
     <div className='lg:flex lg:gap-4'>
        <div className='bg-white w-full h-screen sm:h-56 lg:h-screen flex-col justify-center items-center overflow-x-hidden lg:w-2/5 m-3'>
            <h1 className=' px-4 font-medium text-xl text-gray-500'>Beauty, Food, Toys & more</h1>
                    <div className='bg-white w-full grid grid-cols-2 sm:flex lg:grid lg:grid-cols-2 justify-between items-center  gap-1'>
                        
                        {
                            data.map(({id,src,text,offer})=>(
                                <div
                                className='p-5 bg-white flex-col items-center border-2 border-gray-100 gap-10 sm:gap-0'
                                key={id}>
                                    <img className='w-40 h-40 ' src={src} alt="imges" />
                                    <span className='font-medium text-sm text-gray-500 py-2 pt-2'>{text}</span>
                                    <p className='text-green-600 text-sm font-medium'>{offer}</p>
                                </div>
                            ))
                        }
                    </div>
                    
        </div> 
        <div className='hidden lg:block w-3/5'>
                <img  className='h-screen w-full ' src="/images/winter/img10.jpeg" alt="" />
           </div>
     </div>

  )
}

export default Winter
