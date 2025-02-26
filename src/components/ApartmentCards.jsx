import { Link } from "react-router-dom"
import PrintApartments from "../components/PrintApartments"
import Likes from "../components/Likes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"

const ApartmentCards = ({ apartment }) => {

  return (
    <div key={apartment.id} className='w-80'>
      <div className='relative border border-gray-500 rounded-lg p-4 text-center shadow-lg bg-gradient-to-r from-[#AA895F] to-[#708F96]'>
        <Likes apartment={apartment} />
        <PrintApartments images={apartment.image_urls} />
        <Link to={`/dettaglio-immobile/${apartment.id}`} className='block mt-2'>
          <h3 className='text-lg font-bold text-white'>{apartment.titolo}</h3>
          <p className='text-white'>{apartment.indirizzo_completo.split(',')[1].trim()}</p>
          <p className='text-xl font-semibold text-white'>Prezzo/notte: {apartment.prezzo_notte}€</p>
          <p className='text-lg font-bold text-white absolute top-54 right-2'><FontAwesomeIcon icon={faStarSolid} />{apartment.media_voti}</p>
        </Link>

      </div>
    </div>
  )
}

export default ApartmentCards