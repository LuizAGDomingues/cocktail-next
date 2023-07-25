"use client"

import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

function HeaderSearch() {
  return (
    <header className='flex items-center justify-between'>
      <ArrowCircleLeft size={32} color='white' />
      <form className='relative'>
        <input 
          type="text" 
          className='bg-[#E4E4E4] rounded-lg flex items-center px-4 py-2 w-[31.8125rem] text-black font-sans text-xl placeholder:text-gray-500' 
          placeholder='Negroni'
        />
        <MagnifyingGlass type='submit' size={28} className='absolute right-0' />
      </form>
      <button className='inline-flex px-8 py-4 items-center justify-center rounded-lg bg-[#675045] text-white font-sans text-base'>LOGIN</button>
    </header>
  )
}

export default HeaderSearch