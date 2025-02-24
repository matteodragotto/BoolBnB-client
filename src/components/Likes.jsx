import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Likes = ({ apartment }) => {
  return (
    <p>
      <button className="cursor-pointer"><FontAwesomeIcon icon={faHeart} style={{ color: "#6D1920" }} /></button> {apartment.mi_piace}
    </p>

  )
}

export default Likes