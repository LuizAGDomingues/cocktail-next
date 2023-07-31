"use client"

import { ArrowCircleLeft, MagnifyingGlass, Martini } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginDialog from './LoginDialog'
import { useRouter } from 'next/navigation'

interface HeaderSearchProps {
  isDrinkPage?: boolean
}

function HeaderSearch({ isDrinkPage }: HeaderSearchProps) {
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
      { isDrinkPage 
      ? <div>
          <h1></h1>
          <Martini size={56} />
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
      <LoginDialog />
    </header>
  )
}

export default HeaderSearch