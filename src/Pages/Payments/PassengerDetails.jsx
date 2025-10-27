import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PassengerDetails = () => {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([{
    name: '',
    age: '',
    gender: '',
    idNumber: ''
  }]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const addPassenger = () => {
    setPassengers([...passengers, {
      name: '',
      age: '',
      gender: '',
      idNumber: ''
    }]);
  };

  const removePassenger = (index) => {
    if (passengers.length > 1) {
      const updated = passengers.filter((_, i) => i !== index);
      setPassengers(updated);
    }
  };

  const updatePassenger = (index, field, value) => {
    const updated = passengers.map((passenger, i) => 
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = passengers.every(p => 
      p.name && p.age && p.gender && p.idNumber
    );
    
    if (!isValid) {
      alert('Please fill all passenger details');
      return;
    }

    const ticketData = {
      tourName: "Custom Booking",
      speciality: "Multi-Passenger",
      quantity: passengers.length,
      unitPrice: 500,
      discount: 10,
      totalPrice: (500 * passengers.length * 0.9),
      passengers: passengers
    };

    navigate('/travel-payment', { state: { ticketData, type: 'passenger' } });
  };

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
          fontSize: '2.5rem',
          marginBottom: '10px'
        }}>
          👤 Passenger Details
        </h1>
        
        <p style={{
          textAlign: 'center',
          color: '#64748B',
          marginBottom: '30px',
          fontSize: '1.1rem'
        }}>
          Please provide details for all passengers
        </p>

        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div key={index} style={{
              background: '#F8FAFC',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '20px',
              border: '1px solid #E2E8F0',
              position: 'relative'
            }}>
              {passengers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePassenger(index)}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#EF4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  ×
                </button>
              )}
              
              <h3 style={{
                color: '#1E293B',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  background: '#7C3AED',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px'
                }}>
                  {index + 1}
                </span>
                Passenger {index + 1}
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={passenger.name}
                    onChange={(e) => updatePassenger(index, 'name', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter age"
                    min="1"
                    max="120"
                    value={passenger.age}
                    onChange={(e) => updatePassenger(index, 'age', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Gender *
                  </label>
                  <select
                    required
                    value={passenger.gender}
                    onChange={(e) => updatePassenger(index, 'gender', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      background: 'white'
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    ID Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Passport/ID number"
                    value={passenger.idNumber}
                    onChange={(e) => updatePassenger(index, 'idNumber', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addPassenger}
            style={{
              background: 'transparent',
              color: '#7C3AED',
              border: '2px dashed #7C3AED',
              padding: '15px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '20px'
            }}
          >
            + Add Another Passenger
          </button>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              type="submit"
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                color: 'white',
                border: 'none',
                padding: '15px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Continue to Payment →
            </button>

            <button
              type="button"
              onClick={() => navigate('/travel-tours')}
              style={{
                background: 'white',
                color: '#64748B',
                border: '2px solid #E2E8F0',
                padding: '15px 25px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Browse Tours
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassengerDetails;