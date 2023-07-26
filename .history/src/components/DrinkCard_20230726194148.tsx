import Image from 'next/image'
import React from 'react'

interface DrinkCardProps {
  slide: string
  name: string
  imageURL: string
  description?: string
}

function DrinkCard({ slide, name, imageURL, description }: DrinkCardProps) {
  return (
    <div className={slide}>
      <Image src={imageURL} alt='Drink image' width={348} height={233} className='rounded-md'/>
      <span className='text-white text-xl underline'>{name}</span>
      {description && <span className='text-white text-sm'>{description}</span>}
    </div>
  )
}

export default DrinkCard