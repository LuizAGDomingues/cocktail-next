import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'


export default function Drink({ params }: { params: { drinkId: string } }) {
  const [drinkData, setDrinkData] = useState<any>()

  const dr = []

  /* useEffect(() => {
    async function fetchDrink() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.drinkId}`)
        const data = await response.json()
        setDrinkData(data.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    if (!params.drinkId || params.drinkId.trim() === '') {
      return;
    } else {
      fetchDrink();
    }
  }, [params.drinkId]) */

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
    </main>
  )
}