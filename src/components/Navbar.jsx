import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BsInboxes } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiMobileDownloadLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";






const Navbar = () => {
  return (
    <div className='bg-white h-16 w-full flex justify-around sm:justify-between items-center px-16'>
            <div className='flex justify-center items-center gap-3 mr-24 sm:mr-0 md:mr-0'>
                <p className='sm:hidden text-lg'><IoIosMenu /></p>
                <img className='w-20 h-8' src="/images/nav1.png" alt="" />
            </div>
            <div className='hidden sm:block'>
                <div className='flex justify-center items-center bg-gray-100 rounded-md'>
                    <p className='p-1 text-2xl'><CiSearch /></p>
                    <input className='focus:outline-none bg-gray-100 sm:w-[200px] md:w-[350px] lg:w-[500px]' type="text"placeholder='Search for Products, Brands and more' />
                </div>
            </div>
           
            <div className='flex justify-center items-center gap-1'>
                <span className='sm:hidden'><RiMobileDownloadLine /></span>
                <p ><IoMdContact /></p>
                <a href="#">Login</a>
                <p className='hover:rotate-180 hidden sm:block'> <IoIosArrowDown /></p>

            </div>
            <div className='flex justify-center items-center gap-1'>
                <p className='text-2xl'><BsCart2 /></p>
                <p className='hidden lg:block'>Cart</p>

            </div>
            <div className='hidden sm:block'> 
                <div className='flex justify-center items-center gap-1'>
                    <p><BsInboxes /></p>
                    <p className=' hidden lg:block'>Become a Seller</p>

                </div>

            </div>
            <div className='hidden sm:block'>
                <p><BsThreeDotsVertical /></p>
            </div>
           
        
    </div>
  )
}

export default Navbar
