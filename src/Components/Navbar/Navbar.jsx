import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState('navBar');
    // Function to toggle navBar
    const showNav = () => {
        setShowMenu('navBar active');
    };
    // Function to remove navBar
    const removeNav = () => {
      setShowMenu('navBar');
  };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdOutlineTravelExplore className="icon" /> Travel.
                        </h1>
                    </a>
                </div>

                <div className={showMenu}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                Packages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                Shop
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                About
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                Pages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                News
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#!" className="navLink">
                                Contact
                            </a>
                        </li>
                        <button className="btn">
                            <a href="#!">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <HiMenuAlt1 className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
