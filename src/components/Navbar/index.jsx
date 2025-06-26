import './index.scss';
import React, { useState, useEffect, useRef } from 'react';
import rohanPandey from '../../assets/images/RohanPandey.png';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle, AiFillTool, AiFillFile, AiFillPhone } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const hamburgerRef = useRef(null);
    const toggleMenu = () => setMenuOpen((open) => !open);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        setMenuOpen(false); // Close menu on route change
    }, [location.pathname]);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={rohanPandey} alt="RohanPandey" />
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/works" className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
            </div>
            <div className="navbar-right">
                <Link to="/contact">Get in touch</Link>
            </div>
            {/* Mobile Dropdown */}
            <div
                id="navbar-dropdown-menu"
                className={`navbar-dropdown${menuOpen ? ' navbar-dropdown-open' : ''}`}
                ref={dropdownRef}
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
            >
                <div className={`navbar-dropdown-content${menuOpen ? ' show' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} style={{ '--i': 0 }}><AiFillHome style={{marginRight:"8px"}}/>Home</Link>
                    <Link to="/works" className={location.pathname === '/works' ? 'active' : ''} style={{ '--i': 1 }}><AiFillTool style={{marginRight:"8px"}}/>Works</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} style={{ '--i': 2 }}><AiFillInfoCircle style={{marginRight:"8px"}}/>About</Link>
                    <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''} style={{ '--i': 3 }}><AiFillFile style={{marginRight:"8px"}}/>Resume</Link>
                    <Link to="/contact" style={{ '--i': 4 }}><AiFillPhone style={{marginRight:"8px"}}/>Get in touch</Link>
                </div>
            </div>
            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-controls="navbar-dropdown-menu"
                aria-expanded={menuOpen}
                ref={hamburgerRef}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;