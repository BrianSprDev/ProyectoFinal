import React from "react";
import "./NavBar.css";
import { BsBook } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = ({ children }) => {
  return (
    <div>
      <nav>
        <ul class="menu">
          <li className="home">
            <AiOutlineHome />
          </li>
          <li className="brand-container">
            <div className="brand">SPR LIBROS</div>
            <div className="brand-icon">
              <BsBook />
            </div>
          </li>
          <li>
            <input
              type="search"
              name=""
              id="search"
              placeholder="¿Que estás buscando?"
            />
          </li>
          <li class="categorias">
            Categorias
            <ul class="items">
              <li>Cientificos</li>
              <li>Novelas</li>
              <li>Cuentos</li>
            </ul>
          </li>
          <li className="about">Sobre Nosotros</li>
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
