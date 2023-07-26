"use client"

import React from 'react'
import { drinks } from '../db/drinks'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const TopRatedDrinks = drinks


function TopDrinks() {
  return (
    <div>
      <h2 className='text-white text-2xl'>MOST RATED DRINKS</h2>
      

    </div>
  )
}

export default TopDrinks