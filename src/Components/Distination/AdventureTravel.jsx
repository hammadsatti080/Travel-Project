import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AdventureTravel() {
  const location = useLocation()
  
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '50px' }}>
      <h1>🏔️ Adventure Travel</h1>
      <p>Coming from: {location.state?.blogTitle}</p>
      {/* Add your adventure travel content here */}
    </div>
  )
}