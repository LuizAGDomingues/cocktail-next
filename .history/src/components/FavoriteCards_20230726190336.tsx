import Image from 'next/image'
import React from 'react'

interface FavoriteCardsProps {
  class: string
  name: string
  imageURL: string
}

function FavoriteCards({ class, name, imageURL }: FavoriteCardsProps) {
  return (
    <div className='class'>
      <Image src={imageURL} alt='Drink image' width={348} height={233} className='rounded-md'/>
      <span className='text-white text-xl underline'>{name}</span>
    </div>
  )
}

export default FavoriteCards