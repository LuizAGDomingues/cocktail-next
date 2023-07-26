import Image from 'next/image'
import React from 'react'

interface FavoriteCardsProps {
  name: String
  imageURL: String
}

function FavoriteCards({ name, imageURL }: FavoriteCardsProps) {
  const image = imageURL
  return (
    <div className='mt-12'>
      <Image src={image} alt='Drink image' width={348} height={233} className='rounded-md'/>
      <span className='text-white text-xl underline'>{name}</span>
    </div>
  )
}

export default FavoriteCards