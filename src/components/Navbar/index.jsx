import './index.scss';
import React, { useState, useEffect, useRef } from 'react';
import rohanPandey from '../../assets/images/RohanPandey.png';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle, AiFillTool, AiFillFile, AiFillPhone } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);
    
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-left">
                    <Link to="/">
                        <img src={rohanPandey} alt="RohanPandey" />
                    </Link>
                </div>
                <div className="navbar-center">
                    <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/works" onClick={toggleMenu} className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
                    <Link to="/about" onClick={toggleMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/resume" onClick={toggleMenu} className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/contact" onClick={toggleMenu}>Get in touch</Link>
                </div>
                <div id="navbar-dropdown-menu" className={`navbar-dropdown ${menuOpen ? 'navbar-dropdown-open' : ''}`} ref={dropdownRef}>
                    <div className="navbar-dropdown-content">
                        <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}><AiFillHome style={{marginRight:"5px"}}/>Home</Link>
                        <Link to="/works" onClick={toggleMenu} className={location.pathname === '/works' ? 'active' : ''}><AiFillTool style={{marginRight:"5px"}}/>Works</Link>
                        <Link to="/about" onClick={toggleMenu} className={location.pathname === '/about' ? 'active' : ''}><AiFillInfoCircle style={{marginRight:"5px"}}/>About</Link>
                        <Link to="/resume" onClick={toggleMenu} className={location.pathname === '/resume' ? 'active' : ''}><AiFillFile style={{marginRight:"5px"}}/>Resume</Link>
                        <Link to="/contact" onClick={toggleMenu} ><AiFillPhone style={{marginRight:"5px"}}/>Get in touch</Link>
                    </div>
                </div>
                <button className="hamburger" onClick={toggleMenu} aria-controls="navbar-dropdown-menu" aria-expanded={menuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;