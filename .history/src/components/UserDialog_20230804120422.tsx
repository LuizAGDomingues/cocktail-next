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
import { disconnectUser } from '@/lib/firebase/login'
import { deleteCookie } from 'cookies-next';

const handleDisconnectUser = async () => {
  const response = await disconnectUser()
  if(Array.isArray(response)) {
    alert('An error happened')
    console.log(response[0], response[1])
  } else {
    deleteCookie('loginToken')
  }
}

function UserDialog() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><UserCircle color='white' size={48} className='' /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><button onClick={handleDisconnectUser} className='px-12 py-3 text-white bg-red-700 font-sans text-lg'>Disconnect</button></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDialog