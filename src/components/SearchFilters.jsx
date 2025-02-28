import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react"
import "rc-slider/assets/index.css"
import Slider from "rc-slider"

const SearchFilters = () => {

  const { priceMin, setPriceMin, priceMax, setPriceMax, roomsMin, setRoomsMin, roomsMax, setRoomsMax, searchApartments, bedsMin, setBedsMin, type, setType, apartments, fetchApartments } = useGlobalContext()

  let typesArray = [];
  let pricesArray = []

  const typesListGeneration = apartments?.map(apartment => apartment.tipologia);
  const pricesListGeneration = apartments?.map(apartment => Number(apartment.prezzo_notte));

  typesArray = [...new Set(typesListGeneration)];
  pricesArray = [...new Set(pricesListGeneration)];

  const minPrice = Math.min(...pricesArray)
  const maxPrice = Math.max(...pricesArray)

  const [range, setRange] = useState([minPrice, maxPrice])

  useEffect(() => {
    fetchApartments()
    searchApartments()
  }, [priceMin, priceMax, roomsMin, roomsMax, bedsMin, type, minPrice, maxPrice])

  useEffect(() => {
    if (apartments && apartments.length > 0) {
      const pricesListGeneration = apartments.map(apartment => Number(apartment.prezzo_notte));
      const pricesArray = [...new Set(pricesListGeneration)];
      const minPrice = Math.min(...pricesArray);
      const maxPrice = Math.max(...pricesArray);
      setRange([minPrice, maxPrice]);
    }
  }, [apartments]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setPriceMin(range[0])
    setPriceMax(range[1])
  }
  const handleRange = (values) => {
    setRange(values)
    setPriceMin(values[0])
    setPriceMax(values[1])
  }

  return (

    <div className="flex flex-wrap gap-4 justify-center mt-4 p-4 bg-white shadow-md rounded-lg">

      <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Tipologia:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-36 p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
          style={{
            backgroundImage: 'linear-gradient(to right, #D0B18D, #A6B8C0)',
            color: 'black',
          }}>
          <option value="">Non specificata</option>
          {typesArray.map((types, index) => (
            <option key={index} value={types}>{types}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Stanze Min:</label>
        <input
          value={roomsMin}
          onChange={(e) => setRoomsMin(Number(e.target.value))}
          type="number"
          min={1}
          max={20}
          step={1}
          className="w-19 p-1.5 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
          style={{
            backgroundImage: 'linear-gradient(to right, #D0B18D, #A6B8C0)',
            color: 'black',
          }}>
        </input>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Stanze Max:</label>
        <input
          value={roomsMax}
          onChange={(e) => setRoomsMax(Number(e.target.value))}
          type="number"
          min={1}
          max={20}
          step={1}
          className="w-19 p-1.5 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
          style={{
            backgroundImage: 'linear-gradient(to right, #D0B18D, #A6B8C0)',
            color: 'black',
          }}>
        </input>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Nr. Letti:</label>
        <input
          value={bedsMin}
          onChange={(e) => setBedsMin(Number(e.target.value))}
          type="number"
          min={1}
          max={20}
          step={1}
          className="w-19 p-1.5 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
          style={{
            backgroundImage: 'linear-gradient(to right, #D0B18D, #A6B8C0)',
            color: 'black',
          }}>
        </input>
      </div>


      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg"
      >
        <h3 className="text-sm font-semibold text-gray-700 mb-0">Filtra per prezzo a notte</h3>
        <Slider
          range
          min={minPrice}
          max={maxPrice}
          step={10}
          value={range}
          onChange={handleRange}
          className="style-slider"
        />
        <div className="flex justify-between text-sm text-gray-700 font-medium mt-1">
          <span>{range[0]}€</span>
          <span>{range[1]}€</span>
        </div>
      </div>

    </div>
  )
}

export default SearchFilters