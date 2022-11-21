import React from "react";
import "./NavBar.css";
import { BsBook } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbTriangleInverted } from "react-icons/tb";

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
            <div className="input-container">
              <input
                type="search"
                name=""
                id="search"
                placeholder="¿Que estás buscando?"
              />
            </div>
          </li>
          <li className="sub-item">Novedades</li>
          <li className="sub-item">Promociones</li>
          <li class="categorias">
            Categorias
            <div className="categorias-icon">
              <TbTriangleInverted />
            </div>
            <ul class="items">
              <li>Cientificos</li>
              <li>Novelas</li>
              <li>Cuentos</li>
              <li>Poesía</li>
            </ul>
          </li>
          <li className="contacto">Contacto</li>
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
