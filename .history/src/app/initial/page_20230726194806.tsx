import Favorites from "@/components/Favorites";
import HeaderSearch from "@/components/HeaderSearch";
import TopDrinks from "@/components/TopDrinks";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <div className='mt-32'>
        <Favorites />
      </div>
      <div className="mt-16 mb-12">
        <TopDrinks />
      </div>
    </main>
  )
}