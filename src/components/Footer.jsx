import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[rgb(170,137,95)] to-[rgb(112,143,150)] text-white">
            <div className="container mx-auto max-w-full py-2 px-4 flex justify-between items-center">
                <div className="flex space-x-4 lg:w-64">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faFacebookF} color="white" className='lg:text-3xl text-2xl hover:text-[rgb(98,137,146)]' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faInstagram} color="white" className='lg:text-3xl text-2xl hover:text-[rgb(98,137,146)]' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition transform duration-300 hover:scale-110">
                        <FontAwesomeIcon icon={faTwitter} color="white" className='lg:text-3xl text-2xl hover:text-[rgb(98,137,146)]' />
                    </a>
                </div>

                <div className='min-w-[150px] max-w-[150px] flex justify-center'>
                    <Link to={'/'}>
                        <img className="p-4 w-full" src="/logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="flex items-center sm:w-64 sm:justify-end">
                    <Link to="/assistenza">
                        <button className="bg-gradient-to-r from-[rgb(170,137,95)] to-[rgb(112,143,150)] text-white p-2 rounded-full hover:scale-105 transition duration-300 w-48 border border-white">Assistenza</button>
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-300 pt-3 pb-2 bg-gradient-to-r from-[rgb(170,137,95)] to-[rgb(112,143,150)]">
                <div className="flex justify-center space-x-8">
                    <Link to="/chi-siamo" className="text-white text-sm hover:text-[rgb(98,137,146)] transition duration-300">Chi siamo</Link>
                    <Link to="/termini-e-condizioni" className="text-white text-sm hover:text-[rgb(98,137,146)] transition duration-300">Termini e condizioni</Link>
                    <Link to="/privacy-policy" className="text-white text-sm hover:text-[rgb(98,137,146)] transition duration-300">Privacy policy</Link>
                </div>

                <div className="text-center py-2 text-sm text-white">
                    <p>&copy; 2025 Bool B&B. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer