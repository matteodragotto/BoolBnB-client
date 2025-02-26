import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link to={'/'}><img className="p-4" src="/logo.png" alt="" /></Link>
        <div className='add-contain flex items-center m-4'>
          <span className='add'><Link to={'/add'}>Affitta con Bool B&B  <FontAwesomeIcon icon={faHouse} color='white' /></Link></span>
          <FontAwesomeIcon icon={faCircleUser} size='3x' color='white' />
        </div>

      </div>
    </header>
  )
}

export default Header