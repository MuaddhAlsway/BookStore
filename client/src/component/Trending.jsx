import { useNavigate } from "react-router-dom";
import "./TrendingBook.css";

function Trending({ books = [] }) {
  const navigate = useNavigate();

  const trendingBooks = books.filter(book => book.isTrending);

  return (
    <div className="trending">
      <h2 className="trending__title">🔥 Trending Books</h2>

      <div className="trending__grid">
        {trendingBooks.map((book) => (
          <div
            className="trending__card"
            key={book.id}
            onClick={() => navigate(`/book/${book.id}`)} // 👈 THIS LINE
          >
            <img
              className="trending__image"
              src={book.image}
              alt={book.title}
            />

            <div className="trending__info">
              <h4 className="trending__book-title">{book.title}</h4>
              <p className="trending__author">{book.author}</p>

              <div className="trending__meta">
                <span className="trending__rating">⭐ {book.rating}</span>
                <span className="trending__price">${book.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;