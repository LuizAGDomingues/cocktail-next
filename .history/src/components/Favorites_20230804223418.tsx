"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import InitialDrinkCard from './InitialDrinkCard'

interface FavoritesProps {
  hasCookiesFavorites: boolean
  favoriteData: {strDrinkThumb: string, strDrink: string, drinkId: string}[] | ""
}

function Favorites({hasCookiesFavorites, favoriteData}: FavoritesProps) {

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 32,
    },
    breakpoints: {
      '(min-width: 768px)': {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      '(min-width: 1024px)': {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 5,
          spacing: 32,
        },
      },
    },
  })

  if(favoriteData === "") {
    return(
      <div>
        <h2 className='text-white text-2xl mb-24'>YOUR FAVORITES</h2>
      </div>
    )
  }

  return (
    <div>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
      {hasCookiesFavorites && 
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