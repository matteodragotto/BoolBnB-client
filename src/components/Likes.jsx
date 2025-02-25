import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useGlobalContext } from '../context/GlobalContext'


const Likes = ({ apartment }) => {

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
    <p>
      <button className="cursor-pointer" onClick={() => incrementLIkes(apartment.id)}><FontAwesomeIcon icon={faHeart} style={{ color: "#6D1920" }} /></button> {apartment.mi_piace}
    </p>

  )
}

export default Likes