import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

function HeaderSearch() {
  return (
    <header className='flex items-center justify-evenly'>
      <ArrowCircleLeft size={32} />
      <form action="">
        <input type="text" />
      </form>
      <button>LOGIN</button>
    </header>
  )
}

export default HeaderSearch