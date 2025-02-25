import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"

const SearchBar = () => {

  const { searchApartments, searchData, setSearchData } = useGlobalContext()

  const [selectedCountry, setSelectedCountry] = useState('')

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  return (
    // <div>
    //   <input
    //     type="text"
    //     value={searchData}
    //     onChange={(e) => setSearchData(e.target.value)}
    //     placeholder="Cerca appartamenti in base alla città"
    //   />
    //   <Link classNameName="bg-gray-500 rounded-lg" onClick={searchApartments} to={'/search'}>Cerca</Link>
    // </div>
    // <div classNameName="flex items-center space-x-4">
    //   <input
    //     type="text"
    //     value={searchData}
    //     onChange={(e) => setSearchData(e.target.value)}
    //     placeholder="Cerca appartamenti in base alla città"
    //     classNameName="border border-gray-300 rounded-lg p-4 w-96 text-xl"
    //   />
    //   <select
    //     value={selectedCountry}
    //     onChange={handleCountryChange}
    //     classNameName="border border-gray-300 rounded-lg p-4 w-52 text-xl"
    //   >
    //     <option value="Italy">Italia</option>
    //     <option value="USA">USA</option>
    //     <option value="Canada">Canada</option>
    //     <option value="Spain">Spagna</option>


    //   </select>
    //   <Link
    //     classNameName="bg-gray-500 rounded-lg text-white px-6 py-3 text-xl"
    //     onClick={() => searchApartments(selectedCountry)}
    //     to={'/search'}
    //   >
    //     Cerca
    //   </Link>
    // </div>
    <>
      <h1 className="text-4xl font-bold text-center space-x-4 bg-gray-100 p-4 shadow-lg">CONCEDITI UNA PAUSA CON BOOL B&B</h1>
      <div className="flex items-center space-x-4 bg-gray-100 p-4 shadow-lg ">
        <form className="max-w-md flex mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cerca appartamenti da affittare..." required value={searchData} onChange={(e) => setSearchData(e.target.value)} />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 search-button"><Link
              onClick={() => searchApartments(selectedCountry)}
              to="/search"
            >
              Cerca
            </Link></button>
          </div>
        </form>

      </div>
    </>

  )

}

export default SearchBar

