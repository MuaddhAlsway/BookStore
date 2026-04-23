import { useParams, useNavigate } from "react-router-dom";
import books from "../assets/assest.js";
import BookDetails from "./BookDetails";
import './BookDetails.css'

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find book by URL id
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <div className="book-not-found"><h2>Book not found</h2></div>;
  }

  return (
    <div>
      <button 
        onClick={() => navigate("/")}
        style={{
          margin: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#bd8407ff",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        ← Back to Home
      </button>
      <BookDetails book={book} />
    </div>
  );
}

export default BookDetailsPage;