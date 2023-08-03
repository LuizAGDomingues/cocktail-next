"use client"

import { ArrowCircleLeft, MagnifyingGlass, Martini, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginDialog from './LoginDialog'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers';

interface HeaderSearchProps {
  drinkName?: string
}

function HeaderSearch({ drinkName }: HeaderSearchProps) {
  const hasCookieName = cookies().has('loginToken');
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
      : 
      }
      {hasCookieName ? <UserCircle color='white' size={48} /> : <LoginDialog />}
    </header>
  )
}

export default HeaderSearch