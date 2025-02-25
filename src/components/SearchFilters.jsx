import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SearchFilters = () => {

  const { priceMin, setPriceMin, priceMax, setPriceMax, roomsMin, setRoomsMin, roomsMax, setRoomsMax, searchApartments } = useGlobalContext()

  const removeFilters = () => {
    setPriceMin('');
    setPriceMax('');
    setRoomsMin(1);
    setRoomsMax(3);
    searchApartments()
  };

  const applyFilters = () => {
    searchApartments();
  };

  useEffect(() => {
    console.log('Prezzo Minimo:', priceMin);
    console.log('Prezzo Massimo:', priceMax);
    console.log('Numero Minimo di Stanze:', roomsMin);
    console.log('Numero Massimo di Stanze:', roomsMax);
  }, [priceMin, priceMax, roomsMin, roomsMax])

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

      <button className="p-3 bg-gray-500 rounded-lg cursor-pointer" onClick={applyFilters}>Applica Filtri</button>
      <button className="p-3 bg-gray-500 rounded-lg cursor-pointer" onClick={removeFilters}>Rimuovi Filtri</button>

    </div>
  )
}

export default SearchFilters