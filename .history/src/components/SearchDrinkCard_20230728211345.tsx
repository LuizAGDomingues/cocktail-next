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
    <div className='flex flex-col justify-start text-white'>
      <Image src={imageURL} alt='Image of drink' width={270} height={181} className='rounded-md'/>
      <h3 className='text-white underline text-lg'>{name}</h3>
      <span className='text-white'>{glass}</span>
      <span className='text-white'>{category}</span>
      <span className='text-white'>{alcoholic}</span>
    </div>
  )
}

export default SearchDrinkCard