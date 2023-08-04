"use client"

import React, { FormEvent, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GoogleLogo } from '@phosphor-icons/react'
import { googleConnectUser, connectUser, createUser } from '@/lib/firebase/login'
import { setCookie } from 'cookies-next';
import { comparePasswords } from '@/lib/utils';

interface LoginDialogProps {
  onUserLoged: (isLoged: boolean) => void
}

function LoginDialog({onUserLoged}: LoginDialogProps) {
  const [signIn, setSignIn] = useState(true)
  const [loginError, setLoginError] = useState<boolean>()
  const [loginSucess, setLoginSucess] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const defineSignIn = () => {
    setSignIn(true)
  }

  const defineSignUp = () => {
    setSignIn(false)
  }

  const handleLogin_Create = async (event: FormEvent) => {
    event.preventDefault()
    if(email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setLoginError(true)
    } else {
      if(signIn) {
        const connectLogin = await connectUser(email, password)
        if(Array.isArray(connectLogin)) {
          setLoginError(true)
          console.log(connectLogin[0], connectLogin[1])
        } else {
          setCookie('loginToken', connectLogin)
          setLoginSucess(true)
          onUserLoged()
        }
      } else {
        if(comparePasswords(password, confirmPassword)){
          const createLogin = await createUser(email, password)
          if(Array.isArray(createLogin)) {
            setLoginError(true)
            console.log(createLogin[0], createLogin[1])
          } else {
            setCookie('loginToken', createLogin)
            setLoginSucess(true)
          }
        } else {
          setPasswordError(true)
        }
      }
    }
  }

  const handleGoogleLogin = async () => {
    const googleLogin = await googleConnectUser()

    if(Array.isArray(googleLogin)) {
      setLoginError(true)
      console.log(googleLogin[0], googleLogin[1])
    } else {
      setCookie('loginToken', googleLogin)
      setLoginSucess(true)
    }
  }

  if(loginSucess) {
    return ''
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

        <form onSubmit={handleLogin_Create} className='mt-16 flex flex-col justify-start w-full gap-6'>
          <div>
            <label htmlFor="email" className='text-white text-center font-sans'>Enter your Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-2 px-2 flex items-center rounded-lg font-sans bg-[#E4E4E4] text-black placeholder:text-[#646464]' placeholder='example@email.com' />
          </div>
          <div>
            <label htmlFor="password" className='text-white text-center font-sans'>{signIn ? 'Enter your Password' : 'Create your password'}</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full py-2 px-2 flex items-center rounded-lg font-sans bg-[#E4E4E4] text-black placeholder:text-[#646464]' placeholder='********' />
          </div>
          {!signIn &&
            <div>
              <label htmlFor="password" className='text-white text-center font-sans'>Confirm your password</label>
              <input type="password" name="password" id="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full py-2 px-2 flex items-center rounded-lg font-sans bg-[#E4E4E4] text-black placeholder:text-[#646464]' placeholder='********' />
              {passwordError && <span className="text-red text-sm">The passwords must be equal</span>}
            </div>
          }
          {signIn 
          ? <button type='submit' className='mt-3 uppercase max-w-fit mx-auto font-sans text-white rounded-lg px-6 py-3 bg-[#5F4B43] hover:bg-[#422f28]'>Enter</button>
          : <button type='submit' className='mt-3 uppercase max-w-fit mx-auto font-sans text-white rounded-lg px-6 py-3 bg-[#5F4B43] hover:bg-[#422f28]'>Create account</button>
          }
          {loginError && <span className="text-red text-sm">An error happened</span>}
        </form>
        <div className='flex items-center justify-center gap-2 mt-20'>
          <div className='flex-shrink-0 h-[1px] w-40 bg-gradient-to-r from-[#1F1007] to-[#C2C2C2]'></div>
          <span className='text-[#C2C2C2] font-sans text-xs'>Or Connect With</span>
          <div className='flex-shrink-0 h-[1px] w-40 bg-gradient-to-r from-[#C2C2C2] to-[#1F1007]'></div>
        </div>
        <button onClick={handleGoogleLogin} className='mt-2 bg-white rounded-full max-w-fit mx-auto p-2'><GoogleLogo size={32}/></button>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog