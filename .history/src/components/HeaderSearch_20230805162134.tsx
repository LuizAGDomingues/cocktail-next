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
  const handleIsUserDisconnect = () => {
    setUserLoged(false)
  }

  return (
    <header className='flex items-start justify-between'>
      <button onClick={() => window.history.back()} className='hidden md:block'>
        <ArrowCircleLeft size={36} color='white' />
      </button>
      { drinkName 
      ? <div className='flex items-end gap-12'>
          <h1 className='uppercase text-white text-3xl md:text-5xl'>{drinkName}</h1>
          <Martini color='white' className='w-10 h-10 md:w-14 md:h-14' />
        </div>
      : <InputSearch />
      }
      {userLoged ? <UserDialog onUserDisconnect={handleIsUserDisconnect} /> : <LoginDialog onUserLoged={handleIsUserLoged} />}
    </header>
  )
}

export default HeaderSearch