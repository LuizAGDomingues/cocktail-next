"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlass } from '@phosphor-icons/react'

function InputSearch() {
  const [inputDrink, setInputDrink] = useState<string>()
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search?drink=${inputDrink}`)
  }

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <input 
        type="text" 
        className='bg-[#E4E4E4] rounded-lg flex items-center px-3 py-2 mt-5 md:w-[31.8125rem] text-black font-sans text-xl placeholder:text-gray-500' 
        placeholder='Negroni'
        onChange={value => setInputDrink(value.target.value)}
        value={inputDrink}
      />
      <button type="submit">
        <MagnifyingGlass size={28} className='absolute right-3 top-2 cursor-pointer' />
      </button>
    </form>
  )
}

export default InputSearch