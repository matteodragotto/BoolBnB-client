import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

const SearchBar = () => {

  const { searchApartments, searchData, setSearchData } = useGlobalContext()

  return (
    <div>
      <input
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Cerca appartamenti in base alla città"
      />
      <Link className="bg-gray-500 rounded-lg" onClick={searchApartments} to={'/search'}>Cerca</Link>
    </div>
  )
}

export default SearchBar