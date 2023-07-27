import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="h-screen w-full bg-[url('../assets/test1.png')] bg-cover bg-no-repeat">
      <div className="h-screen w-full bg-black opacity-25 absolute"></div>
      <div className="text-white cursor-none text-center pt-[30rem] uppercase flex flex-col gap-2">
        <h1 className="text-7xl relative">MIXOLOGYMATE</h1>
        <span className="text-2xl relative">Your perfect partner to explore the world of <br/>drinks!</span>
      </div>
      <Button>
        EXPLORE NOW
      </Button>
    </div>
  )
}
