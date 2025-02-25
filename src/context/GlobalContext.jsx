import { createContext, useContext, useState } from "react"
import axios from "axios"


const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

  const api_url = 'http://localhost:3000/'

  const [apartments, setApartments] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [roomsMin, setRoomsMin] = useState(1);
  const [roomsMax, setRoomsMax] = useState(3);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0)


  const fetchApartments = (page = 1) => {
    axios.get(`${api_url}immobili?page=${page}`)
      .then(res => {
        // console.log(res.data.data);

        setApartments(res.data.data)
        setTotalPages(res.data.totalPages)
        setTotalItems(res.data.totalItems)

      })
  }

  const searchApartments = () => {
    let query = `city=${searchData}`

    if (priceMin) query += `&price_min=${priceMin}`;
    if (priceMax) query += `&price_max=${priceMax}`;
    if (roomsMin) query += `&rooms_min=${roomsMin}`;
    if (roomsMax) query += `&rooms_max=${roomsMax}`;

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
    searchApartments,
    setPriceMin,
    setPriceMax,
    setRoomsMin,
    setRoomsMax,
    totalPages,
    totalItems,
    setTotalPages
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