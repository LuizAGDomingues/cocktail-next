import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <form>
          <h3 className="text-white text-xl mt-12">FILTERS</h3>
          <div className="mt-6">
            <label htmlFor="category" className="text-white text-center font-sans text-sm">Category</label>
            <input type="text" name="category" id="category" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Cocktail"  />
          </div>
          <CaretDown size={32} />
          <div className="mt-3">
            <label htmlFor="alcoholic" className="text-white text-center font-sans text-sm">Alcoholic</label>
            <input type="text" name="alcoholic" id="alcoholic" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Alcoholic"/>
          </div>
          <div className="mt-3">
            <label htmlFor="glass" className="text-white text-center font-sans text-sm">Glass</label>
            <input type="text" name="glass" id="glass" className="font-sans rounded-lg bg-[#E4E4E4] flex items-center justify-between w-60 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Martini Glass"/>
          </div>
        </form>
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black ml-20"/>
      </div>

    </main>
  )
}