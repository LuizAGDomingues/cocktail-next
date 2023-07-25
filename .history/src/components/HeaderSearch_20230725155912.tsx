import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

function HeaderSearch() {
  return (
    <header className='flex items-center justify-evenly'>
      <ArrowCircleLeft size={32} />
      <form className='relative'>
        <input 
          type="text" 
          className='bhg-[#E4E4E4] rounded-lg flex items-center justify-between px-5 py-3 max-w-fit text-black font-sans text-xl placeholder:text-gray-500' 
          placeholder='Type the name of your drink'
        />
        <MagnifyingGlass type='submit' size={28} className='absolute right-0' />
      </form>
      <button className='inline-flex'>LOGIN</button>
    </header>
  )
}

export default HeaderSearch