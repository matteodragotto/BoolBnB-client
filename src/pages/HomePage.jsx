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
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">

        {apartments.map((apartment) => (
          <div key={apartment.id} className="flex justify-center w-full sm:w-3/4 md:w-1/3 lg:w-1/5">
            <ApartmentCards apartment={apartment} />
          </div>
        ))}
      </div >
      <div className="flex justify-center mb-10 gap-4 w-full max-w-[600px] mx-auto">
        <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} totalPages={totalPages} hasResult={hasResult} />
      </div>
    </div>
  )
}

export default HomePage