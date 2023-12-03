import React from "react"
import { useState } from "react"

let Countries = ({ data }) => {
  let [info, setInfo] = useState(false)

  return (
    <>
      <div
        onClick={() => {
          setInfo(!info)
        }}
      >
        <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} />

        {info && (
          <div className="countries-p">
            <p>
              <b>Country:</b>
              {data.name.common}
            </p>
            <p>
              <b>Capital:</b> {data.capital}
            </p>
            <p>
              <b>Population:</b> {data.population}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Countries
