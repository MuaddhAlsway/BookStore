import "./BookDetails.css";

function BookDetails({ book }) {
  if (!book) {
    return <div className="empty">Book not found</div>;
  }

  return (
    <div className="book-details">
      <div className="book-cover">
        <img src={book.image} alt={book.title} />
      </div>

      <div className="book-info">
        <span className="genre">{book.genre}</span>

        <h1>{book.title}</h1>
        <p className="author">by {book.author}</p>

        <div className="rating">
          <span className="stars">★ {book.rating}</span>
        </div>

        <div className="meta">
          <span>{book.pages} pages</span>
          <span>{book.language}</span>
        </div>

        <p className="description">{book.description}</p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="label">Price</span>
            <span className="value highlight">${book.price}</span>
          </div>

          <div className="detail-item">
            <span className="label">Released</span>
            <span className="value">
              {new Date(book.releasedTime).toLocaleDateString()}
            </span>
          </div>

          <div className="detail-item">
            <span className="label">Status</span>
            <span className="value">{book.status}</span>
          </div>
        </div>

        <div className="buttons">
          <button className="buy-btn">Buy Now</button>
          <button className="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;