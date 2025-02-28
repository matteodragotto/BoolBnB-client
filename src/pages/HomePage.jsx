import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"
import { useNavigate } from "react-router-dom"
import PageNumbers from "../components/PageNumbers"

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
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">

        {apartments.map((apartment) => (
          <div key={apartment.id} className="flex justify-center w-full sm:w-3/4 md:w-1/3 lg:w-1/5 xl:w-1/6">
            <ApartmentCards apartment={apartment} />
          </div>
        ))}
      </div >

      <div>

        <div className="w-full flex justify-center">
          <PageNumbers currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        <div className="flex justify-center mb-10 gap-4 w-full max-w-[600px] mx-auto">
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
    </div>
  )
}

export default HomePage