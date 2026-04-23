import "./banner.css";

function Banner() {
  return (
    <div className="banner-container">
      
      {/* LEFT BANNER */}
      <div className="banner left-banner">
        <div className="banner-content">
          <h2>📚 Discover New Books</h2>
          <p>Explore trending and best-selling books curated for you.</p>
          <button>Browse Books</button>
        </div>
      </div>

      {/* RIGHT BANNER */}
      <div className="banner right-banner">
        <div className="banner-content">
          <h2>🔥 Top Authors</h2>
          <p>Meet the most popular authors in tech and productivity.</p>
          <button>View Authors</button>
        </div>
      </div>

    </div>
  );
}

export default Banner;