import HeaderSearch from "@/components/HeaderSearch";
import React, {useEffect, useState} from 'react'


export default function Drink({ params }: { params: { drinkId: string } }) {

  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <h1>{params.}</h1>
    </main>
  )
}