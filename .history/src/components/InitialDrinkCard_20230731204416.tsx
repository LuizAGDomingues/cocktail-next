import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface InitialDrinkCardProps {
  slide: string
  drinkId?: string
  name: string
  imageURL: string
  description?: string
}

function InitialDrinkCard({ slide, name, imageURL, description }: InitialDrinkCardProps) {
  return (
    <div className={slide}>
      <Link  >
        <Image src={imageURL} alt='Drink image' width={348} height={233} className='rounded-md'/>
      </Link>
      <span className='text-white text-xl underline'>{name}</span>
      {description && <span className='text-white mt-1'><br/>{description}</span>}
    </div>
  )
}

export default InitialDrinkCard