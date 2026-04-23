import { useParams, useNavigate } from "react-router-dom";
import books from "../assets/assest"; // 👈 import books
import "./authorDetails.css";

function AuthorDetails({ authors }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const author = authors.find(a => a.id === Number(id));

  if (!author) {
    return <h2 className="not-found">Author not found</h2>;
  }

  // 👇 Get books by this author
  const authorBooks = books.filter(
    book => book.author === author.name
  );

  return (
    <div className="author-details">
      
      {/* BACK */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* AUTHOR INFO */}
      <div className="details-card">
        <img src={author.image} alt={author.name} />

        <div className="details-info">
          <h1>{author.name}</h1>
          <p>{author.description}</p>
          <span>⭐ {author.rating}</span>
        </div>
      </div>

      {/* 👇 AUTHOR BOOKS */}
      <div className="author-books">
        <h2>📚 Books by {author.name}</h2>

        <div className="books-grid">
          {authorBooks.map(book => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AuthorDetails;