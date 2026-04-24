# 📚 MUBookStore - Academic Bookstore Platform

A modern, feature-rich React-based bookstore application designed for discovering, browsing, and managing academic and self-development books. Built with React 19, Vite, and React Router for a seamless user experience.

---

## 🎯 Project Overview

MUBookStore is a full-featured online bookstore platform that provides users with:
- **Browse & Discover**: Explore 100+ books across multiple categories
- **Book Details**: View comprehensive information about each book
- **Author Profiles**: Discover featured authors and their works
- **Customer Reviews**: Read verified purchase reviews and ratings
- **Reading Schedule**: Track your reading progress with interactive schedules
- **Responsive Design**: Optimized for desktop and mobile devices

---

## 🏗️ Project Structure

```
client/
├── src/
│   ├── component/              # Reusable UI components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section with video background
│   │   ├── NewestBook.jsx      # Latest books showcase
│   │   ├── Trending.jsx        # Trending books grid
│   │   ├── Author.jsx          # Featured authors carousel (GSAP)
│   │   ├── Testimonial.jsx     # Customer reviews section
│   │   ├── ReadingSchedule.jsx # Reading progress tracker
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Banner.jsx          # Promotional banner
│   │   ├── BigBanner.jsx       # Large banner section
│   │   ├── RecommendedBooks.jsx# Recommended books
│   │   └── [component].css     # Component-specific styles
│   │
│   ├── Pages/                  # Page-level components
│   │   ├── Home.jsx            # Home page (main landing)
│   │   ├── BookDetailsPage.jsx # Individual book detail page
│   │   ├── BookDetails.jsx     # Book details component
│   │   ├── pagesbook.jsx       # All books browsing page
│   │   ├── AuthorDetails.jsx   # Author profile page
│   │   └── [page].css          # Page-specific styles
│   │
│   ├── assets/
│   │   ├── assest.js           # Static data (books, authors, reviews)
│   │   ├── hero.png            # Hero image
│   │   └── react.svg           # React logo
│   │
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
│
├── public/
│   ├── HeroVideo.mp4           # Hero section video
│   ├── icons.svg               # Icon sprite
│   └── favicon.svg             # Site favicon
│
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

---

## 🚀 Features

### 1. **Home Page**
- Hero section with background video and call-to-action buttons
- Newest books showcase
- Trending books grid with filtering
- Featured authors carousel (animated with GSAP)
- Customer testimonials/reviews
- Reading schedule tracker
- Promotional banners
- Footer with links and newsletter subscription

### 2. **Book Browsing**
- **All Books Page** (`/books`): Grid layout with book cards and detail panel
- **Book Details Page** (`/book/:id`): Full book information including:
  - Book cover image
  - Title, author, genre
  - Rating and reviews
  - Price and availability
  - Page count and language
  - Detailed description
  - Buy Now and Add to Cart buttons
  - Back to Home navigation

### 3. **Author Profiles**
- Featured authors carousel on home page
- Individual author detail pages (`/author/:id`)
- Author information and rating
- Books filtered by author
- Navigation to book details from author page

### 4. **Reading Schedule**
- Track reading progress with visual progress bars
- View scheduled reading sessions
- Mark sessions as completed
- Display pages read vs. planned
- Date and time information for each session

### 5. **Customer Reviews**
- Verified purchase badges
- Star ratings (1-5 stars)
- User testimonials with book information
- Book cover images in review cards

---

## 📊 Data Structure

### Books Data (`assest.js`)
Each book object contains:
```javascript
{
  id: number,
  title: string,
  author: string,
  releasedTime: date,
  status: "published",
  rating: number (0-5),
  genre: string,
  price: number,
  pages: number,
  language: string,
  image: URL,
  description: string,
  isTrending: boolean,
  isBest: boolean,
  isNew: boolean
}
```

### Authors Data
```javascript
{
  id: number,
  name: string,
  rating: number,
  image: URL,
  description: string
}
```

### Reviews Data
```javascript
{
  id: number,
  userName: string,
  rating: number (1-5),
  bookTitle: string,
  bookImage: URL,
  comment: string
}
```

### Reading Schedule Data
```javascript
{
  id: number,
  bookTitle: string,
  author: string,
  image: URL,
  date: string,
  time: string,
  pagesRead: number,
  pagesPlanned: number,
  status: "pending" | "completed"
}
```

---

## 🛣️ Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main landing page with all sections |
| `/books` | BooksPage | Browse all books with detail panel |
| `/book/:id` | BookDetailsPage | Individual book details with back button |
| `/author/:id` | AuthorDetails | Author profile with their books |

---

## 🎨 Styling Approach

- **CSS Modules**: Each component has its own CSS file for scoped styling
- **No CSS Framework**: Pure CSS with flexbox and grid layouts
- **Responsive Design**: Mobile-first approach with media queries
- **Color Scheme**: Professional with accent colors for CTAs
- **Animations**: GSAP library for smooth animations (author carousel)

---

## 🛠️ Tech Stack

| Icon | Technology | Version | Purpose |
|------|-----------|---------|---------|
| ⚛️ | React | 19.2.5 | UI library |
| 🛣️ | React Router DOM | 7.14.2 | Client-side routing |
| ⚡ | Vite | 8.0.9 | Build tool and dev server |
| ✨ | GSAP | 3.15.0 | Animation library |
| 🔍 | ESLint | 9.39.4 | Code quality |
| 🎨 | CSS3 | - | Styling & layouts |
| 📦 | npm | - | Package manager |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run linter**
   ```bash
   npm run lint
   ```

---

## 🎯 Key Components

### Navbar
- Logo linking to home
- Navigation links to All Books, Trending, Best
- Subscribe button

### Hero
- Full-screen video background
- Headline and description
- Call-to-action buttons
- Statistics display (100+ Books, 4.8 Rating, 24/7 Learning)

### Trending
- Filters books with `isTrending: true`
- Grid layout with book cards
- Click to navigate to book details
- Displays rating and price

### Author (Carousel)
- GSAP-powered infinite scroll animation
- Featured authors with images
- View Profile button for each author
- Responsive card layout

### ReadingSchedule
- Progress bar visualization
- Pages read vs. planned
- Start/Finish reading buttons
- Completion status tracking

### Testimonial
- Customer review cards
- Verified purchase badges
- Star rating display
- Book information with cover image

---

## 🔄 User Flow

1. **Landing**: User arrives at home page with hero section
2. **Explore**: Browse trending books, newest books, and featured authors
3. **Discover**: Click on any book to view full details
4. **Learn**: Read customer reviews and author information
5. **Track**: Add books to reading schedule and track progress
6. **Browse**: Visit `/books` page to see all available books
7. **Navigate**: Use back buttons and navbar to move between pages

---

## 🎨 Customization

### Adding New Books
Edit `client/src/assets/assest.js` and add to the `books` array:
```javascript
{
  id: 34,
  title: "Your Book Title",
  author: "Author Name",
  // ... other properties
}
```

### Adding New Authors
Add to the `authors` array in `assest.js`:
```javascript
{
  id: 11,
  name: "Author Name",
  rating: 4.8,
  image: "URL",
  description: "Bio"
}
```

### Styling Components
Each component has a corresponding CSS file. Modify styles in:
- `client/src/component/[Component].css`
- `client/src/Pages/[Page].css`

---

## 🚀 Performance Optimizations

- **Lazy Loading**: Images use native lazy loading
- **GSAP Animations**: Optimized with context cleanup
- **React Router**: Client-side routing for fast navigation
- **Vite**: Fast build and dev server with HMR

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- Static data (no backend API)
- No user authentication
- No shopping cart persistence
- No payment integration

### Planned Features
- Backend API integration
- User authentication and profiles
- Shopping cart with checkout
- Book search and advanced filtering
- Wishlist functionality
- User ratings and reviews
- Email notifications

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on the repository or contact the development team.

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [GSAP Documentation](https://gsap.com)

---

**Last Updated**: April 2026  
**Version**: 1.0.0
