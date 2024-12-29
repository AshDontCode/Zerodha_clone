import React from 'react'
import Hamburger from './ui/Hamburger'
import Navigation from './ui/Navigation'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow p-6'>
        <div className='flex justify-between  items-center container mx-auto w-3/4'>
          <div>
            <Link to={'/'} ><img src={logo} alt="" width={145}/></Link>
          </div>
          <div className='flex justify-center items-center'>
            <Navigation/>
            <Hamburger/>
          </div>
            
        </div>
    </header>
  )
}

export default Header