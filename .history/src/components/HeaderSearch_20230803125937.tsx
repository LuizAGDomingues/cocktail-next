"use client"

import { ArrowCircleLeft, MagnifyingGlass, Martini } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SwitchLoginPhoto from './SwitchLoginPhoto'

interface HeaderSearchProps {
  drinkName?: string
}

function HeaderSearch({ drinkName }: HeaderSearchProps) {
  const [inputDrink, setInputDrink] = useState<string>()
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search?drink=${inputDrink}`)
  }

  return (
    <header className='flex items-center justify-between'>
      <Link href='/'>
        <ArrowCircleLeft size={36} color='white' />
      </Link>
      { drinkName 
      ? <div className='flex items-end gap-12'>
          <h1 className='uppercase text-white text-5xl'>{drinkName}</h1>
          <Martini size={56} color='white' />
        </div>
      : <form onSubmit={handleSubmit} className='relative'>
          <input 
            type="text" 
            className='bg-[#E4E4E4] rounded-lg flex items-center px-3 py-2 w-[31.8125rem] text-black font-sans text-xl placeholder:text-gray-500' 
            placeholder='Negroni'
            onChange={value => setInputDrink(value.target.value)}
            value={inputDrink}
          />
          <button type="submit">
            <MagnifyingGlass size={28} className='absolute right-3 top-2 flex-shrink-0 cursor-pointer' />
          </button>
        </form>
      }
      <SwitchLoginPhoto />
    </header>
  )
}

export default HeaderSearch