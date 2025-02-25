import { useGlobalContext } from "../context/GlobalContext";

const SearchFilters = () => {

  const { priceMin, setPriceMin, priceMax, setPriceMax, roomsMin, setRoomsMin, roomsMax, setRoomsMax, searchApartments } = useGlobalContext()

  return (
    <div className="flex gap-3 justify-center mt-2">
      <div>
        <label>Prezzo Minimo:</label>
        <input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          placeholder="Inserisci il prezzo minimo"
        />
      </div>

      <div>
        <label>Prezzo Massimo:</label>
        <input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          placeholder="Inserisci il prezzo massimo"
        />
      </div>

      <div>
        <label>Numero Minimo di Stanze:</label>
        <select
          value={roomsMin}
          onChange={(e) => setRoomsMin(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div>
        <label>Numero Massimo di Stanze:</label>
        <select
          value={roomsMax}
          onChange={(e) => setRoomsMax(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button className="p-3 bg-gray-500" onClick={searchApartments()}>Applica Filtri</button>
    </div>
  )
}

export default SearchFilters