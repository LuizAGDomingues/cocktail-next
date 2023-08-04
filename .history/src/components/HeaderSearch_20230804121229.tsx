"use client"

import { ArrowCircleLeft, Martini, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LoginDialog from './LoginDialog'
import { hasCookie } from 'cookies-next';
import InputSearch from './InputSearch';
import UserDialog from './UserDialog'

interface HeaderSearchProps {
  drinkName?: string
}

function HeaderSearch({ drinkName }: HeaderSearchProps) {
  const [userLoged, setUserLoged] = useState(false)

  useEffect(() => {
    const hasCookieName = hasCookie('loginToken');
    if(hasCookieName) {
      setUserLoged(true)
    }
  }, [])

  const handleIsUserLoged = () => {
    setUserLoged(true)
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
      : <InputSearch />
      }
      {userLoged ? <UserDialog on /> : <LoginDialog onUserLoged={handleIsUserLoged} />}
    </header>
  )
}

export default HeaderSearch