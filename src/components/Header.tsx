import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header header--white">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/cities" className="header__logo-link">
            <span>Explore</span> Italy
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`header__nav-button ${open ? 'header__nav-button--open' : ''}`}>
          <span className="header__nav-button-line"></span>
        </button>
        <div className="header__nav-wrapper">
          <ul className="header__nav">
            <li className="header__nav-item">
              <div className="header__link-wrapper">
                <Link
                  to={"/cities"}
                  onClick={() => setOpen(false)}
                  className="header__nav-link">Cities</Link>
              </div>
            </li>
            <li className="header__nav-item">
              <div className="header__link-wrapper">
                <Link to={"/"} className="header__nav-link">About us</Link>
              </div>
            </li>
            <li className="header__nav-item">
              <div className="header__link-wrapper">
                <Link to={"/"} className="header__nav-link">Contacts</Link>
              </div>
            </li>
          </ul>
          <div className="header__user">
            <Link to="/cities" className="header__user-link"><span className="visually-hidden">User</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="13.5" stroke="black"></circle>
                <path d="M6.5 25C6.5 25 9 17.5 6.99997 15C6.99997 15 4.99997 13 6.99997 11C8.99997 9 10.5 11.5 11 11C11.4999 10.5 9.49995 7.5 11 6C12.5 4.5 15.5 4.49999 17 6C18.4999 7.50001 16 11.5 17 11C17.9999 10.5 19.4999 9.5 21 11C22.5 12.5 21 15 21 15C19 18.5 21.5 25 21.5 25" stroke="black"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
