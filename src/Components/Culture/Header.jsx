import React from 'react';

export default function Header() {
  const keyframesStyle = `
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes blinkCursor {
      from, to { border-color: transparent; }
      50% { border-color: white; }
    }
    
    .typewriter-title {
      overflow: hidden;
      border-right: 3px solid white;
      white-space: nowrap;
      margin: 0 auto;
      animation: typewriter 2.5s steps(40, end) 0.5s both, 
                 blinkCursor 0.8s step-end infinite 3s;
    }
    
    @keyframes wordByWord {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    .word-animation span {
      display: inline-block;
      opacity: 0;
      animation: wordByWord 0.6s ease-out forwards;
    }
    
    .word-animation span:nth-child(1) { animation-delay: 0.8s; }
    .word-animation span:nth-child(2) { animation-delay: 1.1s; }
    .word-animation span:nth-child(3) { animation-delay: 1.4s; }
    .word-animation span:nth-child(4) { animation-delay: 1.7s; }
    .word-animation span:nth-child(5) { animation-delay: 2.0s; }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .typewriter-title {
        border-right: 2px solid white;
        animation: typewriter 2s steps(30, end) 0.5s both, 
                   blinkCursor 0.8s step-end infinite 2.5s;
      }
      
      .word-animation span:nth-child(1) { animation-delay: 0.6s; }
      .word-animation span:nth-child(2) { animation-delay: 0.9s; }
      .word-animation span:nth-child(3) { animation-delay: 1.2s; }
      .word-animation span:nth-child(4) { animation-delay: 1.5s; }
      .word-animation span:nth-child(5) { animation-delay: 1.8s; }
    }

    @media (max-width: 480px) {
      .typewriter-title {
        border-right: 1.5px solid white;
        animation: typewriter 1.5s steps(25, end) 0.5s both, 
                   blinkCursor 0.8s step-end infinite 2s;
      }
      
      .word-animation span {
        display: inline;
      }
      
      .word-animation span:nth-child(1) { animation-delay: 0.5s; }
      .word-animation span:nth-child(2) { animation-delay: 0.8s; }
      .word-animation span:nth-child(3) { animation-delay: 1.1s; }
      .word-animation span:nth-child(4) { animation-delay: 1.4s; }
      .word-animation span:nth-child(5) { animation-delay: 1.7s; }
    }
  `;

  // Responsive styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif"
  };

  const videoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    filter: 'brightness(0.8) contrast(1.2) saturate(1.1)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      linear-gradient(135deg, 
        rgba(25, 55, 100, 0.5) 0%, 
        rgba(75, 35, 85, 0.4) 50%, 
        rgba(200, 45, 75, 0.3) 100%
      )
    `,
    zIndex: 0,
    mixBlendMode: 'overlay'
  };

  const colorCorrectionStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(10, 20, 40, 0.2)',
    zIndex: 0
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: 'white',
    padding: '0 20px',
    maxWidth: '900px',
    width: '100%'
  };

  // Responsive title styles
  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)', // Responsive font size
    fontWeight: '700',
    marginBottom: 'clamp(1rem, 4vw, 2rem)',
    textShadow: '3px 3px 15px rgba(0, 0, 0, 0.5)',
    color: 'white',
    lineHeight: '1.2',
    padding: '0 10px'
  };

  // Responsive subtitle styles
  const subtitleStyle = {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    fontStyle: 'italic',
    lineHeight: 'clamp(1.4, 5vw, 1.7)',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    margin: '0 auto',
    maxWidth: 'clamp(300px, 90vw, 700px)',
    fontWeight: '300',
    padding: '0 15px'
  };

  return (
    <div style={containerStyle}>
      <style>{keyframesStyle}</style>
      
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={videoStyle}
        // Add poster for mobile performance
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23667eea'/%3E%3C/svg%3E"
      >
        <source src="/Homescreen/Countries/video1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        }}></div>
      </video>

      {/* Enhanced Overlay */}
      <div style={overlayStyle}></div>

      {/* Color Correction */}
      <div style={colorCorrectionStyle}></div>

      {/* Content */}
      <div style={contentStyle}>
        <h1 style={titleStyle} className="typewriter-title">
          Explore World Cultures
        </h1>
        
        <p style={subtitleStyle} className="word-animation">
          <span>Discover</span> <span>how</span> <span>traditions,</span> <span>festivals,</span> <span>and local flavors shape each destination.</span>
        </p>
      </div>

      {/* Mobile-specific optimizations */}
      <style>{`
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .typewriter-title {
            border-right-width: 2px;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .typewriter-title {
            animation: none;
            border-right: none;
            width: 100%;
          }
          
          .word-animation span {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .typewriter-title {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          }
          
          .word-animation {
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .typewriter-title {
            color: #ffffff;
          }
          
          .word-animation {
            color: rgba(255, 255, 255, 0.95);
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .typewriter-title {
            font-size: 2rem;
            padding: 0 5px;
          }
          
          .word-animation {
            font-size: 0.9rem;
            padding: 0 10px;
          }
        }

        /* Tablet landscape */
        @media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
          .typewriter-title {
            font-size: 3rem;
          }
          
          .word-animation {
            font-size: 1.3rem;
          }
        }

        /* Mobile landscape */
        @media (max-width: 768px) and (orientation: landscape) {
          .typewriter-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .word-animation {
            font-size: 1.1rem;
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
}