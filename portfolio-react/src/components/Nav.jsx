import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  const currentPage = useLocation().pathname;
 return (
    <Navbar
      links={[
        <Link key={1} className={currentPage === "/" ? "nav-link active" : "nav-link text-light"} to="/">
            About
        </Link>,
        <Link key={2} className={currentPage === "/Contact" ? "nav-link active" : "nav-link text-light"} to="/Contact">
            Contact
        </Link>,
        <Link key={3} className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link text-light"} to="/Portfolio">
            Portfolio
        </Link>,
        <Link key={4} className={currentPage === "/Resume" ? "nav-link active" : "nav-link text-light"} to="/Resume">
            Resume
        </Link>
      ]}
    />
  )
}