import React from 'react'

const mock = {
  name: "Margarita",
  imageURL: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
}

function Favorites() {
  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      <FavoriteCards />
    </div>
  )
}

export default Favorites