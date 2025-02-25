import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import PrintApartments from "../components/PrintApartments"
import Likes from "../components/Likes"
import SearchBar from "../components/SearchBar"

const HomePage = () => {

  const { fetchApartments, apartments } = useGlobalContext()

  useEffect(() => {
    fetchApartments()
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="flex flex-wrap gap-4 justify-center my-10">

        {apartments.map((apartment) => (
          <div key={apartment.id} className='w-80'>
            <div className='border border-gray-500 rounded-lg p-4 text-center shadow-lg'>
              <PrintApartments images={apartment.image_urls} />
              <Link to={`/dettaglio-immobile/${apartment.id}`} className='block mt-2'>
                <h3 className='text-lg font-bold'>{apartment.titolo}</h3>
                <p>{apartment.indirizzo_completo.split(',')[1].trim()}</p>
                <p className='text-xl font-semibold'>{apartment.prezzo_notte}€</p>
              </Link>
              <Likes apartment={apartment} />
            </div>
          </div>
        ))}
      </div >
    </div>

  )
}

export default HomePage