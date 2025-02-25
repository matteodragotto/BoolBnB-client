import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import PrintApartments from "../components/PrintApartments"
import Likes from "../components/Likes"

const SearchPage = () => {

  const { searchResults } = useGlobalContext()

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">

      {searchResults.map(apartment => (

        <div key={apartment.id} className="columns-md">
          <div className="border border-gray-500 rounded-lg">
            <PrintApartments images={apartment.image_urls} />
            <Link to={`/dettaglio-immobile/${apartment.id}`}>
              <h3>{apartment.titolo}</h3>
              <p>{apartment.indirizzo_completo.split(',')[1].trim()}</p>
              <p>{apartment.prezzo_notte}€</p>
            </Link>
            <Likes apartment={apartment} />
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default SearchPage