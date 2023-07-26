import FavoriteCards from "@/components/FavoriteCards";
import Favorites from "@/components/Favorites";
import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A]">
      <HeaderSearch />
      <div className='mt-32'>
        <Favorites />
      </div>
      <div className="mt-16"></div>
    </main>
  )
}