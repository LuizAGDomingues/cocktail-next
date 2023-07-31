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
    if(!filteredDrinkData || filteredDrinkData === null) {
      setPaginateDrinkData(paginate(drinkData, 8, page))
    } else {
      setPaginateDrinkData(paginate(filteredDrinkData, 8, page))
    }
  }, [drinkData, filteredDrinkData, page])

  const handleFilter = (values: { selectCategory: string; selectAlcoholic: string; selectGlass: string }) => {
    console.log('handlefilterform')
    const filteredData = drinkData.filter((drink: any) => {
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
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      
    </main>
  )
}