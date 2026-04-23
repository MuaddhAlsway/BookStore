import "./ReadingSchedule.css";

function ReadingSchedule() {
  const schedule = [
    {
      day: "Monday",
      sessions: [
        { time: "6:30 PM", task: "Clean Code (Technical)" },
        { time: "9:30 PM", task: "English Reading" },
      ],
    },
    {
      day: "Tuesday",
      sessions: [
        { time: "6:30 PM", task: "JavaScript Book" },
        { time: "9:30 PM", task: "Light Reading" },
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "6:30 PM", task: "SICP Study" },
        { time: "9:30 PM", task: "Review Notes" },
      ],
    },
    {
      day: "Thursday",
      sessions: [
        { time: "6:30 PM", task: "Project + Reading" },
        { time: "9:30 PM", task: "Light Book" },
      ],
    },
    {
      day: "Friday",
      sessions: [
        { time: "10:00 AM", task: "Deep Reading (2 hrs)" },
        { time: "6:00 PM", task: "Summary + Notes" },
      ],
    },
    {
      day: "Saturday",
      sessions: [
        { time: "10:00 AM", task: "Technical Reading" },
        { time: "6:00 PM", task: "Light Reading" },
      ],
    },
    {
      day: "Sunday",
      sessions: [
        { time: "6:00 PM", task: "Weekly Review" },
      ],
    },
  ];

  return (
    <div className="schedule">
      <h2 className="schedule__title">📅 Reading Schedule</h2>

      <div className="schedule__grid">
        {schedule.map((day, index) => (
          <div className="schedule__card" key={index}>
            <h3>{day.day}</h3>

            {day.sessions.map((session, i) => (
              <div className="session" key={i}>
                <span className="time">{session.time}</span>
                <span className="task">{session.task}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingSchedule;