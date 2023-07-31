"use client"

import { ArrowCircleLeft, MagnifyingGlass } from '@phosphor-icons/react'
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
      { isD}
      <LoginDialog />
    </header>
  )
}

export default HeaderSearch