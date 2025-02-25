import { useGlobalContext } from "../context/GlobalContext"
import ApartmentCards from "../components/ApartmentCards"
import SearchFilters from "../components/SearchFilters"

const SearchPage = () => {

  const { searchResults } = useGlobalContext()

  return (
    <div>
      <SearchFilters />
      <div className="flex flex-wrap gap-4 justify-center my-10">

        {searchResults.map(apartment => (
          <ApartmentCards key={apartment.id} apartment={apartment} />
        ))
        }
      </div >
    </div>

  )
}

export default SearchPage