import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useGlobalContext } from '../context/GlobalContext'


const Likes = ({ apartment, className }) => {

  const { fetchApartments, searchApartments } = useGlobalContext()

  const api_url = 'http://localhost:3000/'

  const incrementLIkes = (apartmentsId) => {
    axios.patch(`${api_url}immobili/${apartment.id}`, { apartmentsId })
      .then(res => {
        console.log(res.data);
        fetchApartments()
        searchApartments()
      })
      .catch(error => {
        console.error(`Errore nell'aumento dei like`, error);
      });
  }

  return (
    <div>
      <button className={className} onClick={() => incrementLIkes(apartment.id)}><FontAwesomeIcon icon={faHeart} className="text-red-600 text-xl" />
        <span className="ml-1 text-black font-semibold">{apartment.mi_piace}</span>
      </button>
    </div>
  )
}

export default Likes