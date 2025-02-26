import { useGlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"
import PrintApartmentDetail from "../components/PrintApartmentDetail"
import { useEffect } from "react"


const DetailPage = () => {

  const { id } = useParams()

  const { fetchApartmentDetail, apartmentDetail } = useGlobalContext()

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
      <h2>{apartmentDetail.titolo}</h2>
      <p>{apartmentDetail.tipologia}</p>
      <p>{apartmentDetail.numero_stanze}</p>
      <p>{apartmentDetail.numero_bagni}</p>
      <p>{apartmentDetail.numero_letti}</p>
      <p>Prezzo/notte: {apartmentDetail.prezzo_notte}€</p>
      <p>{apartmentDetail.descrizione}</p>
      <ul>{apartmentDetail.services_list ? (apartmentDetail.services_list.map((service, index) => (
        <li key={index}>{service}</li>
      ))) : (<p>Loading...</p>)}</ul>
    </div>
  )
}

export default DetailPage