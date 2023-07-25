"use client"

import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

function HeaderSearch() {
  return (
    <header className='flex items-center justify-between'>
      <Link href='/'>
        <ArrowCircleLeft size={36} color='white' />
      </Link>
      <form className='relative'>
        <input 
          type="text" 
          className='bg-[#E4E4E4] rounded-lg flex items-center px-3 py-2 w-[31.8125rem] text-black font-sans text-xl placeholder:text-gray-500' 
          placeholder='Negroni'
        />
        <MagnifyingGlass type='submit' size={28} className='absolute right-3 top-2 flex-shrink-0 cursor-pointer' />
      </form>
      <button className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#675045]'>LOGIN</button>
    </header>
  )
}

export default HeaderSearch