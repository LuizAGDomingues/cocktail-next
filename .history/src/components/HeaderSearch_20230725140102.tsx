import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

function HeaderSearch() {
  return (
    <header className='flex items-center justify-evenly'>
      <ArrowCircleLeft size={32} />
      <form>
        <input type="text" className='bhg-[#E4E4E4] rounded-lg flex items-center ' />
        <MagnifyingGlass type='submit' size={28} />
      </form>
      <button>LOGIN</button>
    </header>
  )
}

export default HeaderSearch