import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

  const api_url = 'http://localhost:3000/'

  const [apartments, setApartments] = useState([])

  const fetchApartments = () => {
    axios.get(`${api_url}immobili`)
      .then(res => {
        setApartments(res.data)
      })
  }



  const value = {
    apartments,
    setApartments,
    fetchApartments
  }

  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider >
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }