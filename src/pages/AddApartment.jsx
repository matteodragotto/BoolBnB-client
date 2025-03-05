import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const AddApartment = () => {

  const { addNewApartment, apartments, fetchApartments, services, selectedServices, setSelectedServices, fetchServices } = useGlobalContext()

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

    addNewApartment(formData, images, selectedServices)
      .then(apartmentsId => {
        console.log('Appartamento creato con id:', apartmentsId);
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

      setSelectedServices((prevSelected) => [...prevSelected, id]);
    } else {

      setSelectedServices((prevSelected) =>
        prevSelected.filter((selectedId) => selectedId !== id)
      );
    }
  };

  useEffect(() => {
    fetchApartments()
    fetchServices()
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300 mt-12 mb-12">
      <h2 className="lg:text-5xl text-3xl font-bold text-center">INSERISCI IL TUO APPARTAMENTO</h2>
      <p className="text-lg text-center pb-6">INIZIA ANCHE TU IL PERCORSO PER DIVENTARE HOST!</p>

      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold mb-4">Dati Proprietario</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 border border-gray-300 p-4 rounded-lg">
          <input type="text" name="nome" placeholder="Nome" required className="input-style" value={formData.nome} onChange={handleChange} />
          <input type="text" name="cognome" placeholder="Cognome" required className="input-style" value={formData.cognome} onChange={handleChange} />
          <input type="text" name="numero_telefono" placeholder="Cellulare" required className="input-style" value={formData.numero_telefono} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required className="input-style" value={formData.email} onChange={handleChange} />
          <input type="text" name="lingue_parlate" placeholder="Lingue parlate" required className="input-style" value={formData.lingue_parlate} onChange={handleChange} />
        </div>

        <h3 className="text-2xl font-semibold mb-4">Dati Appartamento</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 border border-gray-300 p-4 rounded-lg">
          <textarea name="titolo" placeholder="Titolo" required className="input-style h-24 text-lg font-semibold" value={formData.titolo} onChange={handleChange}></textarea>
          <select name="tipologia" required className="input-style" value={formData.tipologia} onChange={handleChange}>
            {typesArray.map((type, index) => (<option key={index} value={type}>{type}</option>))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 border border-gray-300 p-4 rounded-lg">
          <div>
            <label className="block text-sm font-medium">Stanze</label>
            <input type="number" name="numero_stanze" required className="input-style text-sm" value={formData.numero_stanze} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium">Letti</label>
            <input type="number" name="numero_letti" required className="input-style text-sm" value={formData.numero_letti} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium">Bagni</label>
            <input type="number" name="numero_bagni" required className="input-style text-sm" value={formData.numero_bagni} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium">Metri quadri</label>
            <input type="number" name="metri_quadri" required className="input-style text-sm" value={formData.metri_quadri} onChange={handleChange} />
          </div>
        </div>

        <input type="text" name="indirizzo_completo" placeholder="Indirizzo" required className="input-style w-full mb-4 border border-gray-300 p-2 rounded-lg" value={formData.indirizzo_completo} onChange={handleChange} />

        <h3 className="text-2xl font-semibold mb-4">Servizi Offerti</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6 border border-gray-300 p-4 rounded-lg">
          {services.map(service => (
            <label key={service.id} className="flex items-center gap-2">
              <input type="checkbox" onChange={(e) => handleCheckboxChange(e, service.id)} />
              {service.nome_servizio}
            </label>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Carica le immagini</h3>
        <input type="file" name="url" multiple onChange={handleImageChange} className="hidden" id="file-input" />
        <label htmlFor="file-input" className="cursor-pointer bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white px-4 py-2 rounded-lg">+</label>
        <div className="flex flex-wrap gap-4 mt-4">
          {thumbnails.map((thumbnail, index) => (<img key={index} src={thumbnail} alt="Anteprima" className="w-32 h-32 object-cover rounded-lg border border-gray-300" />))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Descrizione</h3>
        <textarea name="descrizione" placeholder="Descrizione" required className="input-style h-32 text-base w-full border border-gray-300 p-2 rounded-lg" value={formData.descrizione} onChange={handleChange}></textarea>

        <button type="submit" className="w-full mt-6 bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-lg hover:opacity-90 transition">Registra il tuo appartamento</button>
      </form>
    </div>

  )
}
export default AddApartment;