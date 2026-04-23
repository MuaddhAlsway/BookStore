import "./bigBanner.css";

function BigBanner() {
  return (
    <div className="big-banner">
        
      <div className="big-banner-content">
       
        <h1>📚 Subscribe for more</h1>
 <div className="tags">
  <span className="tag">📚 Books</span>
  <span className="tag">🔥 Trending</span>
  <span className="tag">⭐ Bestseller</span>
</div>
        <p>
          Get the latest books, trending authors, and exclusive recommendations
          delivered directly to your library.
        </p>

        <button>Subscribe</button>

      </div>
    </div>
  );
}

export default BigBanner;