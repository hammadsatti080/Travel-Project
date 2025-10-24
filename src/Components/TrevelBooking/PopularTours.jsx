import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularTours = () => {
  const navigate = useNavigate();
  
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

export default PopularTours;