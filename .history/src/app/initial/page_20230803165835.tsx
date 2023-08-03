import { useEffect } from "React"
import Favorites from "@/components/Favorites";
import HeaderSearch from "@/components/HeaderSearch";
import TopDrinks from "@/components/TopDrinks";
import { cookies } from 'next/headers';

export default function Initial() {

  const hasCookiesFavorites = cookies().has('favorites');

  useEffect(() => {
    if(hasCookiesFavorites) {
      const favorites = cookies().get('favorites');
      const favoriteData: {strDrinkThumb: string, strDrink: string, drinkId: string}[] = JSON.parse(favorites!.value)
    }
  }, [hasCookiesFavorites])
  

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <div className='mt-32'>
        <Favorites hasCookiesFavorites={hasCookiesFavorites} favoriteData={favoriteData} />
      </div>
      <div className="mt-16 mb-20">
        <TopDrinks />
      </div>
    </main>
  )
}