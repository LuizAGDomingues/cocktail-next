import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircle } from '@phosphor-icons/react'
import { getCookie } from 'cookies-next'

const handleDisconnectUser = async () => {
  const userToken = getCookie('loginToken')
  try {
    await signOut()
  } catch (error) {
    
  }
}

function UserDialog() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><UserCircle color='white' size={48} /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><button onClick={handleDisconnectUser} className='px-12 py-3 text-white bg-red-700 font-sans text-lg'>Disconnect</button></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDialog