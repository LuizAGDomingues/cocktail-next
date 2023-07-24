export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('../assets/test1.png')] bg-cover bg-no-repeat">
      <div className="h-screen w-full bg-black opacity-25 absolute"></div>
      <div className="text-white text-center relative pt-[30rem] uppercase flex flex-col gap-2">
        <h1 className="text-7xl">MIXOLOGYMATE</h1>
        <span className="text-2xl">Your perfect partner to explore the world of <br/>drinks!</span>
      </div>
      <div className="flex items-center">
        <button className="max-w-fit rounded-full mt-16 py-4 px-12 text-white text-center text-xl bg-gradient-to-r from-[#5F4B43] via-[#675045] to-[#705548] hover:from-[#5F4B43] hover:to-[#493931] uppercase relative mx-auto">Explore Now</button>
      </div>
    </div>
  )
}
