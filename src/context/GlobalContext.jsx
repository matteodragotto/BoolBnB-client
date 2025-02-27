import { createContext, useContext, useState } from "react"
import axios from "axios"
import storeImmobiliSchema from "../validationSchema"


const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

  const api_url = 'http://localhost:3000/'

  const [apartments, setApartments] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [roomsMin, setRoomsMin] = useState(1);
  const [roomsMax, setRoomsMax] = useState(4);
  const [bedsMin, setBedsMin] = useState(1);
  const [type, setType] = useState('')
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [apartmentDetail, setApartmentDetail] = useState({})


  const fetchApartments = (page = 1) => {
    axios.get(`${api_url}immobili?page=${page}`)
      .then(res => {
        // console.log(res.data.data);

        setApartments(res.data.data)
        setTotalPages(res.data.totalPages)
        setTotalItems(res.data.totalItems)

        const validationResult = storeImmobiliSchema.safeParse(res.data.data);

        if (!validationResult.success) {
          console.error("Errore nella validazione dei dati:", validationResult.error.format());
          alert("Errore nel caricamento degli appartamenti. Riprova più tardi.");
          return;
        }

        setApartments(validationResult.data);
        setSearchData('')

      })

      .catch(error => {
        console.error("Errore nel recupero degli immobili:", error);
      });
  }

  const searchApartments = () => {
    let queryParams = { city: searchData };

    if (priceMin) queryParams.price_min = priceMin;
    if (priceMax) queryParams.price_max = priceMax;
    if (roomsMin) queryParams.rooms_min = roomsMin;
    if (roomsMax) queryParams.rooms_max = roomsMax;
    if (bedsMin) queryParams.beds_min = bedsMin
    if (type) queryParams.type = type

    const query = new URLSearchParams(queryParams).toString();

    axios.get(`${api_url}immobili/search?${query}`)
      .then(res => {
        setSearchResults(res.data.data);
      })
      .catch(error => {
        console.error('Errore nella ricerca:', error);
      });
  };

  const fetchApartmentDetail = (id) => {
    axios.get(`${api_url}immobili/${id}`)
      .then(res => {
        console.log(res.data);

        setApartmentDetail(res.data);
      })
      .catch(error => {
        console.error('Errore nel dettaglio appartamento:', error);
      });
  }

  const addNewApartment = (formData) => {
    axios.post(`${api_url}immobili`, formData)
      .then(res => {
        console.log('Appartmento creato con successo con id:', res.data.apartments_id);

        return res.data.apartments_id
      })
      .catch(error => {
        console.error('Errore nella creazione dell\'appartamento', error);
      });
  };


  const value = {
    apartments,
    setApartments,
    fetchApartments,
    searchData,
    setSearchData,
    searchResults,
    setSearchResults,
    searchApartments,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    roomsMin,
    setRoomsMin,
    roomsMax,
    setRoomsMax,
    bedsMin,
    setBedsMin,
    type,
    setType,
    totalPages,
    totalItems,
    setTotalPages,
    fetchApartmentDetail,
    apartmentDetail,
    setApartmentDetail,
    addNewApartment
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