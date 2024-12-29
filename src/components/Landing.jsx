import React from 'react'
import landingImage from '../assets/landing.png'
import Button from './ui/Button'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-16 h-svh md:h-max text-center mb-32' >
        <div className='w-3/4 p-1 mt-2'>
        <img src={landingImage} alt="" className=''/>
        </div>
        <div>
        <h2 className='text-4xl md:text-5xl  text-[#424242] font-medium mb-4'>Invest in everything</h2>
        <p className='md:text-2xl text-[#666] '>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        </div>
        <Button title={"Sign up for free"}/>
      
    </div>
  )
}

export default Landing