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
  const [services, setServices] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])


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

      })

      .catch(error => {
        console.error("Errore nel recupero degli immobili:", error);
      });
  }

  const searchApartments = (page = 1) => {
    let queryParams = { city: searchData, page, limit: 8 };

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
        setTotalPages(res.data.totalPages);
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

  const addNewApartment = async (formData, images, selectedServices, selectedLanguages) => {
    try {
      const apartmentResponse = await axios.post(`${api_url}immobili`, formData);
      const apartmentsId = apartmentResponse.data.apartments_id;
      const usersId = apartmentResponse.data.users_id

      console.log('Appartamento creato con successo con id:', apartmentsId);
      console.log('Utente creato con successo con id:', usersId);


      if (images.length > 0) {
        const imageFormData = new FormData();

        images.forEach(image => {
          imageFormData.append('url', image);
        });

        imageFormData.append('apartments_id', apartmentsId);

        const imageResponse = await axios.post(`${api_url}immobili/immagini`, imageFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Immagini caricate con successo:', imageResponse.data);
      }

      if (selectedServices.length > 0) {
        const servicesResponse = await axios.post(`${api_url}immobili/${apartmentsId}/services`, { service_ids: selectedServices });

        console.log('Servizi associati all\'appartamento con successo:', servicesResponse.data);
      }

      if (selectedLanguages.length > 0) {
        const languagesResponse = await axios.post(`${api_url}immobili/${usersId}/languages`, { language_ids: selectedLanguages });

        console.log('Lingue associate all\'utente con successo:', languagesResponse.data);
      }

      return [apartmentsId, usersId];
    } catch (error) {
      console.error('Errore durante la creazione dell\'appartamento e il caricamento delle immagini', error);
    }
  };

  const addReview = (id, reviewData) => {
    axios.post(`${api_url}immobili/${id}/recensioni`, reviewData)
      .then(res => {
        console.log('Recensione aggiunta con successo');
      })
      .catch(error => {
        console.error('Errore nel caricamento della recensione:', error);
      });
  }

  const fetchServices = () => {
    axios.get(`${api_url}immobili/services`)
      .then(res => {
        setServices(res.data)
      })
      .catch(error => {
        console.error('Errore nel caricamento dei servizi:', error);
      });
  }

  const fetchLanguages = () => {
    axios.get(`${api_url}immobili/languages`)
      .then(res => {
        setLanguages(res.data)
      })
      .catch(error => {
        console.error('Errore nel caricamento delle lingue:', error);
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
    addNewApartment,
    addReview,
    fetchServices,
    services,
    setServices,
    selectedServices,
    setSelectedServices,
    fetchLanguages,
    languages,
    setLanguages,
    selectedLanguages,
    setSelectedLanguages
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