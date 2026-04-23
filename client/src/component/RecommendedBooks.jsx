import "./RecommendedBooks.css";

function RecommendedBooks({ books = [] }) {
  const recommended = books.filter(
    (book) => book.isRecommended || book.rating >= 4.5
  );

  return (
    <div className="recommended-container">
      <h2 className="section-title">✨ Recommended For You</h2>

      <div className="books-grid">
        {recommended.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-image">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>

              <div className="book-meta">
                <span>⭐ {book.rating}</span>
                <span>${book.price}</span>
              </div>

              <button className="btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedBooks;