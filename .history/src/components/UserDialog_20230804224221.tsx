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

interface UserDialogProps {
  onUserDisconnect: () => void
}

function UserDialog({onUserDisconnect}: UserDialogProps) {

  const handleDisconnectUser = async () => {
    const response = await disconnectUser()
    if(Array.isArray(response)) {
      alert('An error happened')
      console.log(response[0], response[1])
    } else {
      deleteCookie('loginToken')
      onUserDisconnect()
    }
  }

  return (
    <div className="mr-16">
      <DropdownMenu>
        <DropdownMenuTrigger><UserCircle color='white' className='w-6 h-6 md:w-12 md:h-12' /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><button onClick={handleDisconnectUser} className='px-2 md:px-6 md:py-3 text-white bg-red-700 rounded-md font-sans text-lg'>Disconnect</button></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserDialog