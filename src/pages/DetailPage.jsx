import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
import PrintApartmentDetail from "../components/PrintApartmentDetail"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import StarReviews from "../components/StarReviews"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import DetailLikes from "../components/DetailLikes"
import { useNavigate } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"




const DetailPage = () => {

  const navigate = useNavigate();
  const { id } = useParams()

  const { fetchApartmentDetail, apartmentDetail, addReview } = useGlobalContext()

  const initialFormReview = {
    voto: 1,
    descrizione: '',
    nome: '',
    cognome: ''
  }

  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [formReview, setFormReview] = useState(initialFormReview)

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    setIsOpenReviews(false)
    fetchApartmentDetail(id)
  }

  const handleReviewChange = (e) => {
    const { value, name } = e.target;
    setFormReview({
      ...formReview,
      [name]: value
    });
    console.log(formReview);

  }

  const servicesToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    fetchApartmentDetail(id)
  }, [id])

  const getBorderClass = (index) => {
    return index % 2 === 0 ? 'border-[#AA895F]' : 'border-[#708F96]';
  };

  return (
    <div>
      <div className="flex justify-between items-center">

        <h2 className="text-5xl font-bold my-6 mx-4">{apartmentDetail.titolo}</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-1 rounded-full hover:scale-105 transition duration-300 lg:w-25 w-20 border border-white cursor-pointer me-10"
        >
          Indietro
        </button>
      </div>
      <div className="relative">

        <DetailLikes id={id} className='absolute top-2 left-2 bg-white px-3 py-2 mx-4 rounded-full shadow-md cursor-pointer hover:scale-110 transition z-10 flex items-center' />

        {apartmentDetail.image_urls ? (
          <div className="text-center shadow-md pb-2">
            <PrintApartmentDetail images={apartmentDetail.image_urls} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>


      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <div className="flex items-center">
              <p className="font-bold uppercase text-2xl mr-1">{apartmentDetail.indirizzo_completo}</p>
              {apartmentDetail.media_voti ? <span className="flex items-center"><FontAwesomeIcon icon={faStarSolid} className="text-yellow-400" /> {apartmentDetail.media_voti}</span> : ''}
            </div>
            <p><strong>Tipologia:</strong> {apartmentDetail.tipologia}</p>
            <p><strong>Numero stanze:</strong> {apartmentDetail.numero_stanze} | <strong>Numero bagni:</strong> {apartmentDetail.numero_bagni} | <strong>Numero letti:</strong> {apartmentDetail.numero_letti}</p>
            <p><strong>Prezzo:</strong> {apartmentDetail.prezzo_notte}€/notte</p>

          </div>
          <div className="text-center">
            <p>
              <strong>Host:</strong> {apartmentDetail.nome} {apartmentDetail.cognome}
            </p>

            {/* Pulsante per aprire il modal */}
            <button
              onClick={() => setIsOpenContact(true)}
              className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer"
            >
              Contattami
            </button>

            {isOpenContact && (
              <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black/50 backdrop-blur-md">
                <div className="relative p-4 w-full max-w-2xl bg-white rounded-4xl shadow-lg">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {apartmentDetail.nome} {apartmentDetail.cognome}
                    </h3>
                    <button
                      onClick={() => setIsOpenContact(false)}
                      className="text-gray-400 hover:bg-gray-200 rounded-lg p-2"
                    >

                    </button>
                  </div>
                  {/* Contenuto Modal */}
                  <div className="p-4 space-y-4">
                    <p className="text-base text-gray-500">
                      <strong>Lingue parlate:</strong> {apartmentDetail.lingua ? apartmentDetail.lingua : 'Non specificate'}
                    </p>
                    <p className="text-base text-gray-500">
                      <strong>Numero di telefono:</strong> {apartmentDetail.numero_telefono}
                    </p>
                    <p className="text-base text-gray-500">
                      <strong>Email:</strong> {apartmentDetail.email}
                    </p>
                    <div>
                      <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=172&ct=1740671892&rver=7.5.2211.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26RpsCsrfState%3dbe1c6fe7-9c8d-3c5f-db87-fa8adbbec658&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c" className="border text-white bg-blue-500 rounded-4xl p-2 mr-2" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> Invia una e-mail</a>
                      <a href="https://web.whatsapp.com/" className="border text-white bg-green-500 rounded-4xl p-2" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /> Invia un messaggio</a>
                    </div>
                  </div>
                  <div className="flex items-center p-4 border-t">
                    <button
                      onClick={() => setIsOpenContact(false)}
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Chiudi
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t mt-8">
          <p className="text-2xl font-bold">Descrizione</p>
          <p>{apartmentDetail.descrizione}</p>
        </div>

        <div className="flex mt-10 border-t border-b">
          <div className="py-4">
            <p className="text-2xl font-bold">Cosa troverai</p>
            <ul className="flex flex-wrap gap-4">{apartmentDetail.services_list ? (apartmentDetail.services_list.map((service, index) => (
              <React.Fragment key={index}>
                <li>{service}</li>
                {index < apartmentDetail.services_list.length - 1 && <span>-</span>}
              </React.Fragment>
            ))) : (<p>Loading...</p>)}</ul>
          </div>
        </div>


        <div className="text-center mt-5">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">Recensioni</h3>
            <div>
              <div className="text-center">
                {/* Pulsante per aprire il modal */}
                <button
                  onClick={() => setIsOpenReviews(true)}
                  className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer"
                >
                  Nuova recensione
                </button>

                {isOpenReviews && (
                  <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-md bg-black/50 z-50">
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg">
                      <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Crea una nuova recensione
                        </h3>
                        <button
                          onClick={() => setIsOpenReviews(false)}
                          className="text-gray-400 hover:bg-gray-200 rounded-lg p-2"
                        >
                          ✕
                        </button>
                      </div>
                      <form className="p-4" onSubmit={handleReviewSubmit}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2">
                            <label htmlFor="name" className="block text-left mb-2 text-sm font-medium text-gray-900">
                              Nome
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="w-full p-2 border rounded-lg"
                              placeholder="Inserisci il tuo nome..."
                              required
                              name="nome"
                              value={formReview.nome}
                              onChange={handleReviewChange}
                            />
                          </div>
                          <div className="col-span-2">
                            <label htmlFor="surname" className="block text-left mb-2 text-sm font-medium text-gray-900">
                              Cognome
                            </label>
                            <input
                              type="text"
                              id="surname"
                              className="w-full p-2 border rounded-lg"
                              placeholder="Inserisci il tuo cognome..."
                              required
                              name="cognome"
                              value={formReview.cognome}
                              onChange={handleReviewChange}
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="vote" className="block text-left mb-2 text-sm font-medium text-gray-900">
                              Voto (da 1 a 5)
                            </label>
                            <input type="number"
                              id="vote"
                              className="w-full p-2 border rounded-lg"
                              placeholder="1-5"
                              min="1"
                              max="5"
                              required
                              name="voto"
                              value={formReview.voto}
                              onChange={handleReviewChange}
                            />
                          </div>
                          <div className="col-span-2">
                            <label htmlFor="description" className="block text-left mb-2 text-sm font-medium text-gray-900">
                              Descrizione
                            </label>
                            <textarea
                              id="description"
                              rows="4"
                              className="w-full p-2 border rounded-lg"
                              placeholder="Scrivi la tua esperienza..."
                              name="descrizione"
                              value={formReview.descrizione}
                              onChange={handleReviewChange}
                            ></textarea>
                          </div>
                        </div>

                        <button type="submit" onClick={() => addReview(id, formReview)} className="w-full bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer">
                          Aggiungi recensione
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div>
            <ul className="text-left w-full p-2 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {apartmentDetail?.reviews && apartmentDetail.reviews.length > 0 ? (apartmentDetail.reviews.map((review, index) => {
                const borderClass = getBorderClass(index);

                return (
                  <li key={index} className={`p-3 border-2 ${borderClass} rounded-lg`}>
                    <p className="font-bold">{review.nome} {review.cognome}</p>
                    <StarReviews vote={review.voto} />
                    <p>{review.descrizione}</p>
                  </li>
                )
              })) : (<p>Nessuna recensione trovata.</p>)}</ul>
          </div>

        </div>


      </div>



    </div>
  )
}

export default DetailPage