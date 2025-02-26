import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

const StarReviews = ({ vote }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarSolid} />)
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} />)
    }
  }
  return stars
}

export default StarReviews