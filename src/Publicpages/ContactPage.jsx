import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "1",
    budget: "medium",
    message: "",
    tripType: "leisure"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const destinations = [
    "Lahore", "Islamabad", "Karachi", "Rawalpindi", "Murree", "Swat Valley", 
    "Hunza Valley", "Skardu", "Fairy Meadows", "Naran Kaghan", "Gilgit", "Quetta"
  ];

  const tripTypes = [
    { value: "leisure", label: "Leisure", icon: "bi-umbrella" },
    { value: "adventure", label: "Adventure", icon: "bi-compass" },
    { value: "business", label: "Business", icon: "bi-briefcase" },
    { value: "honeymoon", label: "Honeymoon", icon: "bi-heart" },
    { value: "family", label: "Family", icon: "bi-people" },
    { value: "cultural", label: "Cultural", icon: "bi-building" }
  ];

  const budgets = [
    { value: "economy", label: "Economy", color: "success" },
    { value: "medium", label: "Medium", color: "warning" },
    { value: "luxury", label: "Luxury", color: "danger" },
    { value: "premium", label: "Premium", color: "dark" }
  ];

  const travelers = [1,2,3,4,5,6,7,8,"9+"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOptionSelect = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    setActiveDropdown(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          travelDate: "",
          travelers: "1",
          budget: "medium",
          message: "",
          tripType: "leisure"
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const travelServices = [
    {
      icon: "bi-airplane",
      title: "Flight Booking",
      description: "Best deals on flights"
    },
    {
      icon: "bi-building",
      title: "Hotel Reservations",
      description: "Luxury to budget stays"
    },
    {
      icon: "bi-car-front",
      title: "Car Rental",
      description: "Comfortable vehicles"
    },
    {
      icon: "bi-passport",
      title: "Visa Assistance",
      description: "Visa processing support"
    }
  ];

  return (
    <div className="container-fluid min-vh-50 py-3 py-md-5" 
      style={{
        backgroundColor: "#000000",
        background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
        position: "relative",
        overflow: "hidden"
      }}>

      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-4 mb-md-5 px-2">
          <h1 className="display-6 display-md-4 fw-bold text-white mb-2 mb-md-3">
            Plan Your Dream Trip
          </h1>
          <p className="lead text-white opacity-75 mx-auto fs-6 fs-md-5" 
             style={{maxWidth: "600px"}}>
            Let us help you create unforgettable memories. Get personalized travel consultation.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {/* Left Side - Travel Info & Services */}
          <div className="col-12 col-lg-4 order-2 order-lg-1">
            {/* Travel Services */}
            <div className="card border-0 shadow-sm mb-3 mb-md-4" style={{backgroundColor: "#1a1a1a"}}>
              <div className="card-body p-3 p-md-4">
                <h4 className="h5 fw-bold text-white mb-3">
                  <i className="bi bi-geo-alt me-2 text-primary"></i>
                  Our Services
                </h4>
                
                <div className="row g-2 g-md-3">
                  {travelServices.map((service, index) => (
                    <div key={index} className="col-6 col-md-12">
                      <div className="d-flex align-items-center p-2 p-md-3 rounded-3 h-100" 
                           style={{backgroundColor: "#2d2d2d", transition: 'all 0.3s ease'}}
                           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#3d3d3d"}
                           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2d2d2d"}>
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2 me-md-3 flex-shrink-0"
                             style={{width: "40px", height: "40px"}}>
                          <i className={`bi ${service.icon}`}></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="fw-semibold text-white mb-0 small">{service.title}</h6>
                          <p className="text-muted small mb-0 d-none d-md-block">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Travel Inquiry Form */}
          <div className="col-12 col-lg-8 order-1 order-lg-2">
            <div className="card border-0 shadow-lg" style={{backgroundColor: "#1a1a1a"}}>
              <div className="card-body p-3 p-md-4 p-lg-5">
                <div className="text-center mb-3 mb-md-4">
                  <h2 className="h4 h2-md fw-bold text-white mb-1 mb-md-2">Custom Travel Plan</h2>
                  <p className="text-muted small small-md">Fill in your preferences for the perfect itinerary</p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show mb-3 mb-md-4 small" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you! Our expert will contact you within 2 hours.
                    <button type="button" className="btn-close btn-close-white" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger alert-dismissible fade show mb-3 mb-md-4 small" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Sorry! There was an error. Please try again.
                    <button type="button" className="btn-close btn-close-white" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 g-md-4">
                    {/* Personal Information */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-person me-1"></i>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm form-control-md bg-dark text-white border-dark"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-envelope me-1"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm form-control-md bg-dark text-white border-dark"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-phone me-1"></i>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-sm form-control-md bg-dark text-white border-dark"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        required
                      />
                    </div>

                    {/* Destination Dropdown */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-geo-alt me-1"></i>
                        Preferred Destination
                      </label>
                      <div className="position-relative">
                        <div 
                          className="form-control form-control-sm form-control-md bg-dark text-white border-dark d-flex justify-content-between align-items-center"
                          style={{cursor: 'pointer'}}
                          onClick={() => setActiveDropdown(activeDropdown === 'destination' ? null : 'destination')}
                        >
                          <span>{formData.destination || "Select destination"}</span>
                          <i className={`bi bi-chevron-down ${activeDropdown === 'destination' ? 'rotate-180' : ''}`}></i>
                        </div>
                        
                        {activeDropdown === 'destination' && (
                          <div className="position-absolute top-100 start-0 end-0 mt-1 bg-dark border border-secondary rounded shadow-lg z-3"
                               style={{maxHeight: '200px', overflowY: 'auto'}}>
                            {destinations.map((dest, index) => (
                              <div 
                                key={index}
                                className="p-2 text-white small border-bottom border-secondary hover-bg"
                                style={{cursor: 'pointer', transition: 'background-color 0.2s'}}
                                onClick={() => handleOptionSelect('destination', dest)}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                              >
                                {dest}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Travel Date */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-calendar me-1"></i>
                        Travel Date
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-sm form-control-md bg-dark text-white border-dark"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Travelers Dropdown */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-people me-1"></i>
                        Travelers
                      </label>
                      <div className="position-relative">
                        <div 
                          className="form-control form-control-sm form-control-md bg-dark text-white border-dark d-flex justify-content-between align-items-center"
                          style={{cursor: 'pointer'}}
                          onClick={() => setActiveDropdown(activeDropdown === 'travelers' ? null : 'travelers')}
                        >
                          <span>{formData.travelers === "9+" ? "9+ People" : `${formData.travelers} ${formData.travelers == 1 ? 'Person' : 'People'}`}</span>
                          <i className={`bi bi-chevron-down ${activeDropdown === 'travelers' ? 'rotate-180' : ''}`}></i>
                        </div>
                        
                        {activeDropdown === 'travelers' && (
                          <div className="position-absolute top-100 start-0 end-0 mt-1 bg-dark border border-secondary rounded shadow-lg z-3"
                               style={{maxHeight: '150px', overflowY: 'auto'}}>
                            {travelers.map((num, index) => (
                              <div 
                                key={index}
                                className="p-2 text-white small border-bottom border-secondary hover-bg"
                                style={{cursor: 'pointer', transition: 'background-color 0.2s'}}
                                onClick={() => handleOptionSelect('travelers', num.toString())}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                              >
                                {num === "9+" ? "9+ People" : `${num} ${num === 1 ? 'Person' : 'People'}`}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Trip Type */}
                    <div className="col-12">
                      <label className="form-label fw-semibold text-white small mb-2">Trip Type</label>
                      <div className="row g-2">
                        {tripTypes.map(type => (
                          <div key={type.value} className="col-4 col-sm-4 col-md-4">
                            <div 
                              className={`card border-2 cursor-pointer ${formData.tripType === type.value ? 'border-primary bg-primary bg-opacity-25' : 'border-secondary bg-dark'}`}
                              style={{transition: 'all 0.3s ease', minHeight: '80px'}}
                              onClick={() => setFormData({...formData, tripType: type.value})}
                            >
                              <div className="card-body text-center p-2">
                                <i className={`bi ${type.icon} fs-6 ${formData.tripType === type.value ? 'text-white' : 'text-muted'}`}></i>
                                <p className={`small mb-0 mt-1 ${formData.tripType === type.value ? 'text-white' : 'text-muted'}`}>{type.label}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold text-white small">Budget Range</label>
                      <div className="position-relative">
                        <div 
                          className="form-control form-control-sm form-control-md bg-dark text-white border-dark d-flex justify-content-between align-items-center"
                          style={{cursor: 'pointer'}}
                          onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}
                        >
                          <span>{budgets.find(b => b.value === formData.budget)?.label}</span>
                          <i className={`bi bi-chevron-down ${activeDropdown === 'budget' ? 'rotate-180' : ''}`}></i>
                        </div>
                        
                        {activeDropdown === 'budget' && (
                          <div className="position-absolute top-100 start-0 end-0 mt-1 bg-dark border border-secondary rounded shadow-lg z-3">
                            {budgets.map((budget, index) => (
                              <div 
                                key={index}
                                className="p-2 text-white small border-bottom border-secondary hover-bg"
                                style={{cursor: 'pointer', transition: 'background-color 0.2s'}}
                                onClick={() => handleOptionSelect('budget', budget.value)}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                              >
                                {budget.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Special Requirements */}
                    <div className="col-12">
                      <label className="form-label fw-semibold text-white small">
                        <i className="bi bi-chat-left-text me-1"></i>
                        Special Requirements
                      </label>
                      <textarea
                        className="form-control form-control-sm form-control-md bg-dark text-white border-dark"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your travel preferences..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 py-md-3 fw-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            <span className="small">Creating Plan...</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-check me-2"></i>
                            <span className="small">Get Custom Travel Plan</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Quick Contact */}
                    <div className="col-12">
                      <div className="text-center p-3 rounded-3" style={{backgroundColor: '#2d2d2d'}}>
                        <h6 className="fw-semibold mb-2 small text-white">Need Immediate Assistance?</h6>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3">
                          <span className="text-muted small">
                            <i className="bi bi-phone me-1"></i>
                            +92 300 1234567
                          </span>
                          <span className="text-muted small">
                            <i className="bi bi-whatsapp me-1 text-success"></i>
                            WhatsApp Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');
          
          .rotate-180 {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
          
          .cursor-pointer {
            cursor: pointer;
          }
          
          .hover-bg:hover {
            background-color: #333 !important;
          }
          
          .form-control:focus, .form-select:focus {
            border-color: #0d6efd !important;
            box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25) !important;
            background-color: #1a1a1a !important;
            color: white !important;
          }
          
          .z-3 {
            z-index: 1030;
          }
          
          /* Hide dropdown when clicking outside */
          .dropdown-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1020;
          }
          
          /* Mobile-specific styles */
          @media (max-width: 768px) {
            .form-control-sm {
              padding: 0.375rem 0.75rem;
              font-size: 0.875rem;
            }
            
            .small {
              font-size: 0.875rem;
            }
          }
          
          @media (max-width: 576px) {
            .container-fluid {
              padding-left: 10px;
              padding-right: 10px;
            }
            
            .card-body {
              padding: 1rem !important;
            }
            
            .display-6 {
              font-size: 1.75rem;
            }
          }
          
          /* Scrollbar styling for dropdowns */
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: #2d2d2d;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #555;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #777;
          }
        `}
      </style>

      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="dropdown-backdrop" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
}