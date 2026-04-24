import "./ReadingSchedule.css";

export default function ReadingSchedule({ sessions = [], updateSession }) {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">📚 Your Reading Schedule</h2>

      <div className="schedule-grid">
        {sessions.map((book) => {
          // ✅ Safe progress calculation
          const progress = book.pagesPlanned
            ? Math.min((book.pagesRead / book.pagesPlanned) * 100, 100)
            : 0;

          return (
            <div className="schedule-card" key={book.id}>
              
              {/* ✅ Cover with fallback + overlay */}
              <div className="cover">
                <img
                  src={book.image}
                  alt={book.bookTitle}
                  onError={(e) => {
                    e.target.src = "/fallback.jpg"; // put image in public/
                  }}
                />
                <div className="overlay">
                  <p>Read Now</p>
                </div>
              </div>

              {/* ✅ Info */}
              <div className="info">
                <h3>{book.bookTitle}</h3>
                <p className="author">{book.author}</p>

                <p className="time">
                  📅 {book.date} • ⏰ {book.time}
                </p>

                <p className="pages">
                  {book.pagesRead} / {book.pagesPlanned} pages
                </p>

                {/* ✅ Progress */}
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* ✅ Button / Status */}
                {book.status === "pending" ? (
                  <button
                    onClick={() => updateSession(book.id)}
                    className="complete-btn"
                  >
                    {book.pagesRead > 0
                      ? "Finish Reading"
                      : "Start Reading"}
                  </button>
                ) : (
                  <span className="done">✅ Completed</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}