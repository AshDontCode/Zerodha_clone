import React from 'react'

const UnbeatablePricing = ({image, desc}) => {
    // if (!image || !desc) return null;
  return (
    <div className='flex items-end -space-x-4'>

            <img src={image} alt="" width={145} />
            <span className='text-wrap text-[#424242] text-sm max-w-40'>{desc}</span>
    </div>
  )
}

export default UnbeatablePricing