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
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">

        {apartments.map((apartment) => (
          <div key={apartment.id} className="flex justify-center w-full sm:w-3/4 md:w-1/3 lg:w-1/5">
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