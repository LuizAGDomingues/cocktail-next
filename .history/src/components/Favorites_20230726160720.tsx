import React from 'react'
import FavoriteCards from './FavoriteCards'

const mock = [{}]

function Favorites() {
  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      <FavoriteCards name={mock.name} imageURL={mock.imageURL} />
    </div>
  )
}

export default Favorites