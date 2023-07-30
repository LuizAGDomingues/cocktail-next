import React from 'react'
import Image from 'next/image'

interface SearchDrinkCardProps {
  imageURL: string
  name: string
  glass: string
  category: string
  alcoholic: string
}

function SearchDrinkCard({ imageURL, name, glass, category, alcoholic }: SearchDrinkCardProps) {
  return (
    <div className='flex flex-col justify-start'>
      <Image src={imageURL} alt='Image of drink' />
      <h3>{name}</h3>
      <span>{glass}</span>
      <span>{category}</span>
      <span>{alcoholic}</span>
    </div>
  )
}

export default SearchDrinkCard