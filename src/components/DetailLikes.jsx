import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useGlobalContext } from '../context/GlobalContext'


const DetailLikes = ({ id, className }) => {

  const { fetchApartmentDetail, apartmentDetail } = useGlobalContext()

  const api_url = 'http://localhost:3000/'

  const incrementLIkes = (apartmentsId) => {
    axios.patch(`${api_url}immobili/${id}`, { apartmentsId })
      .then(res => {
        console.log(res.data);
        fetchApartmentDetail(id)
      })
      .catch(error => {
        console.error(`Errore nell'aumento dei like`, error);
      });
  }

  return (
    <div>
      <button className={className} onClick={() => incrementLIkes(id)}><FontAwesomeIcon icon={faHeart} className="text-red-600 text-xl" />
        <span className="ml-1 text-black font-semibold">{apartmentDetail.mi_piace}</span>
      </button>
    </div>
  )
}

export default DetailLikes