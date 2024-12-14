import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-10 text-white md:flex justify-around pl-4 md:pl-0'>
            <div>
            <h1 className='font-bold text-gray-500'>Company</h1>
            <p className='w-10 border-b-2 border-red-700 pt-1'></p>
            <ul className=' pt-3'>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
                <li>Affiliate Program</li>
            </ul>
            </div>
            <div>
                <h1 className='font-bold text-gray-500'>Group Companies</h1>
                <p className='w-10 border-b-2 border-red-700 pt-1'></p>
                <ul className=' pt-3'>
                    <li>Myntra</li>
                    <li>Cleartrip</li>
                    <li>Shopsy</li>
                </ul>
            </div>
            <div>
            <h1 className='font-bold text-gray-500'>Get Help</h1>
            <p className='w-10 border-b-2 border-red-700 pt-1'></p>
            <ul className=' pt-3'>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order status</li>
                <li>Payment Options</li>
            </ul>
            </div>
            <div>
            <h1 className='font-bold text-gray-500'>Consumer Policy</h1>
            <p className='w-10 border-b-2 border-red-700 pt-1'></p>
            <ul className=' pt-3'>
                <li>Cancellation & Returns</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
                
            </ul>
            </div>
            <div className='hidden md:block'>
              <p className='w-full h-52 border-l border-gray-400 pt-1'></p>

            </div>
            <div>
                <h1 className='font-bold text-gray-500'>Mail Us</h1>
                <p className='w-10 border-b-2 border-red-700 pt-1'></p>
                <ul className=' pt-3'>
                    <li>FlipCart Internet Private Limited,</li>
                    <li>Building Alyssa,Begonia &</li>
                    <li>Clove Embassy Tech Village,</li>
                    <li>Hyderabad</li>
                    <li>Telangana</li>
                    
                </ul>
            </div>
  </div>
  )
}

export default Footer
