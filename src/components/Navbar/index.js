import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../../assets/images/LogoBranca64.png'

import './styles.scss'

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false)

  function menuHandleClick() {
    setMenuClick(!menuClick)
  }

  return (
    <nav id='navbar'>
      <div className="nav-container">
        <Link to="/" exact className="logo"><img src={logo} alt="Find Jobs" /><h1>FindJobs</h1></Link>
        <div className="hamburger-menu" onClick={menuHandleClick}>
          { menuClick ? (<FaTimes />) : (<FaBars />)}
        </div>
        <div className="nav-menu-wrapper">
          <ul className={ menuClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" exact className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/classes" className="nav-link">Aulas</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projetos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}