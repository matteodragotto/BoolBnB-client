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

  let typesArray = [];

  const typesListGeneration = apartments.map(apartment => apartment.tipologia);

  typesArray = [...new Set(typesListGeneration)];


  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div className="text-center">
      <h2 className="lg:text-5xl text-3xl font-bold pb-6 text-center">INSERISCI IL TUO APPARTAMENTO E INIZIA ANCHE TU IL PERCORSO PER DIVENTARE HOST!</h2>

      <form action='#' className="mx-auto " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Dati Proprietario</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <div>
            <label htmlFor="nome" className="mb-2 text-sm font-medium text-gray-900 sr">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange} />
          </div>

          <div className="border rounded-sm mx-10 my-5 grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
            {languages.map(language => (
              <div key={language.id}>
                <input
                  type="checkbox"
                  id={`checkbox-${language.id}`}
                  onChange={(e) => handleLanguages(e, language.id)}
                />
                <label htmlFor={`checkbox-${language.id}`}>{language.lingua}</label>
              </div>
            ))}
          </div>

        </div>

        <h2 className="text-2xl font-bold mb-2">Dati Appartamento</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <div>
            <label htmlFor="titolo" className="mb-2 text-sm font-medium text-gray-900 sr">Titolo</label>
            <input
              type="text"
              id="titolo"
              name="titolo"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Titolo"
              required
              value={formData.titolo}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="numero_stanze" className="mb-2 text-sm font-medium text-gray-900 sr">Numero stanze</label>
            <input
              type="number"
              id="numero_stanze"
              name="numero_stanze"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numero stanze"
              required
              value={formData.numero_stanze}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="numero_letti" className="mb-2 text-sm font-medium text-gray-900 sr">Numero letti</label>
            <input
              type="number"
              id="numero_letti"
              name="numero_letti"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numero letti"
              required
              value={formData.numero_letti}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="numero_bagni" className="mb-2 text-sm font-medium text-gray-900 sr">Numero bagni</label>
            <input
              type="number"
              id="numero_bagni"
              name="numero_bagni"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numero bagni"
              required
              value={formData.numero_bagni}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="metri_quadri" className="mb-2 text-sm font-medium text-gray-900 sr">Metri quadri</label>
            <input
              type="number"
              id="metri_quadri"
              name="metri_quadri"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Metri quadri"
              required
              value={formData.metri_quadri}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="indirizzo_completo" className="mb-2 text-sm font-medium text-gray-900 sr">Indirizzo Completo</label>
            <input
              type="text"
              id="indirizzo_completo"
              name="indirizzo_completo"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Indirizzo Completo"
              required
              value={formData.indirizzo_completo}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="tipologia" className="mb-2 text-sm font-medium text-gray-900 sr">Tipologia</label>
            <select
              id="tipologia"
              name="tipologia"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prezzo per notte"
              required
              value={formData.prezzo_notte}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="descrizione" className="mb-2 text-sm font-medium text-gray-900 sr">Descrizione</label>
            <textarea
              type="text"
              id="descrizione"
              name="descrizione"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descrizione"
              required
              value={formData.descrizione}
              onChange={handleChange} />
          </div>
        </div>

        <h2 className="text-2xl font-bold">Seleziona i servizi offerti</h2>
        <div className="border rounded-sm mx-10 my-5 grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
          {services.map(service => (
            <div key={service.id}>
              <input
                type="checkbox"
                id={`checkbox-${service.id}`}
                onChange={(e) => handleCheckboxChange(e, service.id)}
              />
              <label htmlFor={`checkbox-${service.id}`}>{service.nome_servizio}</label>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">Carica le immagini</h2>
        <div className="flex flex-col justify-center mb-5 form-group">
          <div className="flex flex-grow justify-center">
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

          <div className="flex flex-wrap justify-center gap-4">
            {thumbnails.map((thumbnail, index) => (
              <img className="w-64" key={index} src={thumbnail} alt={thumbnail} />
            ))}
          </div>

        </div>

        <button className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer mb-5" type="submit">Registra il tuo appartamento</button>
      </form>

    </div>

  )
}

export default AddApartment

