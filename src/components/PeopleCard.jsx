import React from 'react'
import { ChevronDown } from 'lucide-react'

const PeopleCard = ({profileImage, name, designation}) => {
  return (
    <div>
        <div className='p-5 text-center'>
            <div className='border inline-block rounded-full overflow-hidden'>
                <img src={profileImage} alt="" width={200}  />
            </div>
            <h4 className='text-[#424242] font-semibold text-xl my-2'>{name}</h4>
            <p className='text-[#666] my-2'>{designation}</p>
            <p className='flex items-center justify-center text-[#666]'>Bio <ChevronDown size={20} color="#2e2e2e" strokeWidth={0.75} className='mt-1 ml-2' /></p>
        </div>
    </div>
  )
}

export default PeopleCard