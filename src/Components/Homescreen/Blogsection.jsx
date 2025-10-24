import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Blogsection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Adventure Awaits in the Mountains",
      category: "Adventure",
      description:
        "Discover breathtaking trails and hidden gems on your next mountain escape. Perfect for thrill-seekers and nature lovers.",
      img: "./Homescreen/Countries/Terminal/Beach5.jpg",
      link: "Blogs",
    },
    {
      id: 2,
      title: "Experience True Luxury by the Sea",
      category: "Luxury Travel",
      description:
        "Indulge in serene beaches, private villas, and world-class dining for an unforgettable vacation experience.",
      img: "./Homescreen/Countries/Terminal/Beach1.jpg",
      link: "Luxury",
    },
    {
      id: 3,
      title: "Cultural Wonders Around the Globe",
      category: "Culture",
      description:
        "Explore the traditions, festivals, and heritage that make every country a unique destination worth visiting.",
      img: "./Homescreen/Countries/Terminal/Beach4.jpg",
      link: "culture",
    },
  ];

 
  return (
    <div
      style={{
        width: "90%",
        margin: "60px auto",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Section Heading */}
      <div
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            color: "#000",
            marginBottom: "15px",
            fontSize: "1.9rem",
          }}
        >
          New From Our Blog
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "1rem",
            marginBottom: "40px",
          }}
        >
          Discover stories, tips, and inspiration from travelers around the world.
        </p>
      </div>

      {/* Blog Cards */}
      <div
        className="row justify-content-center g-4"
        style={{
          width: "100%",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="col-12 col-md-6 col-lg-4"
            style={{
              transition: `all 0.8s ease ${index * 0.1}s`,
              transform: animate ? "translateY(0)" : "translateY(40px)",
              opacity: animate ? 1 : 0,
            }}
          >
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.08)";
              }}
            >
              {/* Image */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h6
                  style={{
                    color: "#0d6efd",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    marginBottom: "8px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {blog.category}
                </h6>
                <h5
                  style={{
                    fontWeight: "700",
                    color: "#000",
                    marginBottom: "10px",
                    fontSize: "1.1rem",
                  }}
                >
                  {blog.title}
                </h5>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "15px",
                  }}
                >
                  {blog.description}
                </p>
                <Link
                  to={blog.link}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0b5ed7")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#0d6efd")
                  }
                >
                  Read More <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
