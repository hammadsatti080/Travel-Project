import React, { useState } from 'react';

const PassengerDetails = () => {
  const [passengers, setPassengers] = useState([{
    id: Date.now(),
    fullName: '',
    cnic: '',
    passport: '',
    contactNumber: '',
    gender: '',
    age: ''
  }]);

  const [currentStep, setCurrentStep] = useState('passenger');
  const [loading, setLoading] = useState(false);

  const busDetails = {
    from: 'Karachi',
    to: 'Lahore',
    date: '2024-12-25',
    time: '08:00 AM',
    busType: 'Luxury AC',
    selectedSeats: ['A1', 'A2'],
    baseFare: 50,
    taxes: 10,
    totalFare: 110,
    duration: '18 hours',
    busNumber: 'BUS-2024'
  };

  const addPassenger = () => {
    setPassengers([...passengers, {
      id: Date.now() + Math.random(),
      fullName: '',
      cnic: '',
      passport: '',
      contactNumber: '',
      gender: '',
      age: ''
    }]);
  };

  const removePassenger = (id) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter(p => p.id !== id));
    }
  };

  const updatePassenger = (id, field, value) => {
    setPassengers(passengers.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const validateForm = () => {
    const errors = [];
    
    passengers.forEach((passenger, index) => {
      if (!passenger.fullName.trim()) {
        errors.push(`Passenger ${index + 1}: Full name is required`);
      }
      if (!passenger.contactNumber.trim()) {
        errors.push(`Passenger ${index + 1}: Contact number is required`);
      }
      if (!passenger.gender) {
        errors.push(`Passenger ${index + 1}: Gender is required`);
      }
      if (passenger.cnic && !/^\d{5}-\d{7}-\d{1}$/.test(passenger.cnic)) {
        errors.push(`Passenger ${index + 1}: CNIC format is invalid (XXXXX-XXXXXXX-X)`);
      }
      if (passenger.contactNumber && !/^03\d{9}$/.test(passenger.contactNumber)) {
        errors.push(`Passenger ${index + 1}: Contact number must be 11 digits starting with 03`);
      }
    });

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setCurrentStep('review');
  };

  const handleConfirm = async () => {
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setCurrentStep('confirmation');
  };

  const steps = [
    { id: 'passenger', title: 'Passenger Details', icon: '👤' },
    { id: 'review', title: 'Review Booking', icon: '📋' },
    { id: 'confirmation', title: 'Confirmation', icon: '✅' }
  ];

  const ProgressBar = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '40px',
      position: 'relative'
    }}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: currentStep === step.id ? '#7C3AED' : 
                         steps.findIndex(s => s.id === currentStep) > index ? '#7C3AED' : '#E2E8F0',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: currentStep === step.id ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none'
            }}>
              {step.icon}
            </div>
            <span style={{
              marginTop: '8px',
              fontSize: '14px',
              fontWeight: currentStep === step.id ? '600' : '400',
              color: currentStep === step.id ? '#7C3AED' : '#64748B'
            }}>
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div style={{
              width: '100px',
              height: '3px',
              background: steps.findIndex(s => s.id === currentStep) > index ? '#7C3AED' : '#E2E8F0',
              margin: '0 10px',
              transition: 'all 0.3s ease'
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (currentStep === 'review') {
    return (
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          marginTop: '20px'
        }}>
          <ProgressBar />
          
          <h2 style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#1E293B',
            fontSize: '32px',
            fontWeight: '700'
          }}>
            📋 Review Your Booking
          </h2>

          <div style={{ display: 'grid', gap: '25px' }}>
            {/* Journey Details */}
            <div style={{
              background: '#F8FAFC',
              padding: '25px',
              borderRadius: '15px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>🚌</span>
                Journey Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div>
                  <strong>Route:</strong> {busDetails.from} → {busDetails.to}
                </div>
                <div>
                  <strong>Date & Time:</strong> {busDetails.date} | {busDetails.time}
                </div>
                <div>
                  <strong>Bus Type:</strong> {busDetails.busType}
                </div>
                <div>
                  <strong>Duration:</strong> {busDetails.duration}
                </div>
                <div>
                  <strong>Bus Number:</strong> {busDetails.busNumber}
                </div>
                <div>
                  <strong>Seats:</strong> {busDetails.selectedSeats.join(', ')}
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div style={{
              background: '#F8FAFC',
              padding: '25px',
              borderRadius: '15px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>👥</span>
                Passenger Details
              </h3>
              {passengers.map((passenger, index) => (
                <div key={passenger.id} style={{
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ fontSize: '18px', color: '#1E293B' }}>
                        {passenger.fullName}
                      </strong>
                      <div style={{ marginTop: '8px', color: '#64748B', fontSize: '14px' }}>
                        📞 {passenger.contactNumber} 
                        {passenger.cnic && ` • 🆔 ${passenger.cnic}`}
                        {passenger.passport && ` • 🛂 ${passenger.passport}`}
                        {passenger.gender && ` • ⚧ ${passenger.gender}`}
                        {passenger.age && ` • 🎂 ${passenger.age} years`}
                      </div>
                    </div>
                    <div style={{
                      background: '#7C3AED',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Seat {busDetails.selectedSeats[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fare Breakdown */}
            <div style={{
              background: '#F8FAFC',
              padding: '25px',
              borderRadius: '15px',
              border: '1px solid #E2E8F0'
            }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>💰</span>
                Fare Breakdown
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Base Fare ({passengers.length} passengers × ${busDetails.baseFare})</span>
                  <span>${busDetails.baseFare * passengers.length}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Taxes & Service Charges</span>
                  <span>${busDetails.taxes}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '2px solid #E2E8F0',
                  paddingTop: '15px',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#7C3AED'
                }}>
                  <span>Total Amount</span>
                  <span>${busDetails.totalFare}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setCurrentStep('passenger')}
              disabled={loading}
              style={{
                background: '#64748B',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '12px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                opacity: loading ? 0.6 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              ← Back to Edit
            </button>
            <button
              onClick={handleConfirm}
              disabled={loading}
              style={{
                background: loading ? '#94A3B8' : '#7C3AED',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                borderRadius: '12px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Processing...
                </>
              ) : (
                'Confirm & Pay Now'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'confirmation') {
    return (
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '50px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          textAlign: 'center',
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
          
          <h2 style={{
            margin: '0 0 15px 0',
            color: '#1E293B',
            fontSize: '32px',
            fontWeight: '700'
          }}>
            Booking Confirmed!
          </h2>
          
          <p style={{
            color: '#64748B',
            fontSize: '18px',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Your tickets have been booked successfully. E-tickets and booking details have been sent to your email.
          </p>

          <div style={{
            background: '#F0FDF4',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '30px',
            border: '1px solid #BBF7D0'
          }}>
            <strong style={{ color: '#059669' }}>Booking Reference:</strong> 
            <div style={{ 
              fontFamily: 'monospace', 
              fontSize: '18px', 
              color: '#1E293B',
              marginTop: '5px'
            }}>
              BUS-{Date.now().toString(36).toUpperCase()}
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentStep('passenger');
              setPassengers([{
                id: Date.now(),
                fullName: '',
                cnic: '',
                passport: '',
                contactNumber: '',
                gender: '',
                age: ''
              }]);
            }}
            style={{
              background: '#7C3AED',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
            }}
          >
            🎫 Book Another Ticket
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        marginTop: '20px'
      }}>
        <ProgressBar />
        
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1E293B',
          fontSize: '32px',
          fontWeight: '700'
        }}>
          👤 Passenger Details
        </h2>

        {/* Bus Summary Card */}
        <div style={{
          background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
          color: 'white',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>🚌 Your Journey</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>ROUTE</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>{busDetails.from} → {busDetails.to}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>DATE & TIME</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>{busDetails.date} | {busDetails.time}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>SEATS</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>{busDetails.selectedSeats.join(', ')}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>TOTAL FARE</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>${busDetails.totalFare}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div key={passenger.id} style={{
              border: '1px solid #E2E8F0',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '20px',
              background: '#F8FAFC',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h4 style={{ 
                  margin: 0, 
                  color: '#1E293B',
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
                </h4>
                {passengers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePassenger(passenger.id)}
                    style={{
                      background: '#EF4444',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    🗑️ Remove
                  </button>
                )}
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
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
                    value={passenger.fullName}
                    onChange={(e) => updatePassenger(passenger.id, 'fullName', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    placeholder="Enter full name"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#7C3AED';
                      e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
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
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={passenger.contactNumber}
                    onChange={(e) => updatePassenger(passenger.id, 'contactNumber', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    placeholder="03XX-XXXXXXX"
                    pattern="03\d{9}"
                    title="Please enter a valid 11-digit Pakistani number starting with 03"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    CNIC
                  </label>
                  <input
                    type="text"
                    placeholder="XXXXX-XXXXXXX-X"
                    value={passenger.cnic}
                    onChange={(e) => updatePassenger(passenger.id, 'cnic', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    pattern="\d{5}-\d{7}-\d{1}"
                    title="CNIC format: XXXXX-XXXXXXX-X"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Passport
                  </label>
                  <input
                    type="text"
                    value={passenger.passport}
                    onChange={(e) => updatePassenger(passenger.id, 'passport', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    placeholder="Passport number"
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
                    onChange={(e) => updatePassenger(passenger.id, 'gender', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23374151' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 15px center',
                      backgroundSize: '8px 10px'
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontWeight: '600',
                    color: '#374151'
                  }}>
                    Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={passenger.age}
                    onChange={(e) => updatePassenger(passenger.id, 'age', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      background: 'white'
                    }}
                    placeholder="Age"
                  />
                </div>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
            <button
              type="button"
              onClick={addPassenger}
              style={{
                background: '#6B7280',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#4B5563';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#6B7280';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              👤 Add Passenger
            </button>

            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? '#9CA3AF' : '#7C3AED',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                borderRadius: '10px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
                }
              }}
            >
              {loading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Processing...
                </>
              ) : (
                'Continue to Review →'
              )}
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default PassengerDetails;