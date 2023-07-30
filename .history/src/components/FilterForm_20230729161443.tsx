"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from 'react'

function FilterForm() {
  const [selectCategory, setSelectCategory] = useState('');
  const [selectAlcoholic, setSelectAlcoholic] = useState('');
  const [selectGlass, setSelectGlass] = useState('');
  const [categoryData, setCategoryData] = useState<any>()
  const [alcoholicData, setAlcoholicData] = useState<any>()
  const [glassData, setGlassData] = useState<any>()

  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        const cData = await response.json()
        setCategoryData(cData.drinks)
      } catch (error) {
        console.error(error)
      }
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
        const aData = await response.json()
        setAlcoholicData(aData.drinks)
      } catch (error) {
        console.error(error)
      }
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
        const gData = await response.json()
        setGlassData(gData.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFilters()
  }, [])

  const handleSelectCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCategory(event.target.value);
    console.log(selectCategory);
  };
  const handleSelectAlcoholicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectAlcoholic(event.target.value);
    console.log(selectAlcoholic);
  };
  const handleSelectGlassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectGlass(event.target.value);
    console.log(selectGlass);
  };


  return (
    <div>
      <h3 className="text-white text-xl mt-12">FILTERS</h3>
      <div className='mt-6 text-white font-sans'>
        <span>Category</span>
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Cocktail"/>
          </SelectTrigger>
          <SelectContent className='font-sans'>
            <SelectGroup onChange={handleSelectCategoryChange}>
              <SelectLabel>Category</SelectLabel>
              {!categoryData ? <SelectItem value="">Failed to load categories</SelectItem> :
              categoryData.map((category: any) => {
                return (
                  <SelectItem key={category.strCategory} value={category.strCategory}>{category.strCategory}</SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='mt-6 text-white font-sans'>
        <span>Alcoholic</span>
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Alcoholic" onChange={handleSelectAlcoholicChange} />
          </SelectTrigger>
          <SelectContent className='font-sans'>
            <SelectGroup>
              <SelectLabel>Alcoholic</SelectLabel>
              {!alcoholicData ? <SelectItem value="">Failed to load alcoholics</SelectItem> :
              alcoholicData.map((alcoholic: any) => {
                return (
                  <SelectItem key={alcoholic.strAlcoholic} value={alcoholic.strAlcoholic}>{alcoholic.strAlcoholic}</SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='mt-6 text-white font-sans'>
        <span>Glass</span>
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Martini Glass" onChange={handleSelectGlassChange} />
          </SelectTrigger>
          <SelectContent className='font-sans'>
            <SelectGroup>
              <SelectLabel>Glass</SelectLabel>
              {!glassData ? <SelectItem value="">Failed to load glasses</SelectItem> :
              glassData.map((glass: any) => {
                return (
                  <SelectItem key={glass.strGlass} value={glass.strGlass}>{glass.strGlass}</SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default FilterForm