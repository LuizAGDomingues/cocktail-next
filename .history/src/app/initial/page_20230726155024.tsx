import FavoriteCards from "@/components/FavoriteCards";
import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A]">
      <HeaderSearch />
      <div>
        
        <FavoriteCards />
      </div>
    </main>
  )
}