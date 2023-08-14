import "./styles.css";
import { NavLink } from "react-router-dom";
import logoHome from "../../assets/home.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="nav-bar">
      <nav className="container nav-container">
        <div>
          {" "}
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? "nav-red" : "nav-white")}
          >
            {" "}
            Inicio
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? "nav-red" : "nav-white")}
          >
            {" "}
            Produtos
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "nav-red" : "nav-white")}
          >
            {" "}
            Sobre nós
          </NavLink>
        </div>
        <div>
            <Link to="/">     <img src={logoHome} alt="" /></Link>
      
        </div>
      </nav>
    </header>
  );
}
