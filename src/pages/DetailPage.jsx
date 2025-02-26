import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
import PrintApartmentDetail from "../components/PrintApartmentDetail"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import StarReviews from "../components/StarReviews"





const DetailPage = () => {

  const { id } = useParams()

  const { fetchApartmentDetail, apartmentDetail } = useGlobalContext()

  const [isOpen, setIsOpen] = useState(false)

  const servicesToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    fetchApartmentDetail(id)
  }, [id])


  return (
    <div >
      {apartmentDetail.image_urls ? (
        <div className="text-center">
          <PrintApartmentDetail images={apartmentDetail.image_urls} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="p-4">

        <div className="flex flex-grow justify-between items-center">
          <h2 className="text-4xl">{apartmentDetail.titolo}</h2>
          <div className="text-center">
            <p>Host: {apartmentDetail.nome} {apartmentDetail.cognome}</p>
            <button className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer">Contattami</button>
          </div>
        </div>

        <div className="text-center">
          <p>Tipologia: {apartmentDetail.tipologia}</p>
          <p>Numero stanze: {apartmentDetail.numero_stanze} Numero bagni: {apartmentDetail.numero_bagni} Numero letti: {apartmentDetail.numero_letti}</p>
          <p>Prezzo/notte: {apartmentDetail.prezzo_notte}€</p>
          <p className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full border border-white w-full my-3">{apartmentDetail.descrizione}</p>
        </div>

        <div className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white text-center">
          <button className="cursor-pointer" onClick={servicesToggle}>
            Servizi {isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
          </button>
          {isOpen && (<ul>{apartmentDetail.services_list ? (apartmentDetail.services_list.map((service, index) => (
            <li key={index}>{service}</li>
          ))) : (<p>Loading...</p>)}</ul>)}
        </div>

        <div className="text-center mt-5">
          <h3>Recensioni</h3>
          <ul className="text-center border border-gradient-to-r from-[#AA895F] to-[#708F96] rounded-lg mt-2">{apartmentDetail.reviews ? (apartmentDetail.reviews.map((review, index) => (
            <li key={index}>
              <p>- {review.nome} {review.cognome}</p>
              <p>{review.descrizione}</p>
              <StarReviews vote={review.voto} />
            </li>
          ))) : (<p>Loading...</p>)}</ul>
        </div>


      </div>



    </div>
  )
}

export default DetailPage