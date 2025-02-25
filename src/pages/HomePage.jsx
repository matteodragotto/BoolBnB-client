import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const { fetchApartments, apartments, totalPages } = useGlobalContext()
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    fetchApartments(currentPage)
  }, [currentPage])


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)  // Decrementa la pagina
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap gap-4 justify-center my-10">

        {apartments.map((apartment) => (
          <ApartmentCards key={apartment.id} apartment={apartment} />
        ))}
      </div >
      <div className="flex justify-center mb-10 gap-4">
        {currentPage > 1 && (
          <button
            onClick={prevPage}
            className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full mt-4 hover:scale-105 transition duration-300 w-64">
            Torna indietro
          </button>
        )}

        {currentPage < totalPages && (
          <button
            onClick={nextPage}
            className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full mt-4 hover:scale-105 transition duration-300 w-64 mx-auto">
            Vai alla prossima pagina
          </button>
        )}
      </div>
    </div>
  )
}

export default HomePage