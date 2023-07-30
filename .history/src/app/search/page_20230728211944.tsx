import FilterForm from "@/components/FilterForm";
import HeaderSearch from "@/components/HeaderSearch";
import SearchDrinkCard from "@/components/SearchDrinkCard";
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'


export default function Search() {
  const [drinkData, setDrinkData] = useState<any>()
  const router = useRouter()
  const { drink } = router.query

  useEffect(() => {
    if(!drink || drink === undefined) {
      return
    }
    async function fetchDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const data = await response.json()
        setDrinkData(data.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDrinks()
  }, [drink])

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <FilterForm />
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black ml-20"/>
        <div className="grid grid-cols-3 gap-">
          {!drinkData ? <span>Loading...</span> :
            drinkData.map((drinkElement: any) => {
              return (
                <SearchDrinkCard imageURL={drinkElement.strDrinkThumb} name={drinkElement.strDrink} glass={drinkElement.strGlass} category={drinkElement.strCategory} alcoholic={drinkElement.strAlcoholic} key={drinkElement.idDrink} id={drinkElement.idDrink} />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}