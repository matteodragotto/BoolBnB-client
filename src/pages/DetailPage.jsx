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
    <div>
      <h1>Dettaglio appartamenti</h1>
      {apartmentDetail ? (
        <div>
          <PrintApartmentDetail images={apartmentDetail.image_urls} />
          <h2>{apartmentDetail.titolo}</h2>
          <p>{apartmentDetail.descrizione}</p>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default DetailPage