import React from 'react'
import FavoriteCards from './FavoriteCards'

const mock = [
  {
    id: 1,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    id: 2,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    id: 3,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    id: 4,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    id: 5,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
  {
    id: 5,
    name: "Margarita",
    imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  },
]

function Favorites() {
  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      <FavoriteCards name={mock.name} imageURL={mock.imageURL} />
    </div>
  )
}

export default Favorites