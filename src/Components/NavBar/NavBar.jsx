import React from "react";
import "./NavBar.css";
import { BsBook } from "react-icons/bs";
import { TbTriangleInverted } from "react-icons/tb";

const NavBar = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li className="nav__title">
            <div className="nav__brand-icon">
              <BsBook />
            </div>
            <div className="nav__brand-name">SPR LIBROS</div>
          </li>
          <li className="search">
            <div className="input-container">
              <input
                type="search"
                name=""
                id="search"
                className="search__input"
                placeholder="¿Que estás buscando?"
              />
            </div>
          </li>
          <li className="buttons">
            <ul className="buttons__list">
              <li className="buttons__news">Novedades</li>
              <li className="buttons__promotions">Promociones</li>
              <li className="buttons_categories">
                Categorias
                <div className="buttons_categories-icon">
                  <TbTriangleInverted />
                </div>
                <ul className="items">
                  <li>Cientificos</li>
                  <li>Novelas</li>
                  <li>Cuentos</li>
                  <li>Poesía</li>
                </ul>
              </li>
              <li className="buttons_contact">Contacto</li>
            </ul>
          </li>
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
