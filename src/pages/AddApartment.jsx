import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const AddApartment = () => {

  const { addNewApartment, apartments, fetchApartments, services, selectedServices, setSelectedServices, fetchServices, languages, selectedLanguages, setSelectedLanguages, fetchLanguages } = useGlobalContext()

  const navigate = useNavigate()

  const initialFormData = {
    titolo: "",
    descrizione: "",
    numero_stanze: 0,
    numero_letti: 0,
    numero_bagni: 0,
    metri_quadri: 0,
    indirizzo_completo: "",
    email: "",
    tipologia: "Monolocale",
    prezzo_notte: 0,
    nome: "",
    cognome: "",
    numero_telefono: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  const [thumbnails, setThumbnails] = useState([])
  const [images, setImages] = useState([])
  const [error, setError] = useState({
    email: '',
    indirizzo_completo: ''
  })

  let typesArray = [];

  const typesListGeneration = apartments.map(apartment => apartment.tipologia);

  typesArray = [...new Set(typesListGeneration)];


  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      return;
    }

    addNewApartment(formData, images, selectedServices, selectedLanguages)
      .then(([apartmentsId, userId]) => {
        console.log('Appartamento creato con id:', apartmentsId);
        console.log('Utente aggiunto con id:', userId);

        navigate(`/dettaglio-immobile/${apartmentsId}`)
      })
      .catch((error) => {
        console.error('Errore durante la creazione dell\'appartamento', error);
      });
  };

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
    console.log(formData);

    if (name === "indirizzo_completo") {
      const regex = /^(via|viale|corso|piazza)\s+[A-Za-z\s]+\s+\d{1,5},\s+[A-Za-z\s]+$/i;
      if (!regex.test(value)) {

        setError((prevErrors) => ({
          ...prevErrors,
          indirizzo_completo: "Formato non valido. Esempio: via Roma 12, Milano",
        }));
      } else {
        setError((prevErrors) => ({
          ...prevErrors,
          indirizzo_completo: "",
        }));
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError((prevErrors) => ({
          ...prevErrors,
          email: "Email non valida",
        }));
      } else {
        setError((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const thumbnailsArray = files.map(file => URL.createObjectURL(file));
    setThumbnails(thumbnailsArray);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedServices((prevSelected) => {
        const updatedServices = [...prevSelected, id];
        console.log('Servizi selezionati dopo l\'aggiunta:', updatedServices);
        return updatedServices;
      });
    } else {
      setSelectedServices((prevSelected) => {
        const updatedServices = prevSelected.filter((selectedId) => selectedId !== id);
        console.log('Servizi selezionati dopo la rimozione:', updatedServices);
        return updatedServices;
      });
    }
  };


  const handleLanguages = (e, id) => {
    if (e.target.checked) {
      setSelectedLanguages((prevLanguages) => {
        const updatedLanguages = [...prevLanguages, id];
        console.log('Lingue selezionate dopo l\'aggiunta:', updatedLanguages);
        return updatedLanguages;
      });
    } else {
      setSelectedLanguages((prevLanguages) => {
        const updatedLanguages = prevLanguages.filter((languagesId) => languagesId !== id);
        console.log('Lingue selezionate dopo la rimozione:', updatedLanguages);
        return updatedLanguages;
      });
    }
  };


  useEffect(() => {
    fetchApartments()
    fetchServices()
    fetchLanguages()
  }, [])

  return (
    <div className="container mx-auto px-0 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="lg:text-5xl text-xl md:text-3xl font-bold text-center mb-2">INSERISCI IL TUO APPARTAMENTO</h1>
        <p className="text-center text-gray-600 mb-6 text-xl">Inizia anche tu il percorso per diventare host!</p>


        <form action='#' className="mx-auto " onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center lg:text-left font-bold mb-2">Dati Proprietario</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-5">
            <div>
              <label htmlFor="nome" className="mb-2 text-sm font-medium text-gray-900 sr">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="Cognome" className="mb-2 text-sm font-medium text-gray-900 sr">Cognome</label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cognome"
                required
                value={formData.cognome}
                onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="Telefono" className="mb-2 text-sm font-medium text-gray-900 sr">Cellulare</label>
              <input
                type="text"
                id="numero_telefono"
                name="numero_telefono"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Numero di telefono"
                required
                value={formData.numero_telefono}
                onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange} />
              {error && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </div>
          </div>
          <div>
            <h2 className="text-sm text-center lg:text-left font-bold mb-2">Seleziona la tua lingua</h2>
            <div className="overflow-auto h-64 md:h-24 border rounded-md my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 gap-4">
              {languages.map(language => (
                <div key={language.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${language.id}`}
                    onChange={(e) => handleLanguages(e, language.id)}
                    className="m-0"
                  />
                  <label htmlFor={`checkbox-${language.id}`} className="text-sm">{language.lingua}</label>
                </div>
              ))}
            </div>

          </div>







          <h2 className="text-2xl text-center lg:text-left font-bold mb-4">Dati Appartamento</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-5">
            <div className="w-full">
              <label htmlFor="titolo" className="mb-2 text-sm font-medium text-gray-900 sr">Titolo</label>
              <input
                type="text"
                id="titolo"
                name="titolo"
                className="block w-full h-19 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Titolo"
                required
                value={formData.titolo}
                onChange={handleChange} />
            </div>

            <div className="w-full">
              <label htmlFor="indirizzo_completo" className="mb-2 text-sm font-medium text-gray-900 sr">Indirizzo Completo</label>
              <input
                type="text"
                id="indirizzo_completo"
                name="indirizzo_completo"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="via Roma 1, Roma"
                required
                value={formData.indirizzo_completo}
                onChange={handleChange} />
              {error && <p className="text-red-500 text-sm mt-1">{error.indirizzo_completo}</p>}
            </div>

            <div className="flex flex-wrap gap-4 mb-5 justify-between">
              <div className="flex flex-col w-1/6">
                <label htmlFor="numero_stanze" className="mb-2 text-sm font-medium text-gray-900">Numero stanze</label>
                <input
                  type="number"
                  id="numero_stanze"
                  name="numero_stanze"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numero stanze"
                  required
                  value={formData.numero_stanze}
                  onChange={handleChange} />
              </div>

              <div className="flex flex-col w-1/6">
                <label htmlFor="numero_letti" className="mb-2 text-sm font-medium text-gray-900">Numero letti</label>
                <input
                  type="number"
                  id="numero_letti"
                  name="numero_letti"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numero letti"
                  required
                  value={formData.numero_letti}
                  onChange={handleChange} />
              </div>

              <div className="flex flex-col w-1/6">
                <label htmlFor="numero_bagni" className="mb-2 text-sm font-medium text-gray-900">Numero bagni</label>
                <input
                  type="number"
                  id="numero_bagni"
                  name="numero_bagni"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numero bagni"
                  required
                  value={formData.numero_bagni}
                  onChange={handleChange} />
              </div>

              <div className="flex flex-col w-1/6">
                <label htmlFor="metri_quadri" className="mb-2 text-sm font-medium text-gray-900">Metri quadri</label>
                <input
                  type="number"
                  id="metri_quadri"
                  name="metri_quadri"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Metri quadri"
                  required
                  value={formData.metri_quadri}
                  onChange={handleChange} />
              </div>
            </div>




            <div>
              <label htmlFor="tipologia" className="mb-2 text-sm font-medium text-gray-900 sr">Tipologia</label>
              <select
                id="tipologia"
                name="tipologia"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={formData.tipologia}
                onChange={handleChange}
              >
                {typesArray.map((types, index) => (
                  <option key={index} value={types}>{types}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="prezzo_notte" className="mb-2 text-sm font-medium text-gray-900 sr">Prezzo notte</label>
              <input
                type="number"
                id="prezzo_notte"
                name="prezzo_notte"
                className="block w-full sm:w-full md:w-full lg:w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Prezzo per notte"
                required
                value={formData.prezzo_notte}
                onChange={handleChange} />
            </div>

            <div className="w-full">
              <label htmlFor="descrizione" className="mb-2 text-sm font-medium text-gray-900 sr">Descrizione</label>
              <textarea
                type="text"
                id="descrizione"
                name="descrizione"
                className="block w-full h-23 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Descrizione"
                required
                value={formData.descrizione}
                onChange={handleChange} />
            </div>
          </div>

          <h2 className="text-2xl text-center lg:text-left font-bold">Seleziona i servizi offerti</h2>
          <div className="overflow-auto h-64 md:h-24 border rounded-sm mx-10 my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
            {services.map(service => (
              <div key={service.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`checkbox-${service.id}`}
                  onChange={(e) => handleCheckboxChange(e, service.id)}
                  className="m-0"
                />
                <label htmlFor={`checkbox-${service.id}`} className="text-sm">{service.nome_servizio}</label>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-5">Carica le immagini</h2>
          <div className="flex flex-col justify-center items-center mb-5">

            <input
              type="file"
              className="hidden"
              name="url"
              multiple
              onChange={handleImageChange}
              id="file-input"
            />

            <label
              htmlFor="file-input"
              className="cursor-pointer bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white rounded-full w-10 h-10 flex justify-center items-center text-2xl my-3 px-10"
            >
              +
            </label>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {thumbnails.map((thumbnail, index) => (
              <img className="w-64" key={index} src={thumbnail} alt={thumbnail} />
            ))}
          </div>


          <div className="flex justify-center mb-5">
            <button
              className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer mb-5" type="submit"
              disabled={!!error}>
              Registra il tuo appartamento
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddApartment

