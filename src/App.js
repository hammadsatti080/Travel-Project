// src/App.js
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Publicpages/Navbar";
import Homepage from "./Pages/Homepage";
import Tour from "./Pages/Tour";
import Places from "./Pages/Places";
import Footer from "./Publicpages/Footer";
import ContactPage from "./Publicpages/ContactPage";
import About from "./Pages/About";
import Distination from "./Pages/Distination";
import Deal from "./Pages/Deal";
import Blogs from "./Pages/Blogs";
import Mountains from "./Pages/Mountains";
import AdventureTravel from "./Components/Distination/AdventureTravel";
import Luxary from "./Pages/Luxary";
import TrailPage from "./Components/Adventure/TrailPage";
import MountainAdventure from "./Components/Adventure/MountainAdventure";
import Culture from "./Pages/Culture";
import Beachparadise from "./Pages/Explore/Beachparadise";
import Citylightstour from "./Pages/Explore/Citylightstour";
import Desertescape from "./Pages/Explore/Desertescape";
import Mountainadventure from "./Pages/Explore/Mountainadventure";
import Aboutsec from "./Components/Explore/Citylight/Aboutsec";
import Overseaterminal from "./Components/Explore/Terminal/Overseaterminal";
import Pakistanterminal from "./Components/Explore/Terminal/Pakistanterminal";
import Terminals from "./Pages/Terminals";
import Contact from "./Pages/Contact";

// Travel Booking System Components (Inline)

// TravelHome Component
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

// PopularTours Component
const PopularTours = () => {

  
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tours = [
    {
      id: 1,
      name: "Bali Paradise Tour",
      description: "Experience the beautiful beaches and rich culture of Bali",
      price: 899,
      discount: 15,
      duration: "7 Days",
      image: "🏝️",
      speciality: "Beach & Culture"
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      description: "Majestic mountains and charming villages in the Swiss Alps",
      price: 1299,
      discount: 10,
      duration: "5 Days",
      image: "🏔️",
      speciality: "Adventure & Nature"
    },
    {
      id: 3,
      name: "Tokyo City Experience",
      description: "Modern technology meets traditional culture in Tokyo",
      price: 1099,
      discount: 20,
      duration: "6 Days",
      image: "🗼",
      speciality: "City & Technology"
    },
    {
      id: 4,
      name: "Paris Romantic Getaway",
      description: "The city of love with iconic landmarks and cuisine",
      price: 799,
      discount: 25,
      duration: "4 Days",
      image: "🗼",
      speciality: "Romance & Culture"
    },
    {
      id: 5,
      name: "Egypt Historical Journey",
      description: "Discover ancient pyramids and rich history",
      price: 1199,
      discount: 12,
      duration: "8 Days",
      image: "🐫",
      speciality: "History & Adventure"
    },
    {
      id: 6,
      name: "Maldives Luxury Escape",
      description: "Pristine beaches and overwater bungalows",
      price: 1999,
      discount: 18,
      duration: "5 Days",
      image: "🏖️",
      speciality: "Luxury & Relaxation"
    }
  ];

  const handleBookTour = (tour) => {
    const ticketData = {
      tourName: tour.name,
      speciality: tour.speciality,
      quantity: 1,
      unitPrice: tour.price,
      discount: tour.discount,
      totalPrice: tour.price * (1 - tour.discount / 100)
    };
    
    navigate('/travel-payment', { state: { ticketData } });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '3rem',
            marginBottom: '10px'
          }}>
            🌍 Popular Tours
          </h1>
          <p style={{
            color: 'white',
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Discover amazing destinations with exclusive discounts
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {tours.map(tour => (
            <div key={tour.id} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #E2E8F0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                marginBottom: '15px'
              }}>
                {tour.image}
              </div>
              
              <h3 style={{
                color: '#1E293B',
                fontSize: '1.5rem',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                {tour.name}
              </h3>
              
              <p style={{
                color: '#64748B',
                textAlign: 'center',
                marginBottom: '15px',
                lineHeight: '1.5'
              }}>
                {tour.description}
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '15px',
                background: '#F8FAFC',
                borderRadius: '12px'
              }}>
                <div>
                  <div style={{ color: '#64748B', fontSize: '14px' }}>Duration</div>
                  <div style={{ color: '#1E293B', fontWeight: '600' }}>{tour.duration}</div>
                </div>
                <div>
                  <div style={{ color: '#64748B', fontSize: '14px' }}>Speciality</div>
                  <div style={{ color: '#7C3AED', fontWeight: '600' }}>{tour.speciality}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{
                    color: '#64748B',
                    textDecoration: 'line-through',
                    fontSize: '14px'
                  }}>
                    ${tour.price}
                  </div>
                  <div style={{
                    color: '#1E293B',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    ${(tour.price * (1 - tour.discount / 100)).toFixed(2)}
                  </div>
                </div>
                <div style={{
                  background: '#10B981',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {tour.discount}% OFF
                </div>
              </div>
              
              <button
                onClick={() => handleBookTour(tour)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🎫 Buy Ticket
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/travel-home')}
          style={{
            background: 'white',
            color: '#7C3AED',
            border: '2px solid #7C3AED',
            padding: '12px 30px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto',
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
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

// PassengerDetails Component
const PassengerDetails = () => {

 

  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const [passengers, setPassengers] = useState([{
    name: '',
    age: '',
    gender: '',
    idNumber: ''
  }]);

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

// Payment Component
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
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
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
          color: 'black',
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

// Confirmation Component
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

// Main App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="tour" element={<Tour />} />
        <Route path="Places" element={<Places />} />
        <Route path="about" element={<About />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="Distination" element={<Distination />} />
        <Route path="Deal" element={<Deal />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Mountain" element={<Mountains />} />
        <Route path="AdventureTravel" element={<AdventureTravel />} />
        <Route path="Luxury" element={<Luxary />} />
        <Route path="trails" element={<TrailPage />} />
        <Route path="adventure" element={<MountainAdventure />} />
        <Route path="Culture" element={<Culture />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/explore/beachparadise" element={<Beachparadise />} />
        <Route path="/explore/city-lights-tour" element={<Citylightstour />} />
        <Route path="/explore/desertescape" element={<Desertescape />} />
        <Route path="/explore/mountainadventure" element={<Mountainadventure />} />
        <Route path="/Hero" element={<Aboutsec />} />
        <Route path="/terminal" element={<Overseaterminal />} />
        <Route path="/terminals" element={<Pakistanterminal />} />
        <Route path="/Terminals" element={<Terminals />} />
        
        {/* New Travel Booking System Routes */}
        <Route path="/travel-home" element={<TravelHome />} />
        <Route path="/travel-tours" element={<PopularTours />} />
        <Route path="/travel-passenger-details" element={<PassengerDetails />} />
        <Route path="/travel-payment" element={<Payment />} />
        <Route path="/travel-confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;