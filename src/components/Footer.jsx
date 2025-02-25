import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container flex items-center justify-between mx-auto px-4">

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                    </a>
                </div>

                <Link to={'/'}>
                    <img className="p-4" src="./logo.png" alt="Logo" />
                </Link>

                <div className="flex items-center">
                    <Link to="/assistenza">
                        <button className="text-white px-4 rounded border border-white py-2">Assistenza</button>
                    </Link>
                </div>
            </div>
        </footer>

    )
}

export default Footer