import Image from 'next/image'
import React from 'react'

interface FavoriteCardsProps {
  slide: string
  name: string
  imageURL: string
}

function FavoriteCards({ slide, name, imageURL }: FavoriteCardsProps) {
  return (
    <div className={slide}>
      <Image src={imageURL} alt='Drink image' width={348} height={233} className='rounded-md'/>
      <span className='text-white text-xl underline'>{name}</span>
    </div>
  )
}

export default FavoriteCards