import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex gap-6">
          <Link
            to="/catalog"
            className="text-gray-700 font-medium hover:text-gray-900 transition"
          >
            Shop Music
          </Link>
          <Link
            to="/composers"
            className="text-gray-700 font-medium hover:text-gray-900 transition"
          >
            Meet the Composers
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-gray-900 transition"
          >
            About Us
          </Link>
        </div>
  
        <div className="flex gap-4 items-center">
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-gray-900 transition"
          >
            Login
          </a>
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-gray-900 transition"
          >
            Cart (0)
          </a>
        </div>
      </nav>
    );
  }
  
  export default NavBar;