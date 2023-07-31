import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'


export default function Drink({ params }: { params: { drinkId: string } }) {
  const [drinkData, setDrinkData] = useState<any>()

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${drink}`)
        const data = await response.json()
        setDrinkData(data.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    if (!params.drinkId || params.drinkId.trim() === '') {
      return;
    } else {
      fetchDrinks();
    }
  }, [params.drinkId])

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
    </main>
  )
}