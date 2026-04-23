import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>📚 BookStore</h2>
          <p>
            Discover books, authors, and reviews in one modern platform.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Books</a>
          <a href="#">Authors</a>
          <a href="#">Reviews</a>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h3>Categories</h3>
          <a href="#">Programming</a>
          <a href="#">Business</a>
          <a href="#">Self Development</a>
          <a href="#">Design</a>
        </div>

        {/* Subscribe */}
        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Get latest updates and new books.</p>
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BookStore. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;