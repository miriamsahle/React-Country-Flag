import { useState } from "react"
import Continent from "./Continent"
import "./Continent.css"

function App() {
  let [show, setShow] = useState(false)

  return (
    <>
      <h1 className="container">React Country Flags Practice Application</h1>
      <div className="container">
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
        {show && <Continent />}
      </div>
    </>
  )
}

export default App
