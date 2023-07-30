"use client"

import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginDialog from './LoginDialog'

function HeaderSearch() {
  const [inputDrink, setInputDrink] = useState<string>()

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
          onChange={}
        />
        <MagnifyingGlass type='submit' size={28} className='absolute right-3 top-2 flex-shrink-0 cursor-pointer' />
      </form>
      <LoginDialog />
    </header>
  )
}

export default HeaderSearch