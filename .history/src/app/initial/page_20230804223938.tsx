"use client"

import { useEffect, useState } from "react"
import Favorites from "@/components/Favorites";
import HeaderSearch from "@/components/HeaderSearch";
import TopDrinks from "@/components/TopDrinks";
import { getCookie, hasCookie } from 'cookies-next';

export default function Initial() {
  const [favoriteDataCookie, setFavoriteDataCookies] = useState<{strDrinkThumb: string, strDrink: string, drinkId: string}[] | "">("")
  const hasCookiesFavorites = hasCookie('favorites');

  useEffect(() => {
    if(hasCookiesFavorites) {
      const favorites = getCookie('favorites');
      const favoriteData: {strDrinkThumb: string, strDrink: string, drinkId: string}[] = JSON.parse(favorites!.toString())
      setFavoriteDataCookies(favoriteData)
    } else {
      setFavoriteDataCookies("")
    }
  }, [hasCookiesFavorites])
  

  return (
    <main className="w-full h-screen px-8 py-6 md:px-8 md:py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <div className='mt-32'>
        <Favorites hasCookiesFavorites={hasCookiesFavorites} favoriteData={favoriteDataCookie} />
      </div>
      <div className="mt-16 mb-20">
        <TopDrinks />
      </div>
    </main>
  )
}