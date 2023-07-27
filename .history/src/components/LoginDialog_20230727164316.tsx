import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function LoginDialog() {
  const [signIn, setSignIn] = useState(true)

  const defineSignIn = () => {
    setSignIn(true)
  }

  const defineSignUp = () => {
    setSignIn(false)
  }


  return (
    <Dialog>
      <DialogTrigger>
        <button className='inline-flex px-6 py-3 items-center justify-center rounded-lg text-white font-sans text-base bg-[#675045] hover:bg-[#443027] transition-colors duration-200'>LOGIN</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className='text-white font-sans text-center text-3xl'>Welcome</h2>
            <span className='text-white font-sans text-center text-lg'>Please, enter your details</span>
          </DialogTitle>
        </DialogHeader>
        <div className='inline-flex p-1 justify-center items-center bg-[#A3A1A1] rounded-lg font-sans'>
          <button onClick={defineSignIn} className={`flex w-full items-center justify-center py-3 px-14 rounded-lg transition-colors duration-200 ${signIn && 'bg-white'}`}>SignIn</button>
          <button onClick={defineSignUp} className={`flex w-full items-center justify-center py-3 px-14 rounded-lg transition-colors duration-200 ${!signIn && 'bg-white'}`}>SignUp</button>
        </div>

        <form className='mt-16 flex flex-col justify-start w-full gap-6'>
          <div>
            <label htmlFor="email" className='text-white text-center font-sans'>Email</label>
            <input type="text" name="email" id="email" className='w-full py-2 px-2 flex items-center rounded-lg font-sans bg-[#E4E4E4] text-black placeholder:text-[#646464]' placeholder='example@email.com' />
          </div>
          <div>
            <label htmlFor="password" className='text-white text-center font-sans'>Password</label>
            <input type="password" name="password" id="password" className='w-full py-2 px-2 flex items-center rounded-lg font-sans bg-[#E4E4E4] text-black placeholder:text-[#646464]' placeholder='********' />
          </div>
          <button className='uppercase max-w-fit font-sans bg-[#5F4B43] hover:bg-[#422f28]'>Enter</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog