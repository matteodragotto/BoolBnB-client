import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import ApartmentCards from "../components/ApartmentCards"
import Pagination from "../components/Pagination"


const HomePage = () => {

  const { fetchApartments, apartments, totalPages } = useGlobalContext()
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [location]);

  const hasResult = apartments && apartments.length > 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  useEffect(() => {
    fetchApartments(currentPage)
  }, [currentPage])

  return (
    <div>
      <SearchBar />
      <h2 className="text-center font-bold text-3xl  my-4">I B&B e Appartamenti Più Desiderati del Momento – Prenota il Tuo Sogno! 🏡</h2>
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">
        {apartments.length === 0 && <p className="text-center text-lg font-bold text-gray-600">Loading....</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {apartments.map((apartment) => (
            <div key={apartment.id} className="flex justify-center w-full">
              <ApartmentCards apartment={apartment} />
            </div>
          ))}
        </div>

      </div >
      <div className="flex justify-center mb-10 gap-4 w-full max-w-[600px] mx-auto">
        <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} totalPages={totalPages} hasResult={hasResult} />
      </div>
    </div>
  )
}

export default HomePage