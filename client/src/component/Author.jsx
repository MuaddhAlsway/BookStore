import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./author.css";

function Author({ authors }) {
  const containerRef = useRef();
  const navigate = useNavigate(); // 👈 add this

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".author-card");

      gsap.to(cards, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="author-section">
      <h2 className="title">📖 Featured Authors</h2>

      <div className="scroll-wrapper" ref={containerRef}>
        <div className="scroll-track">
          {[...authors, ...authors].map((author, index) => (
            <div className="author-card" key={index}>
              
              <div className="author-image">
                <img src={author.image} alt={author.name} />
              </div>

              <div className="author-content">
                <h3>{author.name}</h3>
                <p>{author.description}</p>

                <div className="author-footer">
                  <span className="rating">⭐ {author.rating}</span>

                  {/* 👇 THIS IS THE IMPORTANT PART */}
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/author/${author.id}`)}
                  >
                    View Profile
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Author;