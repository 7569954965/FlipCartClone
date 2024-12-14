import React from 'react'

const Electronics = () => {

    const data=[
        {
            id:1,
            src:'/images/elc/elc1.webp',
            text:'Smartwatches'
        },
        {
            id:2,
            src:'/images/elc/elc2.webp',
            text:'MobileSpeakers'
        },
        {
            id:3,
            src:'/images/elc/elc3.webp',
            text:'WirelessHeadphones'
        },
        {
            id:4,
            src:'/images/elc/elc4.webp',
            text:'Monitors   '
        },
        {
            id:5,
            src:'/images/elc/elc5.webp',
            text:'Projector'
        },
        {
            id:6,
            src:'/images/elc/elc6.webp',
            text:'boAtSmartwatches'
        },
        {
            id:7,
            src:'/images/elc/elc7.webp',
            text:'Monitor'
        },
        {
            id:8,
            src:'/images/elc/elc8.webp',
            text:'Printers'
        },
       

    ]

  return (
    <div className='flex'>
         <div className='bg-white w-full h-screen sm:h-56 flex-col justify-center items-center overflow-x-hidden sm:m-4 pt-4 lg:max-w-screen-lg'>
            <h1 className=' px-4 pb-3 font-medium text-xl text-gray-500'>Basic of Electronics</h1>
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
           <div className='hidden lg:block'>
                <img  className='h-56' src="/images/elc/elc9.webp" alt="" />
           </div>

    </div>
   
    
  )
}

export default Electronics
