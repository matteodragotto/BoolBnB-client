import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useGlobalContext } from '../context/GlobalContext'


const Likes = ({ apartment }) => {

  const { fetchApartments, searchApartments } = useGlobalContext()
  const { likes, setLikes } = useState(null);

  const api_url = 'http://localhost:3000/'

  const incrementLIkes = (apartmentsId) => {
    axios.patch(`${api_url}immobili/${apartment.id}`, { apartmentsId })
      .then(res => {
        console.log(res.data);
        // fetchApartments()
        // searchApartments()
      })
      .catch(error => {
        console.error(`Errore nell'aumento dei like`, error);
      });
  }

  return (
    <div>
      <button className="absolute top-2 left-2 bg-white px-3 py-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition z-10 flex items-center" onClick={() => incrementLIkes(apartment.id)}><FontAwesomeIcon icon={faHeart} className="text-red-600 text-xl" />
        <span className="ml-1 text-black font-semibold">{apartment.mi_piace}</span>
      </button>
    </div>
  )
}

export default Likes