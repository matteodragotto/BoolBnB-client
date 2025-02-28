import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"
import Pagination from "../components/Pagination"

const HomePage = () => {

  const { fetchApartments, apartments, totalPages } = useGlobalContext()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchApartments(currentPage)
  }, [currentPage])

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-10 mx-auto w-full">

        {apartments.map((apartment) => (
          <div key={apartment.id} className="w-full">
            <ApartmentCards apartment={apartment} />
          </div>
        ))}
      </div >
      <div className="flex justify-center mb-10 gap-4 w-full max-w-[600px] mx-auto">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}

export default HomePage