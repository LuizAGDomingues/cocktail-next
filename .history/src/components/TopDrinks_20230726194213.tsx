"use client"

import React from 'react'
import DrinkCard from './DrinkCard'
import { drinks } from '../db/drinks'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const TopRatedDrinks = drinks


function TopDrinks() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 32,
    },
  })

  return (
    <div>
      <h2 className='text-white text-2xl'>TOP RATED DRINKS</h2>
      <div ref={ref} className='keen-slider mt-12'>
        {TopRatedDrinks.map((drink) => {
          return (
            <DrinkCard 
              key={drink.name} 
              slide='keen-slider__slide' name={drink.name} imageURL={drink.imageURL} />
          )
        })}
      </div>
    </div>
  )
}

export default TopDrinks