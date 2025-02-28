import { Link } from "react-router-dom"
import PrintApartments from "../components/PrintApartments"
import Likes from "../components/Likes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid, faBed, faShower, faRulerCombined, faMapMarkerAlt, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"

const ApartmentCards = ({ apartment }) => {
  const location = useLocation()
  const searchPageData = () => {

    if (location.pathname === '/search') {
      return (
        <div className="flex space-x-4 mt-4 text-white">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBed} className="mr-2" />
            <span className="font-semibold">{apartment.numero_stanze} Stanze</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faShower} className="mr-2" />
            <span className="font-semibold">{apartment.numero_bagni} Bagni</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faRulerCombined} className="mr-2" />
            <span className="font-semibold">{apartment.metri_quadri} m²</span>
          </div>
        </div>
      )

    }
  }
  const ratingColor = 'text-yellow-500'

  return (
    <div key={apartment.id} className='w-full max-w-[350px]'>
      <div className='relative border border-gray-500 rounded-lg p-4 text-center shadow-lg hover:shadow-xl bg-gradient-to-r from-[#AA895F] to-[#708F96] transform hover:scale-105 transition duration-300'>
        <Likes apartment={apartment} />
        <PrintApartments images={apartment.image_urls} />
        <Link to={`/dettaglio-immobile/${apartment.id}`} className='block mt-2'>
          <h3 className='text-lg font-bold text-white'>{apartment.titolo}</h3>

          <div className="flex items-center justify-center mt-2 text-white">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <p className="text-sm">{apartment.indirizzo_completo.split(',')[1].trim()}</p>
          </div>

          <p className='text-xl font-semibold text-white mt-2'>
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            {apartment.prezzo_notte}€ / notte
          </p>
          <p className={`text-lg font-bold ${ratingColor} absolute bottom-2 right-2`}>
            <FontAwesomeIcon icon={faStarSolid} className="mr-1" />
            <span className="text-white">{apartment.media_voti}</span>
          </p>
          {searchPageData()}
        </Link>

      </div>
    </div>
  )
}

export default ApartmentCards