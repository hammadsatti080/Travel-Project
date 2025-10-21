import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CulturalTravel() {
  const location = useLocation()
  
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '50px' }}>
      <h1>🎭 Cultural Travel</h1>
      <p>Coming from: {location.state?.blogTitle}</p>
      {/* Add your cultural travel content here */}
    </div>
  )
}