import { useState } from "react";
import books from "../assets/assest";
import BookDetails from "./BookDetails";
import "./BooksPages.css";

function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="books-page">

      {/* 📚 LEFT: BOOK LIST */}
      <div className="books-grid">
        {books.map((book) => (
          <div
            key={book.id}
            className={`book-card ${selectedBook?.id === book.id ? "active" : ""}`}
            onClick={() => setSelectedBook(book)}
          >
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>

      {/* 📖 RIGHT: DETAILS */}
      <div className="book-details-container">
        {selectedBook ? (
          <BookDetails book={selectedBook} />
        ) : (
          <div className="empty-state">
            <h2>Select a Book</h2>
            <p>Click on any book to view details</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default BooksPage;