import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* 🎥 Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* 🌫 Overlay */}
      <div className="hero-overlay"></div>

      {/* 🧠 Content */}
      <div className="hero-content">
        <span className="tag">📚 Academic Bookstore</span>

        <h1>
          Learn. Build. <br />
          Grow Every Day.
        </h1>

        <p>
          Access the best self-development, programming, and academic books
          designed to upgrade your skills and knowledge.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Explore Books</button>
          <button className="secondary-btn">Browse Categories</button>
        </div>

        <div className="stats">
          <div>
            <h4>100+</h4>
            <span>Books</span>
          </div>
          <div>
            <h4>4.8</h4>
            <span>Rating</span>
          </div>
          <div>
            <h4>24/7</h4>
            <span>Learning</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;