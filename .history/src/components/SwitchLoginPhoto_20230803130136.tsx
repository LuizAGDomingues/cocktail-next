"use server"
import React from 'react'
import { cookies } from 'next/headers';
import LoginDialog from './LoginDialog';
import { UserCircle } from '@phosphor-icons/react';

function SwitchLoginPhoto() {
  const hasCookieName = cookies().has('loginToken');

  return (
    <>
      {hasCookieName ? <UserCircle color='white' size={48} /> : <LoginDialog />}
    </>
  )
}

export default SwitchLoginPhoto