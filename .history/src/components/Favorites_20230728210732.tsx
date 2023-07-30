"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import DrinkCard from './InitialDrinkCard'

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
        {mock.map((drink) => {
          return (
            <DrinkCard key={drink.id} slide='keen-slider__slide' name={drink.name} imageURL={drink.imageURL} />
          )
        })}
      </div>
    </div>
  )
}

export default Favorites