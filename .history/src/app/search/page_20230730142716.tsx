"use client"

import FilterForm from "@/components/FilterForm";
import HeaderSearch from "@/components/HeaderSearch";
import SearchDrinkCard from "@/components/SearchDrinkCard";
import { paginate } from "@/lib/utils";
import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'


export default function Search() {
  const [drinkData, setDrinkData] = useState<any>()
  const [filteredDrinkData, setFilteredDrinkData] = useState<any>()
  const [paginateDrinkData, setPaginateDrinkData] = useState<any>()
  const [page, setPage] = useState<number>(1)

  const drinkParam = useSearchParams()
  const drink = drinkParam.get('drink')

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

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

  useEffect(() => {
    if(!filteredDrinkData) {
      setPaginateDrinkData(paginate(drinkData, 8, page))
    } else {
      setPaginateDrinkData(paginate(filteredDrinkData, 8, page))
    }
  }, [drinkData, filteredDrinkData, page])

  const handleFilter = (values: { selectCategory: string; selectAlcoholic: string; selectGlass: string }) => {
    const filteredData = drinkData.filter((drink: any) => {
      const categoryMatch = values.selectCategory === '' || drink.strCategory === values.selectCategory;
      const alcoholicMatch = values.selectAlcoholic === '' || drink.strAlcoholic === values.selectAlcoholic;
      const glassMatch = values.selectGlass === '' || drink.strGlass === values.selectGlass;

      return categoryMatch && alcoholicMatch && glassMatch;
    });

    setFilteredDrinkData(filteredData);
  }

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <div className="flex flex-col justify-start gap-8">
          <FilterForm onChange={handleFilter} />
          {filteredDrinkData && <button className="bg-red-700 py-3 px-6 max-w-fit rounded-md text-white font-sans">Cancel filter</button>}
        </div>
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black ml-20"/>
        <div className="grid grid-cols-4 gap-10 ml-28">
          {!paginateDrinkData ? <span>Loading...</span> :
            paginateDrinkData.map((drinkElement: any) => {
              return (
                <SearchDrinkCard imageURL={drinkElement.strDrinkThumb} name={drinkElement.strDrink} glass={drinkElement.strGlass} category={drinkElement.strCategory} alcoholic={drinkElement.strAlcoholic} key={drinkElement.idDrink} id={drinkElement.idDrink} />
              )
            })
          }
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center gap-20">
        {page > 1 && <button onClick={previousPage} className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>Previous Page</button>}
        {(paginateDrinkData && paginateDrinkData.length === 8) && <button onClick={nextPage} className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>Next Page</button>} 
      </div>
    </main>
  )
}