import { useNavigate } from "react-router-dom";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import NewestBook from "../component/NewestBook";
import Trending from "../component/Trending";
import books, { authors, reviews } from "../assets/assest";
import Author from "../component/Author";
import Banner from "../component/Banner";
import BigBanner from "../component/bigBanner";
import Testimonial from "../component/Testimonial";
import Footer from "../component/Footer";
import ReadingSchedule from "../component/ReadingSchedule";
import RecommendedBooks from "../component/RecommendedBooks";

function Home() {
  const navigate = useNavigate();

  const handleSelectBook = (book) => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <NewestBook onSelectBook={handleSelectBook} />
      <Trending books={books} />
       <Banner/>
      <Author authors={authors}/>
     <BigBanner/>
     <Testimonial reviews={reviews}/>
     <ReadingSchedule/>

     <Footer/>
    </div>
  );
}

export default Home;