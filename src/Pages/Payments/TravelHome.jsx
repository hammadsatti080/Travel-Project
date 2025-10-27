import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TravelHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontSize: '2.5rem',
          marginBottom: '20px'
        }}>
          🎫 Travel Booking System
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#64748B',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Book your dream tours with amazing discounts and seamless experience
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/travel-tours')}
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.4)';
            }}
          >
            🌍 Explore Tours
          </button>

          <button
            onClick={() => navigate('/travel-passenger-details')}
            style={{
              background: 'white',
              color: '#7C3AED',
              border: '2px solid #7C3AED',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#7C3AED';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#7C3AED';
            }}
          >
            👤 Book Tickets
          </button>
        </div>

        <div style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          textAlign: 'left'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚀</div>
            <h3 style={{ color: '#1E293B', marginBottom: '5px' }}>Fast Booking</h3>
            <p style={{ color: '#64748B', fontSize: '14px' }}>Quick and easy booking process</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
            <h3 style={{ color: '#1E293B', marginBottom: '5px' }}>Best Prices</h3>
            <p style={{ color: '#64748B', fontSize: '14px' }}>Exclusive discounts and offers</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔒</div>
            <h3 style={{ color: '#1E293B', marginBottom: '5px' }}>Secure Payment</h3>
            <p style={{ color: '#64748B', fontSize: '14px' }}>Safe and secure transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelHome;