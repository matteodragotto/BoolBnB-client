import { createContext, useContext, useState } from "react"
import axios from "axios"

const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

  const api_url = 'http://localhost:3000/'

  const [apartments, setApartments] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')

  const fetchApartments = () => {
    axios.get(`${api_url}immobili`)
      .then(res => {
        setApartments(res.data)
      })
  }

  const searchApartments = () => {
    let query = `city=${searchData}`

    axios.get(`${api_url}immobili/search?${query}`)
      .then(res => {
        setSearchResults(res.data)
      })
      .catch(error => {
        console.error('Errore nella ricerca:', error);
      });
  }

  const value = {
    apartments,
    setApartments,
    fetchApartments,
    searchData,
    setSearchData,
    searchResults,
    setSearchResults,
    searchApartments
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