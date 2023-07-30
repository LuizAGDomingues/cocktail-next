import React from 'react'
import Image from 'next/image'

interface SearchDrinkCardProps {
  id: string
  imageURL: string
  name: string
  glass: string
  category: string
  alcoholic: string
}

function SearchDrinkCard({id, imageURL, name, glass, category, alcoholic }: SearchDrinkCardProps) {
  return (
    <div className='flex flex-col justify-start gap-1 text-white'>
      <Image src={imageURL} alt='Image of drink' width={270} height={181} className='rounded-md'/>
      <h3 className='underline text-'>{name}</h3>
      <span>{glass}</span>
      <span>{category}</span>
      <span>{alcoholic}</span>
    </div>
  )
}

export default SearchDrinkCard