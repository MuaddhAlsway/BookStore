import "./Testimonial.css";

function Testimonial({ reviews }) {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Customer Reviews</h2>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div className="testimonial-card" key={review.id}>
            
            {/* LEFT: Book cover */}
            <img className="book-img" src={review.bookImage} alt={review.bookTitle} />

            {/* RIGHT: Review content */}
            <div className="testimonial-content">

              <div className="user-name">
                {review.userName}
                <span className="verified">✔ Verified Purchase</span>
              </div>

              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < review.rating ? "⭐" : "☆"}
                  </span>
                ))}
              </div>

              <div className="book-title">{review.bookTitle}</div>

              <p className="comment">{review.comment}</p>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;