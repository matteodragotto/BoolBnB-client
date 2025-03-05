import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import ApartmentCards from "../components/ApartmentCards";
import SearchFilters from "../components/SearchFilters";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const SearchPage = () => {


  const { searchResults, totalPages, searchApartments } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [location]);

  const hasResults = searchResults && searchResults.length > 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  useEffect(() => {
    searchApartments(currentPage);
  }, [currentPage]);

  return (

    <div>
      <SearchBar />
      <SearchFilters />
      <div className="text-center mt-12 mb-4">
        <p className="text-sm font-semibold text-gray-600">
          Totale appartamenti trovati: <span className="text-[#AA895F]">{searchResults.length}</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {searchResults.map(apartment => (
            <div key={apartment.id} className="flex justify-center w-full">
              <ApartmentCards apartment={apartment} />
            </div>
          ))
          }
        </div >
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} totalPages={totalPages} hasResults={hasResults} />
    </div>
  )
};

export default SearchPage;