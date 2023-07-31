import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <Link>
        <Image src={imageURL} alt='Image of drink' width={270} height={181} className='rounded-md'/>
      </Link>
      <h3 className='underline text-2xl'>{name}</h3>
      <span className='text-lg'>{glass}</span>
      <span className='text-lg'>{category}</span>
      <span className='text-lg'>{alcoholic}</span>
    </div>
  )
}

export default SearchDrinkCard