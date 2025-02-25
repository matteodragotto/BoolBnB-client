import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import { useState } from "react"

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
    //   <Link className="bg-gray-500 rounded-lg" onClick={searchApartments} to={'/search'}>Cerca</Link>
    // </div>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Cerca appartamenti in base alla città"
        className="border border-gray-300 rounded-lg p-4 w-96 text-xl"
      />
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border border-gray-300 rounded-lg p-4 w-52 text-xl"
      >
        <option value="Italy">Italia</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Spain">Spagna</option>


      </select>
      <Link
        className="bg-gray-500 rounded-lg text-white px-6 py-3 text-xl"
        onClick={() => searchApartments(selectedCountry)}
        to={'/search'}
      >
        Cerca
      </Link>
    </div>
  )

}

export default SearchBar

