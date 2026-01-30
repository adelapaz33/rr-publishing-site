import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex gap-6 text-base font-medium">
          <Link
            to="/catalog"
            className="text-[#FAF7F2] hover:text-[#D6A73A] transition"
          >
            Shop Music
          </Link>
          <Link
            to="/composers"
            className="text-[#FAF7F2] hover:text-[#D6A73A] transition"
          >
            Meet the Composers
          </Link>
          <Link
            to="/about"
          className="text-[#FAF7F2] hover:text-[#D6A73A] transition"
          >
            About Us
          </Link>
        </div>
  
        <div className="flex gap-4 items-center text-sm font-medium">
          <a
            href="#"
           className="text-[#E6E1D8] hover:opacity-80 transition"
          >
            Login
          </a>
          <a
            href="#"
           className="text-[#E6E1D8] hover:opacity-80 transition"
          >
            Cart (0)
          </a>
        </div>
      </nav>
    );
  }
  
  export default NavBar;