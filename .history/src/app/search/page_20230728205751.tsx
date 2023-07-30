import FilterForm from "@/components/FilterForm";
import HeaderSearch from "@/components/HeaderSearch";
import { useRouter } from 'next/router'


export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <FilterForm />
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black ml-20"/>
      </div>
    </main>
  )
}