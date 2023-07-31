import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'


export default function Drink({ params }: { params: { drinkId: string } }) {
  const [drinkData, setDrinkData] = useState<any>()


  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const data = await response.json()
        setDrinkData(data.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    if (!drink || drink.trim() === '') {
      return;
    } else {
      fetchDrinks();
    }
  }, [drink])

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
    </main>
  )
}