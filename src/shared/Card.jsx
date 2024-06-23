import React from 'react'

const Card = ({children, imgSrc}) => {
  return (
    <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group' >
      <img src={imgSrc} alt=""
      className='transition-transform group-hover:scale-110 duration-200'/>

      <div className='absolute inset-0 flex items-end bg-gradient-to-t from-teal-500/60 to-transparent'>
        <div className='p-4 text-black'>{children}</div>
      </div>
    </div>
  )
}

export default Card
