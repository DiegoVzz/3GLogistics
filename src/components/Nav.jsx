// Nav.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, HomeIcon, PhoneIcon, InfoIcon } from '../components/Icons'
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-content">
          <div className="logo">3G Logistics</div>

          {/* Botón del menú hamburguesa para móviles */}
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </button>

          {/* Opciones de navegación para pantallas grandes */}
          <nav className="nav-links">
            <NavLink className="menu-item" to="/Principal">
              Principal
            </NavLink>

            <NavLink className="menu-item" to="/Nosotros">
              Nosotros
            </NavLink>
            
            <NavLink className="menu-item" to="/Servicios">
              Servicios
            </NavLink>
            <button>Cotizar</button>
          </nav>
        </div>
      </header>

      {/* Overlay para el menú móvil */}
      <div
        className={`overlay ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menú lateral para móviles */}
      <div className={`side-menu ${menuOpen ? 'visible' : ''}`}>
        <nav className="menu-nav">
          <NavLink className="menu-item" to="/Principal">
            <HomeIcon className="icon"/>
            Principal
          </NavLink>

          <NavLink className="menu-item" to="/Nosotros">
            <HomeIcon className="icon"/>
            Nosotros
          </NavLink>
          
          <NavLink className="menu-item" to="/Servicios">
            <HomeIcon className="icon"/>
            Servicios
          </NavLink>
          
          <button onClick={() => setMenuOpen(false)}>Cotizar</button>
        </nav>
      </div>
    </>
  );
};

export default Nav;
