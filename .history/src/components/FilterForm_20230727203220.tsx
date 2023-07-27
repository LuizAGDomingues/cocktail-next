"use client"

import React from 'react'
import { CaretDown } from "@phosphor-icons/react";

function FilterForm() {
  return (
    <form>
      <h3 className="text-white text-xl mt-12">FILTERS</h3>
      <div className="mt-6">
        <label htmlFor="category" className="text-white text-center font-sans text-sm">Category</label>
        <div className='relative'>
          <input type="text" name="category" id="category" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Cocktail"  />
          <CaretDown type='submit' size={28} className='absolute right-3 top- flex-shrink-0 cursor-pointer'/>
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="alcoholic" className="text-white text-center font-sans text-sm">Alcoholic</label>
        <input type="text" name="alcoholic" id="alcoholic" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Alcoholic"/>
      </div>
      <div className="mt-3">
        <label htmlFor="glass" className="text-white text-center font-sans text-sm">Glass</label>
        <input type="text" name="glass" id="glass" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Martini Glass"/>
      </div>
    </form>
  )
}

export default FilterForm