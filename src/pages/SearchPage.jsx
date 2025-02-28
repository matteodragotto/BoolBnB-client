import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import ApartmentCards from "../components/ApartmentCards";
import SearchFilters from "../components/SearchFilters";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const SearchPage = () => {

  const { searchResults, totalPages, searchApartments } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchApartments(currentPage);
  }, [currentPage]);

  return (

    <div>
      <SearchBar />
      <SearchFilters />
      <div className="flex flex-wrap gap-4 justify-center my-10">

        {searchResults.map(apartment => (
          <ApartmentCards key={apartment.id} apartment={apartment} />
        ))
        }
      </div >
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
};

export default SearchPage;