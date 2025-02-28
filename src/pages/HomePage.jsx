import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"
import PageNumbers from "../components/PageNumbers"

const HomePage = () => {

  const { fetchApartments, apartments, totalPages } = useGlobalContext()
  const [currentPage, setCurrentPage] = useState(1)

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
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

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

        <PageNumbers currentPage={currentPage} setCurrentPage={setCurrentPage} pages={currentPage} />
      </div>
    </div>
  )
}

export default HomePage