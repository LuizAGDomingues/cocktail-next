import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <form>
          <h3 className="text-white text-xl mt-12">FILTERS</h3>
          <div>
            <label htmlFor=""></label>
          </div>
        </form>
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black"/>
      </div>

    </main>
  )
}