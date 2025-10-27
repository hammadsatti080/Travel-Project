import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticketData, paymentMethod, paymentId } = location.state || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!ticketData) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h2>No Confirmation Data Found</h2>
          <p>Please complete a booking first.</p>
          <button
            onClick={() => navigate('/travel-home')}
            style={{
              background: '#7C3AED',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px'
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const bookingRef = 'TKT-' + Date.now().toString(36).toUpperCase();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#10B981',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: '36px'
        }}>
          ✅
        </div>
        
        <h1 style={{ 
          color: '#065F46', 
          marginBottom: '10px',
          fontSize: '2.5rem'
        }}>
          Payment Successful!
        </h1>
        
        <p style={{ 
          color: '#64748B', 
          fontSize: '18px', 
          marginBottom: '30px'
        }}>
          Your booking has been confirmed. E-tickets and booking details have been sent to your email.
        </p>

        <div style={{
          background: '#F0FDF4',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#065F46', marginBottom: '20px' }}>🎫 Booking Details</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Tour:</span>
              <span style={{ fontWeight: '600' }}>{ticketData.tourName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Speciality:</span>
              <span>{ticketData.speciality}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Quantity:</span>
              <span>{ticketData.quantity}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Amount Paid:</span>
              <span style={{ fontWeight: '600', color: '#059669' }}>${ticketData.totalPrice.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Payment Method:</span>
              <span>{paymentMethod}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Payment ID:</span>
              <span style={{ fontFamily: 'monospace' }}>{paymentId}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Booking Reference:</span>
              <span style={{ color: '#7C3AED', fontWeight: '600', fontFamily: 'monospace' }}>{bookingRef}</span>
            </div>
          </div>
        </div>

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
              cursor: 'pointer'
            }}
          >
            🌍 Book Another Tour
          </button>
          
          <button
            onClick={() => window.print()}
            style={{
              background: 'white',
              color: '#64748B',
              border: '2px solid #E2E8F0',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🖨️ Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;