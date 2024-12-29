import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <ul className='flex justify-center items-center'>
        <li className='mx-6 text-[#636262] font-normal text-[18px] hover:text-zerodhaBlueColor hover:cursor-pointer'><Link to={'/signup'}>Signup</Link></li>
        <li className='mx-6 text-[#636262] font-normal text-[18px] hover:text-zerodhaBlueColor hover:cursor-pointer'><Link to={'/about'}>About</Link></li>
        <li className='mx-6 text-[#636262] font-normal text-[18px] hover:text-zerodhaBlueColor hover:cursor-pointer'><Link to={'/products'}>Product</Link></li>
        <li className='mx-6 text-[#636262] font-normal text-[18px] hover:text-zerodhaBlueColor hover:cursor-pointer'><Link to={'/pricing'}>Pricing</Link></li>
        <li className='mx-6 text-[#636262] font-normal text-[18px] hover:text-zerodhaBlueColor hover:cursor-pointer'><Link to={'/support'}>Support</Link></li>

        </ul>
    </div>
  )
}

export default Navigation