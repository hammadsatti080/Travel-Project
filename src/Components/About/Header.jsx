import React from "react";

export default function Header({
  imageUrl = "./Homescreen/Bkground.jpeg",
  title = "About TravelWith",
  intro = `We craft memorable journeys around the globe. From local experiences to premium packages — travel simplified, responsibly curated, and designed for you.`,
  ctaText = "Learn More",
}) {
  return (
    <>
      <style>{`
        /* =======================================
           🌐 Modern Premium Layout
        ======================================= */
        .header-section {
          width: 95%;
          margin: 4rem auto;
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 75vh;
          position: relative;
        }

        /* =======================================
           🧭 Left Content Section - Premium
        ======================================= */
        .left-content {
          position: relative;
          background: linear-gradient(135deg, rgba(15,15,15,0.95), rgba(26,26,26,0.98));
          display: flex;
          align-items: center;
          padding: 4rem 5rem;
          z-index: 2;
          clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
          backdrop-filter: blur(5px);
        }

        .left-content::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        }

        .text-content {
          max-width: 520px;
          z-index: 3;
        }

        .text-content h3 {
          color: #10b981;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          font-size: 0.8rem;
          background: linear-gradient(45deg, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideInLeft 0.8s ease-out;
        }

        .text-content h2 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          line-height: 1.1;
          letter-spacing: -1px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
          background: linear-gradient(135deg, #ffffff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(165,180,252,0.3);
        }

        .text-content p {
          color: #d1d5db;
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out 0.6s both;
          font-weight: 300;
        }

        /* =======================================
           🔘 Premium Buttons
        ======================================= */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 8px 30px rgba(16,185,129,0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out 0.9s both;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(16,185,129,0.5);
          background: linear-gradient(135deg, #059669, #047857);
        }

        .text-link {
          color: #d1d5db;
          font-weight: 500;
          margin-left: 2rem;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          animation: fadeInUp 0.8s ease-out 1.1s both;
          position: relative;
          overflow: hidden;
        }

        .text-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .text-link:hover::before {
          left: 100%;
        }

        .text-link:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
        }

        /* =======================================
           🖼️ Right Image Section - Premium
        ======================================= */
        .right-image {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 1;
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
          margin-left: -10%;
          animation: imageReveal 1.5s ease-out;
          transform-origin: center;
        }

        .right-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, 
            rgba(15,15,15,0.4) 0%, 
            rgba(15,15,15,0.1) 100%);
          z-index: 1;
        }

        .right-image::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(16,185,129,0.1) 0%, 
            transparent 50%,
            rgba(165,180,252,0.1) 100%);
          z-index: 2;
          mix-blend-mode: overlay;
        }

        /* =======================================
           ✨ Premium Accent Elements
        ======================================= */
        .accent-line {
          position: absolute;
          top: 50%;
          left: 90%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 80%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            #10b981 20%,
            #10b981 80%,
            transparent 100%
          );
          z-index: 4;
        }

        .accent-line::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 20px #10b981;
          animation: pulse 2s infinite;
        }

        .floating-badges {
          position: absolute;
          top: 2rem;
          right: 2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .badge {
          background: rgba(15,15,15,0.8);
          backdrop-filter: blur(10px);
          padding: 0.8rem 1.2rem;
          border-radius: 12px;
          border: 1px solid rgba(16,185,129,0.3);
          color: #10b981;
          font-weight: 600;
          font-size: 0.8rem;
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .badge:nth-child(2) {
          animation-delay: 2s;
          border-color: rgba(165,180,252,0.3);
          color: #a5b4fc;
        }

        .badge:nth-child(3) {
          animation-delay: 4s;
          border-color: rgba(245,158,11,0.3);
          color: #f59e0b;
        }

        /* =======================================
           🎞️ Premium Animations
        ======================================= */
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* =======================================
           📱 Responsive Design
        ======================================= */
        @media (max-width: 1200px) {
          .header-grid {
            grid-template-columns: 1fr 1fr;
          }
          .text-content h2 { 
            font-size: 3rem; 
          }
          .left-content { 
            padding: 3rem 4rem; 
            clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
          }
          .right-image {
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
            margin-left: -15%;
          }
          .accent-line {
            left: 85%;
          }
        }

        @media (max-width: 968px) {
          .header-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto 500px;
          }
          .left-content, .right-image {
            clip-path: none;
            margin-left: 0;
          }
          .accent-line { 
            display: none; 
          }
          .text-content h2 { 
            font-size: 2.5rem; 
          }
          .left-content { 
            padding: 3rem 2.5rem; 
            text-align: center;
          }
          .right-image {
            min-height: 500px;
          }
          .floating-badges {
            top: 1rem;
            right: 1rem;
          }
        }

        @media (max-width: 640px) {
          .header-section {
            width: 92%;
            margin: 2rem auto;
            border-radius: 1.5rem;
          }
          .text-content h2 { 
            font-size: 2.2rem; 
          }
          .text-content p {
            font-size: 1rem;
          }
          .btn-primary {
            padding: 1rem 2rem;
            font-size: 0.95rem;
          }
          .left-content { 
            padding: 2.5rem 2rem; 
          }
          .floating-badges {
            position: relative;
            top: 0;
            right: 0;
            flex-direction: row;
            justify-content: center;
            margin-top: 2rem;
          }
        }
      `}</style>

      <section className="header-section">
        <div className="header-grid">
          {/* LEFT CONTENT */}
          <div className="left-content">
            <div className="text-content">
              <h3>Who we are</h3>
              <h2>{title}</h2>
              <p>{intro}</p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <button className="btn-primary">
                  {ctaText}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "8px" }}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>

                <a href="ContactPage" className="text-link">
                  Contact us
                </a>
              </div>
            </div>
          </div>

          {/* PREMIUM ACCENT LINE */}
          <div className="accent-line"></div>

          {/* RIGHT IMAGE */}
          <div
            className="right-image"
            style={{ 
              backgroundImage: `url(${imageUrl})`
            }}
            role="img"
            aria-label="Premium travel experience"
          >
            {/* Floating Badges */}
            <div className="floating-badges">
              <div className="badge">✨ Premium</div>
              <div className="badge">🚀 Fast</div>
              <div className="badge">⭐ 5-Star</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}