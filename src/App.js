import React, { useState, useEffect } from 'react'

import './App.css'
import Hotel from './components/Hotel'
import LoadingMask from './components/LoadingMask'

const App = () => {
  const [hotels, setHotels] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('api/hotels')
        .then((response) => response.json())
        .then((data) => {setHotels(data); setIsLoading(false)})
        .catch((err) => console.error(err))
    
  }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>
      {isLoading && <LoadingMask/>}
      {hotels.length !== 0 && hotels.map((hotel, index) => <Hotel key={index} hotel={hotel}/>)}

    </div>
  )
}

export default App
