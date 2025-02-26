import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react"
import "rc-slider/assets/index.css"
import { set } from "zod"
import Slider from "rc-slider"

const SearchFilters = () => {

  const { priceMin, setPriceMin, priceMax, setPriceMax, roomsMin, setRoomsMin, roomsMax, setRoomsMax, searchApartments } = useGlobalContext()

  const [range, setRange] = useState([10, 1000])

  useEffect(() => {
    searchApartments()
    console.log(priceMin);

  }, [priceMin, priceMax, roomsMin, roomsMax])

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
      {/* <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Prezzo Minimo:</label>
        <input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          placeholder="Min €"
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AA895F] focus:border-[#AA895F]"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-700 mb-1">Prezzo Massimo:</label>
        <input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          placeholder="Max €"
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AA895F] focus:border-[#AA895F]"
        />
      </div> */}

      <div className="flex flex-col mt-4">
        <label className="text-sm font-bold text-gray-700 mb-1">Nr. Min Stanze:</label>
        <select
          value={roomsMin}
          onChange={(e) => setRoomsMin(Number(e.target.value))}
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-sm font-bold text-gray-700 mb-1">Nr. Max Stanze:</label>
        <select
          value={roomsMax}
          onChange={(e) => setRoomsMax(Number(e.target.value))}
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-[#AA895F] focus:border-[#AA895F]"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Filtra per prezzo a notte</h3>
        <Slider
          range
          min={10}
          max={1000}
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