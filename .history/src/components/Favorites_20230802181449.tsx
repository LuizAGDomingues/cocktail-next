"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import InitialDrinkCard from './InitialDrinkCard'
import { cookies } from 'next/headers';



function Favorites() {
  const favorites = cookies().get('favorites');
  const favoriteData = JSON.parse(favorites!.value)

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 32,
    },
  })

  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      <div ref={ref} className='keen-slider mt-12'>
        {favoriteData.map((drink: {}) => {
          return (
            <InitialDrinkCard key={drink.id} slide='keen-slider__slide' name={drink.name} imageURL={drink.imageURL} drinkId={drink.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Favorites