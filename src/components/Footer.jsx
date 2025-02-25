import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container flex items-center justify-between mx-auto px-4">

                <div className="flex space-x-4 w-64">
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

                <div className='w-64 flex justify-center'>
                    <Link to={'/'}>
                        <img className="p-4" src="./logo.png" alt="Logo" />
                    </Link>
                </div>


                <div className="flex items-center">
                    <Link to="/assistenza">
                        <button className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full mt-4 hover:scale-105 transition duration-300 w-64 border border-white">Assistenza</button>
                    </Link>
                </div>
            </div>
        </footer>

    )
}

export default Footer