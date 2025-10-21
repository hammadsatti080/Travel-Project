import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MountainAdventure() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
      minHeight: '100vh', 
      color: 'white',
      padding: '50px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '30px' }}>
        🚀 Mountain Adventures
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '50px' }}>
        Coming from: {location.state?.category || 'Mountain Page'}
      </p>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/mountain')}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1rem',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          ← Back to Mountain
        </button>
        
        {/* Add your adventure content here */}
        <div style={{ marginTop: '50px' }}>
          <h2>Available Adventures</h2>
          <p>Detailed adventure packages and expeditions...</p>
        </div>
      </div>
    </div>
  );
}