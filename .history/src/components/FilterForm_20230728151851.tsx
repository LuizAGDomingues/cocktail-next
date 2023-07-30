"use client"

import React, { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select"

function FilterForm() {
  const [categoryData, setCategoryData] = useState(null)
  const [alcoholicData, setAlcoholicData] = useState(null)
  const [glassData, setGlassData] = useState(null)

  useEffect(() => {
    async function fetchFilters() {
      const [] = await Promise.all()
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
              <SelectItem value="light">Light</SelectItem>
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