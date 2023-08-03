import React from 'react'
import { cookies } from 'next/headers';

function SwitchLoginPhoto() {
  const hasCookieName = cookies().has('loginToken');
  return (
    <div>SwitchLoginPhoto</div>
  )
}

export default SwitchLoginPhoto