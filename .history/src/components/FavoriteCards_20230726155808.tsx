import Image from 'next/image'
import React from 'react'

const mock = {
  name: "Margarita",
  imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
}



function FavoriteCards() {
  return (
    <div className='mt-12 flex flex-col items-center justify-start gap-1'>
      <Image src={mock.imageURL} alt='Drink image' width={348} height={233} className='rounded-md'/>
      <span className='text-white text-base underline'>{mock.name}</span>
    </div>
  )
}

export default FavoriteCards