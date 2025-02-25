import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"

const HomePage = () => {

  const { fetchApartments, apartments } = useGlobalContext()

  useEffect(() => {
    fetchApartments()
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap gap-4 justify-center my-10">

        {apartments.map((apartment) => (
          <ApartmentCards key={apartment.id} apartment={apartment} />
        ))}
      </div >
    </div>

  )
}

export default HomePage