import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
 return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
            About
        </Link>,
        <Link key={2} className="nav-link text-light" to="/Contact">
            Contact
        </Link>,
        <Link key={3} className="nav-link text-light" to="/Portfolio">
            Portfolio
        </Link>,
        <Link key={4} className="nav-link text-light" to="/Resume">
            Resume
        </Link>
      ]}
    />
  )
}