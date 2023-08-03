import React from 'react'
import { cookies } from 'next/headers';

function SwitchLoginPhoto() {
  const hasCookieName = cookies().has('loginToken');

  return (
    <>
    
    </>
    {hasCookieName ? <UserCircle color='white' size={48} /> : <LoginDialog />}
  )
}

export default SwitchLoginPhoto