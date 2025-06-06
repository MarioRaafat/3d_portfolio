// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import {useState} from 'react'
import {
    //logo,
    menu,
    close
} from '../../assets/index.js'
import { navLinks } from '../../constants/constants.js'
// import { styles } from '../../styles.js'
import "./Navbar.css"

const Navbar = () => {
    const [mode, setMode] = useState("");
    //const [active, setActive] = useState("");

    const handleClick = () => {
        window.history.pushState(
            null,
            document.title,
            window.location.pathname + window.location.search
        )};

    function handleMenuToggle() {
    setMode(mode === "open" ? "" : "open");
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.style.display = mode === "open" ? 'none' : 'block';
    }

    function closeMenu() {
    setMode("");
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = 'none';
    }

    return (
    <div className="h-16 flex justify-between items-center navbar">
        <nav>
            <div className="left-nav-holder" onClick={() => {
                    window.scrollTo(0, 0);
                    handleClick();
                }}>
                    {/*<div><img src={logo} alt="logo"/></div>*/}
                    <div className="author-name">Mario Raafat | Portfolio </div>
            </div>

            <div className="right-nav-holder">
                <ul className="nav-links">
                    {navLinks.map((link, index) => (
                        <li key={index} className="nav-link" onClick={() => {
                            // setActive(link.title);
                        }}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hamburger-menu" onClick={handleMenuToggle}>
                <img src={mode === "" ? menu : close} alt="menu"/>
            </div>

            <ul className="mobile-menu">
                {navLinks.map((link, index) => (
                    <li key={index} className="nav-link" onClick={closeMenu}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    )
}

export default Navbar