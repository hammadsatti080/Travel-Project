import React, { useState, useEffect } from "react";

/**
 * PopularTours.jsx (Updated)
 * - Horizontal scroll on mobile, grid on desktop
 * - Pure inline CSS
 * - Click "Buy Ticket" opens modal with discount logic
 */

const Star = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#FFC107" : "none"}
    stroke="#FFC107"
    strokeWidth="1"
    style={{ marginRight: 4 }}
  >
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.603L19.335 24 12 19.897 4.665 24l1.585-8.647L.5 9.75l7.832-1.732L12 .587z" />
  </svg>
);

const TicketIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="1.5"
  >
    <path d="M2 7a2 2 0 012-2h2v4H4a0 0 0 01-0-0V7zM22 7a2 2 0 00-2-2h-2v4h2a0 0 0 000-0V7zM2 17a2 2 0 012 2h2v-4H4a0 0 0 010 0v2zM22 17a2 2 0 01-2 2h-2v-4h2a0 0 0 010 0v2z" />
    <rect x="6" y="5" width="12" height="14" rx="1.5" />
  </svg>
);

export default function PopularTours() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);
  const [purchased, setPurchased] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tours = [
    {
      id: 1,
      name: "Bali, Indonesia",
      speciality: "Beaches, Rice Terraces & Culture",
      rating: 4.8,
      reviews: 1284,
      price: 899,
      discount: 25,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      speciality: "Sunset Views & Cliffside Hotels",
      rating: 4.9,
      reviews: 940,
      price: 1199,
      discount: 30,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      speciality: "Temples, Gardens & Tradition",
      rating: 4.7,
      reviews: 760,
      price: 999,
      discount: 15,
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 4,
      name: "Swiss Alps, Switzerland",
      speciality: "Skiing & Alpine Scenery",
      rating: 5.0,
      reviews: 520,
      price: 1499,
      discount: 40,
      img: "https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  function discountedPrice(price, discountPercent) {
    const result = price * (100 - discountPercent) / 100;
    return Math.round(result * 100) / 100;
  }

  function openModal(tour) {
    setSelected(tour);
    setQty(1);
    setPurchased(null);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setSelected(null);
    setPurchased(null);
    document.body.style.overflow = "";
  }

  function confirmPurchase() {
    const unit = discountedPrice(selected.price, selected.discount);
    const total = Math.round(unit * qty * 100) / 100;
    setPurchased({
      tour: selected.name,
      unit,
      qty,
      total,
      time: new Date().toLocaleString(),
    });
  }
// 🔹 Replace your container styles with this:
const mobileContainer = {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "22px",
  };
  
  const desktopContainer = {
    width: "90%",
    margin: "60px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  };
  
  // 🔹 And your card style stays the same, no need to change.
  const cardStyle = {
    width: "100%",
    maxWidth: "350px",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(12,24,48,0.08)",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
  };
  
  return (
    <section style={{ padding: "40px 0", background: "#f7f9fb" }}>
      <div style={{ width: "90%", margin: "0 auto 30px" }}>
        <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#111" }}>
          🌍 Popular Tours
        </h2>
      </div>

      {/* container responsive switch */}
      <div style={isMobile ? mobileContainer : desktopContainer}>
        {tours.map((t) => {
          const unit = discountedPrice(t.price, t.discount);
          const savings = Math.round((t.price - unit) * 100) / 100;
          return (
            <article
              key={t.id}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(12,24,48,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(12,24,48,0.08)";
              }}
            >
              {/* Image Section */}
              <div style={{ position: "relative", minHeight: 150 }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Discount badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "linear-gradient(90deg,#ff6158,#ff8a5b)",
                    color: "#fff",
                    padding: "6px 10px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 13,
                    boxShadow: "0 6px 18px rgba(255,106,86,0.18)",
                  }}
                >
                  {t.discount}% OFF
                </div>
                {/* Rating badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    padding: "6px 10px",
                    borderRadius: 10,
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < Math.round(t.rating)} />
                  ))}
                  <span>{t.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Text Content */}
              <div style={{ padding: "16px 18px" }}>
                <h3 style={{ margin: 0, fontSize: 18, color: "#0d1b2a" }}>
                  {t.name}
                </h3>
                <p style={{ margin: "8px 0 14px", color: "#556", fontSize: 14 }}>
                  {t.speciality}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        color: "#888",
                        textDecoration: "line-through",
                        fontSize: 13,
                      }}
                    >
                      ${t.price.toFixed(2)}
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#0d6efd",
                        fontSize: 18,
                      }}
                    >
                      ${unit.toFixed(2)}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#28a745", marginTop: 4 }}
                    >
                      Save ${savings.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div
                style={{
                  padding: 16,
                  borderTop: "1px solid #eef2f6",
                  display: "flex",
                  gap: 12,
                }}
              >
                <button
                  onClick={() => openModal(t)}
                  style={{
                    flex: 1,
                    backgroundColor:"black",
                    color: "#fff",
                    border: "none",
                    padding: "10px 12px",
                    borderRadius: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    cursor: "pointer",
                  }}
                >
                  <TicketIcon />
                  Buy Ticket
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(2,8,23,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1200,
            padding: 20,
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 420,
              maxWidth: "96%",
              background: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(2,8,23,0.4)",
            }}
          >
            <div style={{ padding: 18, borderBottom: "1px solid #eef2f6" }}>
              <h3 style={{ margin: 0 }}>{selected.name}</h3>
              <p style={{ marginTop: 6, color: "#555" }}>
                {selected.speciality}
              </p>
            </div>

            <div style={{ padding: 18 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div style={{ color: "#888" }}>Unit price</div>
                <div style={{ fontWeight: 800, color: "#0d6efd" }}>
                  ${discountedPrice(selected.price, selected.discount).toFixed(
                    2
                  )}
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 8,
                    border: "1px solid #e6e9ee",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: 18,
                  }}
                >
                  −
                </button>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                  }
                  style={{
                    width: 80,
                    height: 42,
                    borderRadius: 8,
                    border: "1px solid #e6e9ee",
                    textAlign: "center",
                    fontSize: 16,
                  }}
                />
                <button
                  onClick={() => setQty((q) => q + 1)}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 8,
                    border: "1px solid #e6e9ee",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: 18,
                  }}
                >
                  +
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <div style={{ color: "#666" }}>Total</div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#0d6efd",
                  }}
                >
                  $
                  {(
                    discountedPrice(selected.price, selected.discount) * qty
                  ).toFixed(2)}
                </div>
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
                <button
                  onClick={confirmPurchase}
                  style={{
                    flex: 1,
                    background: "linear-gradient(90deg,#0d6efd,#6610f2)",
                    color: "#fff",
                    border: "none",
                    padding: "10px 14px",
                    borderRadius: 10,
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Confirm Purchase
                </button>

                <button
                  onClick={closeModal}
                  style={{
                    flex: 0,
                    background: "#fff",
                    border: "1px solid #e6e9ee",
                    padding: "10px 14px",
                    borderRadius: 10,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>

              {purchased && (
                <div
                  style={{
                    marginTop: 16,
                    padding: 12,
                    borderRadius: 8,
                    background: "#f3fff6",
                    color: "#0b5",
                  }}
                >
                  ✅ Purchase successful — {purchased.qty} × {purchased.tour} —
                  Total ${purchased.total.toFixed(2)}
                  <br />
                  <small style={{ color: "#555" }}>
                    Ref: {Math.floor(Math.random() * 900000 + 100000)}
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
