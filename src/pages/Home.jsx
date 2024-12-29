import Landing from '@/components/Landing'
import React from 'react'
import ecosystem from '../assets/ecosystem.png'
import { MoveRight } from 'lucide-react'
import pressLogos from '../assets/press-logos.png'
import princingEq from '../assets/pricing-eq.svg'
import otherTrades from '../assets/other-trades.svg'
import UnbeatablePricing from '@/components/UnbeatablePricing'

import indexEducation from '../assets/index-education.svg'
import Button from '@/components/ui/Button'

const unbeatable_pricing_content = [
  {
    img:princingEq,
    description: "Free account opening"
  },
  {
    img:princingEq,
    description: "Free equity delivery and direct mutual funds"
  },
  {
    img:otherTrades,
    description: "Intraday and F&O"
  }
]

const Home = () => {
  return (
    <div id='landing' className='w-3/4 container mx-auto'>
      <Landing/>
      <div id="ecosystem" className='flex flex-col md:flex-row justify-center items-center flex-wrap'>
        <div id="ecosystem-left" className='md:w-1/3 flex flex-col gap-5 justify-center'>
            <h1 className='text-4xl p-4  text-[#424242] font-medium text-nowrap'>Trust with Confidence</h1>
            <div className='m-2'>
              <h3 className='font-semibold text-[#424242] text-[25px]'>Customer-first always</h3>
              <p className='text-[#666] text-[18px] mt-2'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div className='m-2'>
              <h3 className='font-semibold text-[#424242] text-[25px]'>No spam or gimmicks</h3>
              <p className='text-[#666] text-[18px] mt-2'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div className='m-2'>
              <h3 className='font-semibold text-[#424242] text-[25px]'>The Zerodha universe</h3>
              <p className='text-[#666] text-[18px] mt-2'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className='m-2'>
              <h3 className='font-semibold text-[#424242] text-[25px]'>Do better with money
              </h3>
              <p className='text-[#666] text-[18px] mt-2'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>

        </div>
        <div id="ecosystem-right" className='md:w-4/6 p-4 text-center flex flex-col justify-between items-center'>
          <img src={ecosystem} alt="" className='w' style={{width:"85%"}}/>
          <div className='flex gap-4 my-3'>
            <p className='text-zerodhaBlueColor hover:scale-105 mx-3 hover:text-[#424242] font-semibold text-base'>Explore our Products <MoveRight className='inline-block' /></p>
            <p className='text-zerodhaBlueColor hover:scale-105 mx-3 hover:text-[#424242] font-semibold text-base'>Try Kite demo <MoveRight className='inline-block'/></p>
          </div>
        </div>
        <div className='p-12'>
          <img src={pressLogos} alt="" />
        </div>
      </div>


      <section id='unbeatable_pricing'>
        <div className='flex flex-col md:flex-row justify-between items-center flex-wrap my-16'>
          <div id="unbeatable_left" className=' w-2/5 p-4'>
              <h1 className='text-4xl text-[#424242] font-medium text-nowrap mb-5' >Unbeatable pricing</h1>
              <p className='text-[#666] text-[18px] mb-5 ' >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <span className='text-zerodhaBlueColor hover:scale-105 hover:text-[#424242] font-semibold text-base'>See Pricing <MoveRight className='inline-block' /></span>

          </div>
          <div id="unbeatable_right" className='w-3/5 p-4 flex flex-col md:flex-row justify-between items-center '>

          {unbeatable_pricing_content.map((item, index)=>{
             return <UnbeatablePricing key={index} image={item.img} desc={item.description}/>
          })}
  
          </div>
        </div>
      </section>


      <section>
        <div className='flex flex-col md:flex-row  items-center my-40'>
          <div className='w-1/2'>
            <img src={indexEducation} alt="" />
          </div>

          <div className='w-1/2'>
            <h1 className='text-4xl  text-[#424242] font-medium text-nowrap mb-6' >Free and open market education</h1>
            <p className='text-[#666] text-[18px] mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <p className='text-zerodhaBlueColor  hover:text-[#424242] font-semibold text-base my-8'>Varsity <MoveRight className='inline-block' /></p>
            <p className='text-[#666] text-[18px] mt-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <p className='text-zerodhaBlueColor hover:text-[#424242] font-semibold text-base my-8'>TradingQ&A <MoveRight className='inline-block' /></p>
          </div>
        </div>
      </section>


      <section id="bottom">
        <div className='text-center p-4 mt-40 mb-24'>
          <h1 className='text-4xl  text-[#424242] font-medium text-nowrap mb-6'>Open a Zerodha account</h1>
          <p className='text-[#666] text-[18px] mt-2 mb-8'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <Button title={"Sign up for free"}/>
        </div>
      </section>
    </div>
  )
}

export default Home