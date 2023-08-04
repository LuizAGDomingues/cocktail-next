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

function UserDialog({}) {
  return (
    <div className="mr-16">
      <DropdownMenu>
        <DropdownMenuTrigger><UserCircle color='white' size={48} /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><button onClick={handleDisconnectUser} className='px-6 py-3 text-white bg-red-700 rounded-md font-sans text-lg'>Disconnect</button></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserDialog