import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });
    const [paypalEmail, setPaypalEmail] = useState('');
    const [bankDetails, setBankDetails] = useState({
        accountNumber: '',
        ifscCode: '',
        accountHolder: ''
    });
    const [loading, setLoading] = useState(false);

    const { ticketData, type } = location.state || {};

    useEffect(() => {
        if (!ticketData) {
            alert('No booking data found. Please select a tour first.');
            navigate('/travel-home');
        }
    }, [ticketData, navigate]);

    const validateCardDetails = () => {
        if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv) {
            alert('Please fill all card details');
            return false;
        }
        
        // Basic card number validation (16 digits)
        if (!/^\d{16}$/.test(cardDetails.number.replace(/\s/g, ''))) {
            alert('Please enter a valid 16-digit card number');
            return false;
        }
        
        // Basic expiry date validation (MM/YY format)
        if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
            alert('Please enter expiry date in MM/YY format');
            return false;
        }
        
        // Basic CVV validation (3 or 4 digits)
        if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
            alert('Please enter a valid CVV (3 or 4 digits)');
            return false;
        }
        
        return true;
    };

    const validatePaypal = () => {
        if (!paypalEmail) {
            alert('Please enter your PayPal email');
            return false;
        }
        
        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) {
            alert('Please enter a valid email address for PayPal');
            return false;
        }
        
        return true;
    };

    const validateBankTransfer = () => {
        if (!bankDetails.accountNumber || !bankDetails.ifscCode || !bankDetails.accountHolder) {
            alert('Please fill all bank details');
            return false;
        }
        
        // Basic account number validation (at least 8 digits)
        if (!/^\d{8,}$/.test(bankDetails.accountNumber)) {
            alert('Please enter a valid account number');
            return false;
        }
        
        // Basic IFSC code validation (11 characters, alphanumeric)
        if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(bankDetails.ifscCode)) {
            alert('Please enter a valid IFSC code');
            return false;
        }
        
        return true;
    };

    const handlePayment = async () => {
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }

        let isValid = true;
        
        if (paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') {
            isValid = validateCardDetails();
        } else if (paymentMethod === 'PayPal') {
            isValid = validatePaypal();
        } else if (paymentMethod === 'Bank Transfer') {
            isValid = validateBankTransfer();
        }

        if (!isValid) return;

        setLoading(true);

        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            let paymentDetails = {};
            
            if (paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') {
                paymentDetails = {
                    method: paymentMethod,
                    lastFour: cardDetails.number.slice(-4),
                    cardType: cardDetails.number.startsWith('4') ? 'Visa' : 
                              cardDetails.number.startsWith('5') ? 'MasterCard' : 'Other'
                };
            } else if (paymentMethod === 'PayPal') {
                paymentDetails = {
                    method: 'PayPal',
                    email: paypalEmail
                };
            } else if (paymentMethod === 'Bank Transfer') {
                paymentDetails = {
                    method: 'Bank Transfer',
                    accountLastFour: bankDetails.accountNumber.slice(-4),
                    ifscCode: bankDetails.ifscCode
                };
            }
            
            navigate('/travel-confirmation', { 
                state: { 
                    ticketData: ticketData,
                    paymentMethod: paymentMethod,
                    paymentId: 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                    paymentDetails: paymentDetails
                } 
            });
            
        } catch (error) {
            alert('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const handleCardNumberChange = (e) => {
        const formatted = formatCardNumber(e.target.value);
        setCardDetails({...cardDetails, number: formatted});
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        setCardDetails({...cardDetails, expiry: value});
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

                {/* Credit/Debit Card Details */}
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
                                    onChange={handleCardNumberChange}
                                    maxLength={19}
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
                                        onChange={handleExpiryChange}
                                        maxLength={5}
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
                                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                                        maxLength={4}
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

                {/* PayPal Details */}
                {paymentMethod === 'PayPal' && (
                    <div style={{
                        background: '#F8FAFC',
                        padding: '25px',
                        borderRadius: '15px',
                        marginBottom: '30px',
                        border: '1px solid #E2E8F0'
                    }}>
                        <h3 style={{ color: '#1E293B', marginBottom: '20px' }}>🌐 PayPal Details</h3>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                                    PayPal Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="your-email@example.com"
                                    value={paypalEmail}
                                    onChange={(e) => setPaypalEmail(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        border: '1px solid #D1D5DB',
                                        borderRadius: '10px',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            <div style={{
                                background: '#0070BA',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                fontWeight: '600'
                            }}>
                                You will be redirected to PayPal for secure payment
                            </div>
                        </div>
                    </div>
                )}

                {/* Bank Transfer Details */}
                {paymentMethod === 'Bank Transfer' && (
                    <div style={{
                        background: '#F8FAFC',
                        padding: '25px',
                        borderRadius: '15px',
                        marginBottom: '30px',
                        border: '1px solid #E2E8F0'
                    }}>
                        <h3 style={{ color: '#1E293B', marginBottom: '20px' }}>🏦 Bank Transfer Details</h3>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                                    Account Holder Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={bankDetails.accountHolder}
                                    onChange={(e) => setBankDetails({...bankDetails, accountHolder: e.target.value})}
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
                                    Account Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="1234567890"
                                    value={bankDetails.accountNumber}
                                    onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value.replace(/\D/g, '')})}
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
                                    IFSC Code
                                </label>
                                <input
                                    type="text"
                                    placeholder="SBIN0000123"
                                    value={bankDetails.ifscCode}
                                    onChange={(e) => setBankDetails({...bankDetails, ifscCode: e.target.value.toUpperCase()})}
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        border: '1px solid #D1D5DB',
                                        borderRadius: '10px',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                            
                            <div style={{
                                background: '#059669',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '10px'
                            }}>
                                <h4 style={{ marginBottom: '10px' }}>Bank Instructions:</h4>
                                <ul style={{ textAlign: 'left', margin: 0, paddingLeft: '20px' }}>
                                    <li>Transfer amount: ${ticketData.totalPrice.toFixed(2)}</li>
                                    <li>Bank: Travel Booking Bank</li>
                                    <li>Account: 9876543210</li>
                                    <li>Use your name as reference</li>
                                </ul>
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