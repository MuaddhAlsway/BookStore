import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MUBookStore</Link>

      <ul className="nav-links">
        <li><Link to="/books">All Books</Link></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#best">Best</a></li>
      </ul>

      <ul className="nav-links">
        <li><a href="#subscribe" className="btn">Subscribe</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;