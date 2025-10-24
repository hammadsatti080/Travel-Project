import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const packages = [
    {
      id: "beach-paradise",
      img: "https://up.yimg.com/ib/th/id/OIP._GmYgOO2jd49shdybfDcpwHaE8?pid=Api&rs=1&c=1&qlt=95&w=161&h=107",
      name: "Beach Paradise",
      days: "5 Days / 4 Nights",
      price: "$899",
      rating: 4.8,
      location: "Maldives",
      description: "Luxury beachfront villas with private pools"
    },
    {
      id: "tropical-beach",
      img: "https://up.yimg.com/ib/th/id/OIP.-bJ9vjKFAixH748GH1BKhwHaFj?pid=Api&rs=1&c=1&qlt=95&w=143&h=107",
      name: "Tropical Beach",
      days: "4 Days / 3 Nights",
      price: "$699",
      rating: 4.6,
      location: "Bali",
      description: "Exotic tropical getaway with palm trees"
    },
    {
      id: "sunset-beach",
      img: "https://up.yimg.com/ib/th/id/OIP.HGTJnB7gG7sOOOdB9SYcUwHaE8?pid=Api&rs=1&c=1&qlt=95&w=161&h=107",
      name: "Sunset Beach",
      days: "6 Days / 5 Nights",
      price: "$1,099",
      rating: 4.9,
      location: "Hawaii",
      description: "Breathtaking sunset views every evening"
    },
    {
      id: "crystal-bay",
      img: "https://up.yimg.com/ib/th/id/OIP.vFSUvixnaPX9knrqZCOoiQHaFj?pid=Api&rs=1&c=1&qlt=95&w=143&h=107",
      name: "Crystal Bay",
      days: "3 Days / 2 Nights",
      price: "$499",
      rating: 4.5,
      location: "Thailand",
      description: "Crystal clear waters and white sand"
    },
    {
      id: "golden-sands",
      img: "https://sp.yimg.com/ib/th/id/OIP.Uoj72hZBCMY8TaImOmGtgwHaE8?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Golden Sands",
      days: "4 Days / 3 Nights",
      price: "$649",
      rating: 4.5,
      location: "Goa",
      description: "Golden sandy beaches and vibrant culture"
    },
    {
      id: "palm-beach",
      img: "https://sp.yimg.com/ib/th/id/OIP.48CX1NjV49Y1v8lcOtdqWQHaE7?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Palm Beach",
      days: "5 Days / 4 Nights",
      price: "$799",
      rating: 4.7,
      location: "Mauritius",
      description: "Palm-fringed beaches and luxury resorts"
    },
    {
      id: "blue-lagoon",
      img: "https://sp.yimg.com/ib/th/id/OIP.OofcMpPjiGEXZ2t-FHxEUgHaEJ?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Blue Lagoon",
      days: "7 Days / 6 Nights",
      price: "$1,199",
      rating: 4.8,
      location: "Philippines",
      description: "Pristine blue lagoons and marine life"
    },
    {
      id: "coral-reef",
      img: "https://sp.yimg.com/ib/th/id/OIP.Jh7I60uPzfk0QGB9wfYo_gHaE8?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Coral Reef",
      days: "4 Days / 3 Nights",
      price: "$749",
      rating: 4.6,
      location: "Australia",
      description: "Explore amazing coral reefs and snorkeling"
    },
    {
      id: "sunrise-beach",
      img: "https://sp.yimg.com/ib/th/id/OIP.AKGFpQaQ8SrRMYLt2LGwIQHaE8?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Sunrise Beach",
      days: "3 Days / 2 Nights",
      price: "$549",
      rating: 4.4,
      location: "Sri Lanka",
      description: "Beautiful sunrise views and calm waters"
    },
    {
      id: "paradise-island",
      img: "https://sp.yimg.com/ib/th/id/OIP.WOYbooOsRMdzDucn92Xi6wHaE3?pid=Api&w=148&h=148&c=7&rs=1",
      name: "Paradise Island",
      days: "5 Days / 4 Nights",
      price: "$899",
      rating: 4.9,
      location: "Seychelles",
      description: "Private island experience with luxury"
    }
  ];

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const handleExplore = (packageId) => {
    navigate(`/explore/${packageId}`);
  };

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l4 2"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#ffffff",
      padding: "40px 16px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
    

      {/* Packages Grid - Mobile Responsive */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
        gap: "24px",
        justifyItems: "center"
      }}>
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            style={{
              width: "100%",
              maxWidth: "400px",
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid #f0f0f0",
              transform: visible 
                ? `translateY(0) scale(1)` 
                : `translateY(20px) scale(0.95)`,
              opacity: visible ? 1 : 0,
              transition: `all 0.5s ease ${index * 0.1}s, 
                          transform 0.3s ease, box-shadow 0.3s ease`,
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            }}
          >
            {/* Image Section */}
            <div style={{
              position: "relative",
              height: "200px",
              overflow: "hidden"
            }}>
              <img
                src={pkg.img}
                alt={pkg.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              
              {/* Rating Badge */}
              <div style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "rgba(255,255,255,0.95)",
                padding: "6px 10px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.8rem",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <StarIcon />
                <span>{pkg.rating}</span>
              </div>

              {/* Price Badge */}
              <div style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                padding: "8px 14px",
                borderRadius: "16px",
                fontWeight: "700",
                fontSize: "0.9rem",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
              }}>
                {pkg.price}
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: "20px" }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "8px",
                gap: "12px"
              }}>
                <h3 style={{
                  fontWeight: "700",
                  color: "#1a1a1a",
                  fontSize: "1.2rem",
                  margin: "0",
                  lineHeight: "1.3",
                  flex: "1"
                }}>
                  {pkg.name}
                </h3>
              </div>

              {/* Location */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#666",
                marginBottom: "8px",
                fontSize: "0.85rem"
              }}>
                <LocationIcon />
                <span>{pkg.location}</span>
              </div>

              {/* Description */}
              <p style={{
                color: "#666",
                fontSize: "0.9rem",
                marginBottom: "12px",
                lineHeight: "1.4",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {pkg.description}
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#666",
                  fontSize: "0.85rem"
                }}>
                  <ClockIcon />
                  <span>{pkg.days}</span>
                </div>
              </div>

           
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .package-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 12px;
          }
          
          .package-card {
            max-width: 100%;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 480px) {
          .package-card {
            border-radius: 12px;
          }
          
          .package-image {
            height: 180px;
          }
          
          .package-content {
            padding: 16px;
          }
        }
        
        /* Smooth scrolling for mobile */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better touch targets for mobile */
        button {
          min-height: 44px;
        }
      `}</style>
    </div>
  );
}