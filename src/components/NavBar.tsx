import { Link } from "react-router-dom";
import fullLogo from "../assets/FullLogo.png";

function NavBar() {
    return (
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/">
  <img src={fullLogo} alt="Rames Y Raices Publishing" className="h-12 w-auto" />
</Link>
<div className="flex gap-6 text-base font-medium">
  <Link
    to="/catalog"
    className="text-[#1E3A8A] hover:text-[#F4C430] transition"
  >
    Shop Music
  </Link>
  <Link
    to="/composers"
    className="text-[#1E3A8A] hover:text-[#F4C430] transition"
  >
    Meet the Composers
  </Link>
  <Link
    to="/about"
    className="text-[#1E3A8A] hover:text-[#F4C430] transition"
  >
    About Us
  </Link>
</div>

<div className="flex gap-4 items-center text-sm font-medium">
  <a
    href="#"
    className="text-[#374151] hover:text-[#F4C430] transition"
  >
    Login
  </a>
  <a
    href="#"
    className="text-[#374151] hover:text-[#F4C430] transition"
  >
    Cart (0)
  </a>
</div>

      </nav>
    );
  }
  
  export default NavBar;