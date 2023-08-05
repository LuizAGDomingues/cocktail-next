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

interface FilterFormProps {
  onChange: (values: { selectCategory: string; selectAlcoholic: string; selectGlass: string }) => void;
}

function FilterForm(props: FilterFormProps) {
  const [selectCategory, setSelectCategory] = useState('');
  const [selectAlcoholic, setSelectAlcoholic] = useState('');
  const [selectGlass, setSelectGlass] = useState('');
  const [categoryData, setCategoryData] = useState<{strCategory: string}[]>()
  const [alcoholicData, setAlcoholicData] = useState<{strAlcoholic: string}[]>()
  const [glassData, setGlassData] = useState<{strGlass: string}[]>()

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

  useEffect(() => {
    if(selectCategory != '' || selectAlcoholic != '' || selectGlass != '') {
      props.onChange({ selectCategory, selectAlcoholic, selectGlass });
    }
  }, [selectAlcoholic, selectCategory, selectGlass])

  return (
    <div>
      <h3 className="text-white md:text-xl mt-12">FILTERS</h3>
      <div className="flex items-center gap-12 md:flex-col">
        <div className='mt-6 text-white font-sans'>
          <span>Category</span>
          <Select onValueChange={value => setSelectCategory(value)}>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Cocktail"/>
            </SelectTrigger>
            <SelectContent className='font-sans'>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                {!categoryData ? <SelectItem value="">Failed to load categories</SelectItem> :
                categoryData.map((category: {strCategory: string}) => {
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
          <Select onValueChange={value => setSelectAlcoholic(value)}>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Alcoholic" />
            </SelectTrigger>
            <SelectContent className='font-sans'>
              <SelectGroup>
                <SelectLabel>Alcoholic</SelectLabel>
                {!alcoholicData ? <SelectItem value="">Failed to load alcoholics</SelectItem> :
                alcoholicData.map((alcoholic: {strAlcoholic: string}) => {
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
          <Select onValueChange={value => setSelectGlass(value)}>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Martini Glass" />
            </SelectTrigger>
            <SelectContent className='font-sans'>
              <SelectGroup>
                <SelectLabel>Glass</SelectLabel>
                {!glassData ? <SelectItem value="">Failed to load glasses</SelectItem> :
                glassData.map((glass: {strGlass: string}) => {
                  return (
                    <SelectItem key={glass.strGlass} value={glass.strGlass}>{glass.strGlass}</SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default FilterForm