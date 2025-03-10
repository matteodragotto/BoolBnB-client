import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {

  const navigate = useNavigate()

  const { searchApartments, searchData, setSearchData } = useGlobalContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    searchApartments()
    navigate('/search')
  }


  return (
    <>
      <div className="space-x-4 p-8 shadow-lg h-100 flex items-center justify-center flex-col bar relative mb-20">
        <h1 className="lg:text-8xl text-4xl font-bold pb-6 text-center">CONCEDITI UNA PAUSA CON BOOL B&B</h1>
        <div className="flex items-center search-position">
          <form className="max-w-lg flex mx-auto " onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-4 text-xl font-medium text-gray-900 sr-only dark:text-white">Search</label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>

              <input type="search" id="default-search" className="block lg:w-100 w-64 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-[#AA895F] focus:border-[#AA895F] placeholder-transparent lg:placeholder:text-gray-700 bg-white" placeholder="Cerca appartamenti in base alla città..." required value={searchData} onChange={(e) => setSearchData(e.target.value)} />

              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-r from-[#AA895F] to-[#708F96] hover:scale-105 transition duration-300 hover:cursor-pointer" onClick={() => searchApartments()} to="/search">
                Cerca
              </button>
            </div>

          </form>

        </div >
      </div >
    </>

  )

}

export default SearchBar

