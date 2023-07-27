import HeaderSearch from "@/components/HeaderSearch";

export default function Initial() {
  return (
    <main className="w-full h-screen px-8 py-6 bg-gradient-to-r from-[#251A14] to-[#120D0A] overflow-auto">
      <HeaderSearch />
      <h2 className="text-white text-2xl mt-36">RELATED DRINKS</h2>
      <div className="flex">
        <form>
          <h3 className="text-white text-xl mt-12">FILTERS</h3>
          <div className="flex flex-col justify-start gap-1 mt-6">
            <label htmlFor="category" className="text-white text-center font-sans text-sm">Category</label>
            <input type="text" name="category" id="category" className="flex items-center justify-between w-48 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Cocktail"  />
          </div>
          <div className="flex flex-col justify-start gap-1 mt-3">
            <label htmlFor="alcoholic" className="text-white text-center font-sans text-sm">Category</label>
            <input type="text" name="alcoholic" id="alcoholic" className="flex items-center justify-between w-48 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Alcoholic"/>
          </div>
          <div className="flex flex-col justify-start gap-1 mt-3">
            <label htmlFor="glass" className="text-white text-center font-sans text-sm">Category</label>
            <input type="text" name="glass" id="glass" className="flex items-center justify-between w-48 py-2 px-2 text-black placeholder:text-[#646464]" placeholder="Cocktail"/>
          </div>
        </form>
        <div className="w-[1px] h-[40rem] flex-shrink-0 bg-black"/>
      </div>

    </main>
  )
}