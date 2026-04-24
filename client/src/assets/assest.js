

const books = [
  // =========================
  // 🔥 TRENDING BOOKS
  // =========================
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    releasedTime: "2008-08-01",
    status: "published",
    rating: 4.8,
    genre: "Programming",
    price: 55,
    pages: 464,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    description: "A handbook of agile software craftsmanship.",
    isTrending: true,
    isBest: true,
    isNew: false
  },
  
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    releasedTime: "1999-10-20",
    status: "published",
    rating: 4.9,
    genre: "Programming",
    price: 60,
    pages: 352,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
    description: "Journey to mastery in software development.",
    isTrending: true,
    isBest: true,
    isNew: false
  },
  {
    id: 4,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    releasedTime: "2018-12-04",
    status: "published",
    rating: 4.6,
    genre: "Programming",
    price: 42,
    pages: 472,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg",
    description: "Modern introduction to JavaScript programming.",
    isTrending: true,
    isBest: false,
    isNew: false
  },
  {
    id: 5,
    title: "Computer Science: An Overview",
    author: "J. Glenn Brookshear",
    releasedTime: "2015-01-01",
    status: "published",
    rating: 4.5,
    genre: "Programming",
    price: 65,
    pages: 720,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780133760064-L.jpg",
    description: "Complete overview of computer science fundamentals.",
    isTrending: true,
    isBest: true,
    isNew: false
  },
  {
    id: 10,
    title: "Can't Hurt Me",
    author: "David Goggins",
    releasedTime: "2018-12-04",
    status: "published",
    rating: 4.8,
    genre: "Motivation",
    price: 52,
    pages: 364,
    language: "English",
    image: "https://covers.openlibrary.org/b/id/9259256-L.jpg",
    description: "Master your mind and defy limits.",
    isTrending: false,
    isBest: true,
    isNew: false
  },
  {
    id: 11,
    title: "Ikigai",
    author: "Héctor García",
    releasedTime: "2016-08-29",
    status: "published",
    rating: 4.5,
    genre: "Philosophy",
    price: 38,
    pages: 208,
    language: "English",
    image: "https://covers.openlibrary.org/b/id/8779256-L.jpg",
    description: "Japanese secret to long life.",
    isTrending: false,
    isBest: true,
    isNew: false
  },
 
  {
    id: 25,
    title: "Atomic Habits",
    author: "James Clear",
    releasedTime: "2018-10-16",
    status: "published",
    rating: 4.8,
    genre: "Self Development",
    price: 45,
    pages: 320,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    description: "A practical guide to building good habits and breaking bad ones through small consistent changes.",
    isTrending: false,
    isBest: true,
    isNew: true
  },
  {
    id: 26,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    releasedTime: "2012-02-28",
    status: "published",
    rating: 4.7,
    genre: "Self Development",
    price: 42,
    pages: 371,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
    description: "Explains how habits work and how they can be changed to improve life and productivity.",
    isTrending: false,
    isBest: true,
    isNew: true
  },
  {
    id: 27,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    releasedTime: "1937-01-01",
    status: "published",
    rating: 4.6,
    genre: "Self Development",
    price: 30,
    pages: 238,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
    description: "Classic success philosophy focusing on mindset, goals, and personal achievement.",
    isTrending: false,
    isBest: true,
    isNew: true
  },
  {
    id: 28,
    title: "Deep Work",
    author: "Cal Newport",
    releasedTime: "2016-01-05",
    status: "published",
    rating: 4.7,
    genre: "Productivity",
    price: 48,
    pages: 304,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    description: "Teaches how to focus without distraction and achieve high-level productivity.",
    isTrending: false,
    isBest: true,
    isNew: true
  },
  {
    id: 29,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    releasedTime: "2016-09-13",
    status: "published",
    rating: 4.5,
    genre: "Self Development",
    price: 40,
    pages: 224,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    description: "A counterintuitive approach to living a meaningful life by focusing only on what matters.",
    isTrending: false,
    isBest: true,
    isNew: true
  },
  {
    id: 30,
    title: "Educated",
    author: "Tara Westover",
    releasedTime: "2018-02-20",
    status: "published",
    rating: 4.8,
    genre: "Memoir",
    price: 48,
    pages: 352,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
    description: "A memoir about a young woman who leaves her survivalist family to pursue education.",
    isTrending: true,
    isBest: true,
    isNew: true
  },
  {
    id: 32,
    title: "Mindset",
    author: "Carol S. Dweck",
    releasedTime: "2006-02-28",
    status: "published",
    rating: 4.6,
    genre: "Psychology",
    price: 44,
    pages: 320,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg",
    description: "Explores the power of a growth mindset in achieving success.",
    isTrending: true,
    isBest: true,
    isNew: true
  },
  {
    id: 33,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    releasedTime: "2020-09-08",
    status: "published",
    rating: 4.7,
    genre: "Finance",
    price: 50,
    pages: 256,
    language: "English",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    description: "Teaches how human behavior shapes financial success more than knowledge.",
    isTrending: true,
    isBest: true,
    isNew: true
  },
  {
    id: 13,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    releasedTime: "2011-01-01",
    status: "published",
    rating: 4.9,
    genre: "History",
    price: 60,
    pages: 498,
    language: "English",
    image: "https://covers.openlibrary.org/b/id/8370226-L.jpg",
    description: "History of humankind.",
    isTrending: false,
    isBest: true,
    isNew: false
  }
  
];


export const authors = [
  {
    id: 1,
    name: "Robert C. Martin",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=1",
    description: "Clean Code author."
  },
  {
    id: 2,
    name: "Kyle Simpson",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=2",
    description: "You Don’t Know JS."
  },
  {
    id: 3,
    name: "Cal Newport",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=3",
    description: "Deep Work expert."
  },
  {
    id: 4,
    name: "James Clear",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=4",
    description: "Atomic Habits author."
  },
  {
    id: 5,
    name: "Martin Fowler",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=5",
    description: "Refactoring expert."
  },
  {
    id: 6,
    name: "Kent C. Dodds",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=6",
    description: "React expert."
  },
  {
    id: 7,
    name: "Dan Abramov",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=7",
    description: "Redux creator."
  },
  {
    id: 8,
    name: "Evan You",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=8",
    description: "Vue creator."
  },
  {
    id: 9,
    name: "Addy Osmani",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=9",
    description: "Frontend performance."
  },
  {
    id: 10,
    name: "Eric Elliott",
    rating: 4.6,
    image: "https://i.pravatar.cc/300?img=10",
    description: "Functional programming."
  }
];

export const reviews = [
  
   
  {
    id: 1,
    bookTitle: "Clean Code",
    bookImage: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    userName: "Ahmed Ali",
    rating: 5,
    comment: "This book completely changed how I write code. Very practical and deep."
  },
  {
    id: 2,
    bookTitle: "You Don't Know JS",
    bookImage: "https://covers.openlibrary.org/b/isbn/9781491904244-L.jpg",
    userName: "Sara Khan",
    rating: 4,
    comment: "Great for understanding JavaScript deeply, but a bit advanced."
  },
  {
    id: 3,
    bookTitle: "Atomic Habits",
    bookImage: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    userName: "John Smith",
    rating: 5,
    comment: "Best book on habits. Simple but powerful ideas."
  },
  {
    id: 4,
    bookTitle: "Deep Work",
    bookImage: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    userName: "Omar Hassan",
    rating: 5,
    comment: "Helped me focus and improve productivity massively."
  },
  {
    id: 5,
    bookTitle: "Refactoring",
    bookImage: "https://covers.openlibrary.org/b/isbn/9780201485677-L.jpg",
    userName: "Lina Mohammed",
    rating: 4,
    comment: "Very useful for improving existing codebases."
  },
  {
    id: 6,
    bookTitle: "Eloquent JavaScript",
    bookImage: "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg",
    userName: "David Lee",
    rating: 5,
    comment: "Best beginner to intermediate JS book."
  },
  {
    id: 7,
    bookTitle: "Design Patterns",
    bookImage: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
    userName: "Ali Hassan",
    rating: 4,
    comment: "Classic book, very important for architecture."
  },
  {
    id: 8,
    bookTitle: "Clean Architecture",
    bookImage: "https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg",
    userName: "Sara Noor",
    rating: 5,
    comment: "Explains system design in a very practical way."
  }
];

export const readingSchedule = [
  {
    id: 1,
    bookId: 101,
    bookTitle: "Clean Code",
    author: "Robert C. Martin",
    image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    date: "2026-04-25",
    time: "20:00",
    pagesPlanned: 25,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 2,
    bookId: 102,
    bookTitle: "Atomic Habits",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    date: "2026-04-26",
    time: "18:30",
    pagesPlanned: 20,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 3,
    bookId: 103,
    bookTitle: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    image: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
    date: "2026-04-27",
    time: "21:00",
    pagesPlanned: 30,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 4,
    bookId: 104,
    bookTitle: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    image: "https://covers.openlibrary.org/b/isbn/9781091210092-L.jpg",
    date: "2026-04-28",
    time: "19:00",
    pagesPlanned: 15,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 5,
    bookId: 105,
    bookTitle: "Deep Work",
    author: "Cal Newport",
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    date: "2026-04-29",
    time: "20:30",
    pagesPlanned: 20,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 6,
    bookId: 106,
    bookTitle: "The Lean Startup",
    author: "Eric Ries",
    image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    date: "2026-04-30",
    time: "18:00",
    pagesPlanned: 25,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 7,
    bookId: 107,
    bookTitle: "Start With Why",
    author: "Simon Sinek",
    image: "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg",
    date: "2026-05-01",
    time: "19:30",
    pagesPlanned: 18,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 8,
    bookId: 108,
    bookTitle: "Zero to One",
    author: "Peter Thiel",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    date: "2026-05-02",
    time: "21:00",
    pagesPlanned: 22,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 9,
    bookId: 109,
    bookTitle: "Refactoring",
    author: "Martin Fowler",
    image: "https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg",
    date: "2026-05-03",
    time: "20:00",
    pagesPlanned: 28,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 10,
    bookId: 110,
    bookTitle: "Design Patterns",
    author: "Erich Gamma",
    image: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
    date: "2026-05-04",
    time: "19:00",
    pagesPlanned: 30,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 11,
    bookId: 111,
    bookTitle: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
    date: "2026-05-05",
    time: "18:30",
    pagesPlanned: 20,
    pagesRead: 0,
    status: "pending"
  },
  {
    id: 12,
    bookId: 112,
    bookTitle: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    date: "2026-05-06",
    time: "21:30",
    pagesPlanned: 18,
    pagesRead: 0,
    status: "pending"
  }
];







export default books;