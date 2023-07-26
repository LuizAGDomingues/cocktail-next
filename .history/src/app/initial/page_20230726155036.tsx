import FavoriteCards from "@/components/FavoriteCards";
import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A]">
      <HeaderSearch />
      <div className='mt-32'>
      <h2 className='text-white text-2xl'>YOUR FAVORITES</h2>
    </div>
        <FavoriteCards />
    </main>
  )
}