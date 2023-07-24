export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('../assets/test1.png')] bg-cover bg-no-repeat">
      <div className="h-screen w-full bg-black opacity-25 absolute"></div>
      <div className="text-white text-center relative pt-[30rem] uppercase flex flex-col gap-4">
        <h1 className="text-7xl">MIXOLOGYMATE</h1>
        <span className="text-2xl">Your perfect partner to explore the world of <br/>drinks!</span>
      </div>
    </div>
  )
}
