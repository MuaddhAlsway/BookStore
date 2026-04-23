import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import BookDetailsPage from "./Pages/BookDetailsPage";
import BooksPage from "./Pages/pagesbook";
import Author from "./component/Author";
import AuthorDetails from "./Pages/AuthorDetails";
import { authors } from "./assets/assest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 Home page */}
        <Route path="/" element={<Home />} />

        {/* 📚 All books page */}
        <Route path="/books" element={<BooksPage />} />

        {/* 📖 Book details page */}
        <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/" element={<Author authors={authors} />} />
        <Route path="/author/:id" element={<AuthorDetails authors={authors} />} />

            
              

      </Routes>
    </BrowserRouter>
  );
}

export default App;