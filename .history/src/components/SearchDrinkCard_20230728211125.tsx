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
    <div>
      <Image src={imageURL} alt='Image of drink' />
      <h3></h3>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default SearchDrinkCard