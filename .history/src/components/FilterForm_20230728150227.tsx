"use client"

import React from 'react'
import { CaretDown } from "@phosphor-icons/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function FilterForm() {
  return (
    <div>
      <h3 className="text-white text-xl mt-12">FILTERS</h3>
      <div className='mt-6 text-white'>
        <span>Category</span>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>



      {/* <form>
      <h3 className="text-white text-xl mt-12">FILTERS</h3>
      <div className="mt-6">
        <label htmlFor="category" className="text-white text-center font-sans text-sm">Category</label>
        <div className='relative'>
          <input type="text" name="category" id="category" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Cocktail"  />
          <CaretDown type='submit' size={28} className='absolute right-2 top-[7px] flex-shrink-0 cursor-pointer'/>
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="alcoholic" className="text-white text-center font-sans text-sm">Alcoholic</label>
        <div className='relative'>
          <input type="text" name="alcoholic" id="alcoholic" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Alcoholic"/>
          <CaretDown type='submit' size={28} className='absolute right-2 top-[7px] flex-shrink-0 cursor-pointer'/>
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="glass" className="text-white text-center font-sans text-sm">Glass</label>
        <div className="relative">
          <input type="text" name="glass" id="glass" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Martini Glass"/>
          <CaretDown type='submit' size={28} className='absolute right-2 top-[7px] flex-shrink-0 cursor-pointer'/>
        </div>
      </div>
    </form> */}
    </div>










    
  )
}

export default FilterForm