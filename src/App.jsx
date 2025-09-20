import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLoansPage from './pages/HomeLoansPage'
import PropertiesPage from './pages/PropertiesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-loans" element={<HomeLoansPage />} />
      <Route path="/properties" element={<PropertiesPage />} />
    </Routes>
  )
}

export default App
