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


  return (
    <div>
      <h3 className="text-white text-xl mt-12">FILTERS</h3>
      <div className='mt-6 text-white font-sans'>
        <span>Category</span>
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue className="" placeholder="Cocktail" />
          </SelectTrigger>
          <SelectContent className='font-sans'>
            <SelectGroup>
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
            <SelectValue placeholder="Alcoholic" />
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
            <SelectValue placeholder="Martini Glass" />
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