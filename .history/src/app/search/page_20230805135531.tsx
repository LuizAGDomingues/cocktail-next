"use client"

import FilterForm from "@/components/FilterForm";
import HeaderSearch from "@/components/HeaderSearch";
import SearchDrinkCard from "@/components/SearchDrinkCard";
import { paginate } from "@/lib/utils";
import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import { Drink } from "@/lib/types";


export default function Search() {
  const [drinkData, setDrinkData] = useState<Drink[] | null>()
  const [filteredDrinkData, setFilteredDrinkData] = useState<Drink[] | null>()
  const [paginateDrinkData, setPaginateDrinkData] = useState<Drink[] | null>()
  const [page, setPage] = useState<number>(1)
  const [error, setError] = useState(false)

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
        if(data.drinks === null) {
          setError(true)
        } else {
          setError(false)
          setDrinkData(data.drinks)
        }
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
    if(!filteredDrinkData || filteredDrinkData === null) {
      setPaginateDrinkData(paginate(drinkData!, 8, page))
    } else {
      setPaginateDrinkData(paginate(filteredDrinkData, 8, page))
    }
    if(error) {
      
    }
  }, [drinkData, filteredDrinkData, page, error])

  const handleFilter = (values: { selectCategory: string; selectAlcoholic: string; selectGlass: string }) => {
    console.log('handlefilterform')
    const filteredData = drinkData!.filter((drink: Drink) => {
      const categoryMatch = values.selectCategory === '' || drink.strCategory === values.selectCategory;
      const alcoholicMatch = values.selectAlcoholic === '' || drink.strAlcoholic === values.selectAlcoholic;
      const glassMatch = values.selectGlass === '' || drink.strGlass === values.selectGlass;

      return categoryMatch && alcoholicMatch && glassMatch;
    });

    setFilteredDrinkData(filteredData);
  }

  const handleCancelFilter = () => {
    setFilteredDrinkData(null)
  }

  return (
    <main className="w-full h-screen px-4 py-2 md:px-8 md:py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-xl md:text-2xl mt-36">RELATED DRINKS</h2>
      <div className="md:flex">
        <div className="flex flex-col justify-start gap-8">
          <FilterForm onChange={handleFilter} />
          {filteredDrinkData && <button onClick={handleCancelFilter} className="bg-red-700 py-2 px-4 md:py-3 md:px-6 max-w-fit rounded-md text-white font-sans">Cancel filter</button>}
        </div>
        <div className="hidden md:block w-[1px] h-[40rem] flex-shrink-0 bg-black ml-20"/>
        {error ? <span className="text-xl md:text-2xl text-red-700 underline ml-28">Sorry 😔, an error occurred in the catalog. Try again with another drink or inform us.</span> :
          <div className="grid grid-cols-1 md:grid-cols-4 lg: gap-10 ml-12 md:ml-28">
            {!paginateDrinkData ? <span className="text-xl md:text-2xl text-gray-500 underline md:ml-5">Loading...</span> : 
            !paginateDrinkData[0].idDrink ? <span className="text-xl md:text-2xl text-red-700 underline md:ml-5">Sorry 😔, we do not have this drink in the catalog</span> :
            paginateDrinkData.map((drinkElement: Drink) => {
              return (
                <SearchDrinkCard imageURL={drinkElement.strDrinkThumb} name={drinkElement.strDrink} glass={drinkElement.strGlass} category={drinkElement.strCategory} alcoholic={drinkElement.strAlcoholic} key={drinkElement.idDrink} id={drinkElement.idDrink} />
              )
            })
            }
          </div>
        }
      </div>
      <div className="mt-12 flex items-center justify-center gap-20">
        {page > 1 && <button onClick={previousPage} className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>Previous Page</button>}
        {(paginateDrinkData && paginateDrinkData.length === 8) && <button onClick={nextPage} className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>Next Page</button>} 
      </div>
    </main>
  )
}