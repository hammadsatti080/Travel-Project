import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);

  const { ticketData, type } = location.state || {};

  React.useEffect(() => {
    if (!ticketData) {
      alert('No booking data found. Please select a tour first.');
      navigate('/travel-home');
    }
  }, [ticketData, navigate]);

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if ((paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && 
        (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill all card details');
      return;
    }

    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      navigate('/travel-confirmation', { 
        state: { 
          ticketData: ticketData,
          paymentMethod: paymentMethod,
          paymentId: 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          cardDetails: cardDetails
        } 
      });
      
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <h2 style={{ color: '#1E293B', marginBottom: '20px' }}>No Booking Data Found</h2>
          <p style={{ color: '#64748B', marginBottom: '30px' }}>Please go back and select a tour first.</p>
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
              fontWeight: '600'
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontSize: '2.5rem'
        }}>
          💳 Payment
        </h1>

        <div style={{
          background: '#F8FAFC',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ color: '#1E293B', marginBottom: '20px' }}>📋 Booking Summary</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Tour:</span>
              <span style={{ fontWeight: '600', color: '#1E293B' }}>{ticketData.tourName}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Speciality:</span>
              <span style={{ color: '#1E293B' }}>{ticketData.speciality}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Quantity:</span>
              <span style={{ color: '#1E293B' }}>{ticketData.quantity}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Unit Price:</span>
              <span style={{ color: '#1E293B' }}>${ticketData.unitPrice.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748B' }}>Discount:</span>
              <span style={{ color: '#10B981', fontWeight: '600' }}>{ticketData.discount}% OFF</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              borderTop: '2px solid #E2E8F0',
              paddingTop: '15px',
              fontWeight: 'bold',
              fontSize: '20px',
              color: '#7C3AED'
            }}>
              <span>Total Amount:</span>
              <span>${ticketData.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#1E293B', marginBottom: '20px' }}>💳 Select Payment Method</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { name: 'Credit Card', icon: '💳' },
              { name: 'Debit Card', icon: '💳' },
              { name: 'PayPal', icon: '🌐' },
              { name: 'Bank Transfer', icon: '🏦' }
            ].map(method => (
              <div
                key={method.name}
                onClick={() => setPaymentMethod(method.name)}
                style={{
                  padding: '18px 20px',
                  border: `2px solid ${paymentMethod === method.name ? '#7C3AED' : '#E2E8F0'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: paymentMethod === method.name ? '#F0F4FF' : 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{method.icon}</span>
                <span style={{ 
                  fontWeight: '600', 
                  color: paymentMethod === method.name ? '#7C3AED' : '#1E293B' 
                }}>
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
          <div style={{
            background: '#F8FAFC',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '1px solid #E2E8F0'
          }}>
            <h3 style={{ color: '#1E293B', marginBottom: '20px' }}>🔒 Card Details</h3>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '10px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '10px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading || !paymentMethod}
          style={{
            width: '100%',
            background: loading ? '#9CA3AF' : 
                       !paymentMethod ? '#CBD5E1' : 
                       'linear-gradient(135deg, #7C3AED, #4F46E5)',
            color: 'white',
            border: 'none',
            padding: '18px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: (loading || !paymentMethod) ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Processing Payment...' : `Pay $${ticketData.totalPrice.toFixed(2)}`}
        </button>

        <button
          onClick={() => navigate(-1)}
          style={{
            width: '100%',
            background: 'transparent',
            color: '#64748B',
            border: '2px solid #E2E8F0',
            padding: '15px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '15px'
          }}
        >
          ← Back to Previous
        </button>
      </div>
    </div>
  );
};

export default Payment;