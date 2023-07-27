import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>LOGIN</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className='text-white font-sans text-center text-2xl'>Welcome</h2>
            <span className='text-white font-sans text-center text-base'>Please, enter your details</span>
          </DialogTitle>
        </DialogHeader>
        <div className='inline-flex p-1 justify-center items-center bg-[#A3A1A1] rounded-lg'>
          <button className='flex items-center justify-center py-3 px-14 rounded-lg'>SignIn</button>
          <button className=''>SignUp</button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog