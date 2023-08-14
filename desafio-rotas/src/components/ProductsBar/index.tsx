import "./styles.css";
import { NavLink } from "react-router-dom";

export default function ProductBar() {
  return (
    <header className="container ">
      <nav className="product-bar">
        <NavLink to="computers" className={({isActive})=> isActive ? "active-bar" : "deactive-bar"} > Computadores</NavLink>
        <NavLink to="eletronics" className={({isActive})=> isActive ? "active-bar" : "deactive-bar"} > Eletrônicos</NavLink>
        <NavLink to="books" className={({isActive})=> isActive ? "active-bar" : "deactive-bar"} > Livros</NavLink>
      </nav>
    </header>
  );
}
