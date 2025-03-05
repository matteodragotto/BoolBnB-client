import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between">
        <Link to={'/?page=1'}><img className="p-4" src="/logo.png" alt="" /></Link>
        <div className='add-contain flex items-center'>
          <span className='add text-lg'><Link to={'/add'}>Affitta con Bool B&B  <FontAwesomeIcon icon={faHouse} color='white' /></Link></span>

        </div>

      </div>
    </header>
  )
}

export default Header