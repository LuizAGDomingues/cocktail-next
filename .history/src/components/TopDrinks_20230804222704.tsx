"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { topDrinks, topDrinksProps } from '../db/drinks'
import InitialDrinkCard from './InitialDrinkCard'

const TopRatedDrinks = topDrinks


function TopDrinks() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
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
      '(min-width: 768px)': {
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

  return (
    <div>
      <h2 className='text-white text-xl md:text-2xl'>TOP RATED DRINKS</h2>
      <div ref={ref} className='keen-slider mt-12'>
        {TopRatedDrinks.map((drink: topDrinksProps) => {
          return (
            <InitialDrinkCard 
              key={drink.name} 
              slide='keen-slider__slide' 
              drinkId={drink.drinkId}
              name={drink.name} 
              imageURL={drink.imageURL} 
              description={drink.description + drink.history}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TopDrinks