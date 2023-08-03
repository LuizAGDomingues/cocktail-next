"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import InitialDrinkCard from './InitialDrinkCard'

interface Favori

function Favorites() {

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 32,
    },
  })

  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      {hasCookieName && 
        <div ref={ref} className='keen-slider mt-12'>
          {favoriteData.map((drink: {strDrinkThumb: string, strDrink: string, drinkId: string}) => {
            return (
              <InitialDrinkCard key={drink.drinkId} slide='keen-slider__slide' name={drink.strDrink} imageURL={drink.strDrinkThumb} drinkId={drink.drinkId} />
            )
          })}
        </div>
      }
    </div>
  )
}

export default Favorites