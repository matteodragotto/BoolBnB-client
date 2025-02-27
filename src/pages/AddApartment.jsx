import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const AddApartment = () => {

  const { addNewApartment } = useGlobalContext()

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

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewApartment(formData)
    navigate('/')
  };

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
    console.log(formData);

  };

  return (
    <div>
      <h2 className="mb-5">Inserisci i dati del tuo appartamento e inizia anche tu il percorso di host!</h2>

      <form action='#' className="mx-auto " onSubmit={handleSubmit}>
        <h2>Dati Proprietario</h2>
        <div className="flex gap-4 mb-5">
          <div>
            <label htmlFor="nome" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Nome</label>
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
            <label htmlFor="Cognome" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cognome</label>
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
            <label htmlFor="Telefono" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cellulare</label>
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

        </div>

        <h2>Dati Appartamento</h2>
        <div className="flex flex-wrap gap-4 mb-5">
          <div>
            <label htmlFor="titolo" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Titolo</label>
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
            <label htmlFor="descrizione" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Descrizione</label>
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

          <div>
            <label htmlFor="numero_stanze" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Numero stanze</label>
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
            <label htmlFor="numero_letti" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Numero letti</label>
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
            <label htmlFor="numero_bagni" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Numero bagni</label>
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
            <label htmlFor="metri_quadri" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Metri quadri</label>
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
            <label htmlFor="indirizzo_completo" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Indirizzo Completo</label>
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
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
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

          <div>
            <label htmlFor="tipologia" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Tipologia</label>
            <select
              type='text'
              id="tipologia"
              name="tipologia"
              className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={formData.tipologia}
              onChange={handleChange}
            >
              <option value="Monolocale">Monolocale</option>
              <option value="Bilocale">Bilocale</option>
              <option value="Trilocale">Trilocale</option>
              <option value="Quadrilocale">Quadrilocale</option>
            </select>
          </div>

          <div>
            <label htmlFor="prezzo_notte" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Prezzo notte</label>
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
        </div>

        <h2>Carica le immagini</h2>
        {/* <div className="flex flex-wrap gap-4 mb-5 form-group">
          <input
            type="file"
            className="form-control my-3"
            name="url"
            multiple
            onChange={handleImageChange}
          />
          {thumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt={thumbnail} />
          ))}
        </div> */}

        <button className="bg-gradient-to-r from-[#AA895F] to-[#708F96] text-white p-3 rounded-full hover:scale-105 transition duration-300 lg:w-64 border border-white cursor-pointer" type="submit">Registra il tuo appartamento</button>
      </form>

    </div>

  )
}

export default AddApartment