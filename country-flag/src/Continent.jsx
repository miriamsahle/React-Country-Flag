import React, { useState } from "react"
import Countries from "./Countries"
import "./Continent.css"

function Continent() {
  let [countries, setCountries] = useState([])
  let [selectedContinent, setSelectedContinent] = useState("")

  let urls = {
    Africa: "https://restcountries.com/v3.1/region/africa",
    Asia: "https://restcountries.com/v3.1/region/asia",
    Europe: "https://restcountries.com/v3.1/region/europe",
  }

  let handleContinentChange = (e) => {
    setSelectedContinent(e.target.value)
  }

  let fetchCountries = async () => {
    if (selectedContinent && urls[selectedContinent]) {
      let res = await fetch(urls[selectedContinent])
      let data = await res.json()
      setCountries(data)
    }
  }

  return (
    <div>
      <select id="continents" onChange={handleContinentChange}>
        <option value="">Continents</option>
        {Object.entries(urls).map(([continent, url]) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <button onClick={fetchCountries}>Get Countries</button>
      {countries.length > 0 && (
        <div className="countries">
          {countries.map((country, index) => (
            <Countries key={index} data={country} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Continent
