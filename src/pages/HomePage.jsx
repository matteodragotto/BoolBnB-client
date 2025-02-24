import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import PrintApartments from "../components/PrintApartments"

const HomePage = () => {

  const { fetchApartments, apartments } = useGlobalContext()

  useEffect(() => {
    fetchApartments()
  }, [])

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {apartments.map(apartment => (
        <div key={apartment.id} className="columns-md">
          <div className="border border-gray-500 rounded-lg">
            <PrintApartments images={apartment.image_urls} />
            <h3>{apartment.titolo}</h3>
          </div>
        </div>

      ))
      }
    </div >
  )
}

export default HomePage