import books from "../assets/assest.js";
import "./NewestBook.css";

function NewestBook({ onSelectBook }) {
  const newBooks = books.filter((book) => book.isNew);

  return (
    <section className="newest">
      <h2 className="section-title">New & Latest Books</h2>

      <div className="books-grid">
        {newBooks.map((book) => (
          <div
            className="book-card"
            key={book.id}
            onClick={() => onSelectBook?.(book)}
          >
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
<p>${book.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewestBook;