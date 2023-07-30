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
        setCategoryData(cData)
      } catch (error) {
        console.error(error)
      }
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
        const aData = await response.json()
        setAlcoholicData(aData)
      } catch (error) {
        console.error(error)
      }
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
        const gData = await response.json()
        setGlassData(gData)
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
            <SelectValue placeholder="Cocktail" />
          </SelectTrigger>
          <SelectContent className='font-sans'>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {!categoryData ? <SelectItem value="dark">Error</SelectItem> :
              categoryData.drinks.map((category: any) => {
                return (
                  <SelectItem key={category.strCategory} value={category.strCategory}>{category.strCategory}</SelectItem>
                )
              })}
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
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
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
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
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default FilterForm