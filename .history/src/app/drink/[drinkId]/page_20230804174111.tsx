"use client"

import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'
import { Drink } from '../../../lib/types'
import Image from "next/image";
import { HeartStraight } from "@phosphor-icons/react";
import { hasCookie, setCookie, getCookie } from 'cookies-next';

interface favoriteDateProps {
  strDrinkThumb: string, 
  strDrink: string, 
  drinkId: string
}


export default function Drink({ params }: { params: { drinkId: string } }) {
  const hasCookieName = hasCookie('loginToken')
  const [drinkData, setDrinkData] = useState<Drink>()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    async function fetchDrink() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.drinkId}`)
        const data = await response.json()
        setDrinkData(data.drinks[0])
      } catch (error) {
        console.error(error)
      }
    }
    if (!params.drinkId || params.drinkId.trim() === '') {
      return;
    } else {
      fetchDrink();
    }
  }, [])

  useEffect(() => {
    const favorites = getCookie('favorites');
    const cookiesFavoriteData = JSON.parse(favorites!.toString())
    const filter = cookiesFavoriteData.filter((favorite: favoriteDateProps) => {})
  }, [])

  const handleFavorite = () => {
    const hasFavorite = hasCookie('favorites')
    const favoriteDrinkData: {strDrinkThumb: string, strDrink: string, drinkId: string}[] = [{ strDrink: drinkData!.strDrink, strDrinkThumb: drinkData!.strDrinkThumb, drinkId: drinkData!.idDrink}]
    const favoriteDrinkDataJSON = JSON.stringify(favoriteDrinkData)
    if(!hasFavorite){
      setCookie('favorites', favoriteDrinkDataJSON)
    } else {
      const favorites = getCookie('favorites');
      const cookiesFavoriteData = JSON.parse(favorites!.toString())
      cookiesFavoriteData.push(favoriteDrinkData[0])
      const favoriteDrinkDataJSON = JSON.stringify(cookiesFavoriteData)
      setCookie('favorites', favoriteDrinkDataJSON)
    }
  }

  if(!drinkData) {
    return (
      <main className="w-full h-screen flex items-center justify-center px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch drinkName={drinkData.strDrink} />
      <div className="mt-36 ml-44 text-white">
        <div className="flex items-start justify-center gap-14">
          <div>
            <div className="relative">
              <Image src={drinkData.strDrinkThumb} alt="Drink image" width={498} height={320} className="rounded-md" />
              <button onClick={handleFavorite} disabled={!hasCookieName} className="absolute top-1 right-2 disabled:text-gray-600">
                <HeartStraight size={32} weight={isFavorite ? "fill" : "regular"} />
              </button>
            </div>
            <div className="flex flex-col">
              <span className="text-xl mt-5">{drinkData.strGlass}</span>
              <span className="text-xl mt-1">{drinkData.strCategory}</span>
              <span className="text-xl mt-1">{drinkData.strAlcoholic}</span>
            </div>
          </div>
          <div>
            <h3 className="text-4xl underline">Ingredients:</h3>
            <ul className="font-sans text-xl mt-3">
              <li>{drinkData.strMeasure1} {drinkData.strIngredient1}</li>
              <li>{drinkData.strMeasure2} {drinkData.strIngredient2}</li>
              <li>{drinkData.strMeasure3} {drinkData.strIngredient3}</li>
              <li>{drinkData.strMeasure4} {drinkData.strIngredient4}</li>
              <li>{drinkData.strMeasure5} {drinkData.strIngredient5}</li>
              <li>{drinkData.strMeasure6} {drinkData.strIngredient6}</li>
              <li>{drinkData.strMeasure7} {drinkData.strIngredient7}</li>
              <li>{drinkData.strMeasure8} {drinkData.strIngredient8}</li>
              <li>{drinkData.strMeasure9} {drinkData.strIngredient9}</li>
              <li>{drinkData.strMeasure10} {drinkData.strIngredient10}</li>
              <li>{drinkData.strMeasure11} {drinkData.strIngredient11}</li>
              <li>{drinkData.strMeasure12} {drinkData.strIngredient12}</li>
              <li>{drinkData.strMeasure13} {drinkData.strIngredient13}</li>
              <li>{drinkData.strMeasure14} {drinkData.strIngredient14}</li>
              <li>{drinkData.strMeasure15} {drinkData.strIngredient15}</li>
            </ul>
            <h3 className="text-4xl underline mt-14">Instructions:</h3>
            <p className="mt-3 w-[35rem] text-justify font-sans text-xl mr-24">{drinkData.strInstructions}</p>
          </div>
        </div>
      </div>
    </main>
  )
}