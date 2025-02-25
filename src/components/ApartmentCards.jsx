import { Link } from "react-router-dom"
import PrintApartments from "../components/PrintApartments"
import Likes from "../components/Likes"

const ApartmentCards = ({ apartment }) => {
  return (
    <div key={apartment.id} className='w-80'>
      <div className='relative border border-gray-500 rounded-lg p-4 text-center shadow-lg'>
        <Likes apartment={apartment} />
        <PrintApartments images={apartment.image_urls} />
        <Link to={`/dettaglio-immobile/${apartment.id}`} className='block mt-2'>
          <h3 className='text-lg font-bold'>{apartment.titolo}</h3>
          <p>{apartment.indirizzo_completo.split(',')[1].trim()}</p>
          <p className='text-xl font-semibold'>{apartment.prezzo_notte}€</p>
        </Link>

      </div>
    </div>
  )
}

export default ApartmentCards