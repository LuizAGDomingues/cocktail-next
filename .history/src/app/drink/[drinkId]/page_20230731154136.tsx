import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'
import { Drink } from '../../../lib/types'
import Image from "next/image";


export default function Drink({ params }: { params: { drinkId: string } }) {
  const [drinkData, setDrinkData] = useState<Drink>()

  const drink: Drink = {
    "idDrink": "11007",
    "strDrink": "Margarita",
    "strDrinkAlternate": null,
    "strTags": "IBA,ContemporaryClassic",
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "strInstructionsES": null,
    "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
    "strInstructionsZH_HANS": null,
    "strInstructionsZH_HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    "strIngredient1": "Tequila",
    "strIngredient2": "Triple sec",
    "strIngredient3": "Lime juice",
    "strIngredient4": "Salt",
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1 1/2 oz ",
    "strMeasure2": "1/2 oz ",
    "strMeasure3": "1 oz ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    "strImageAttribution": "Cocktailmarler",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2015-08-18 14:42:59"
  }

  useEffect(() => {
    setDrinkData(drink)
  }, [])

  /* useEffect(() => {
    async function fetchDrink() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.drinkId}`)
        const data = await response.json()
        setDrinkData(data.drinks)
      } catch (error) {
        console.error(error)
      }
    }
    if (!params.drinkId || params.drinkId.trim() === '') {
      return;
    } else {
      fetchDrink();
    }
  }, [params.drinkId]) */

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
      <div className="mt-44 text-white">
        <div className="flex items-center justify-center gap-6">
          <Image src={drinkData.strDrinkThumb} alt="Drink image" width={592} height={397} className="flex-shrink-0 rounded-md" />
          <div>
            <h3 className="text-4xl underline">Instructions:</h3>
            <p className="mt-3 text-justify font-sans text-xl">{drinkData.strInstructions}</p>
          </div>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  )
}