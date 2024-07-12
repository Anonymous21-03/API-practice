import React from 'react'
import Weatherapp from './Weatherapp'
import FiveDayForecast from './FiveDayForecast'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Weatherapp />}/>
        <Route path='/fiveday' element={<FiveDayForecast />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
