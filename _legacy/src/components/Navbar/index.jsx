import './index.scss';
import React, { useState, useEffect, useRef } from 'react';
import rohanPandey from '../../assets/images/RohanPandey.png';
import { Link, useLocation } from 'react-router-dom';
import { LuHouse, LuUser, LuBriefcase, LuFileText, LuPhone } from 'react-icons/lu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const hamburgerRef = useRef(null);
    const toggleMenu = () => setMenuOpen((open) => !open);

    const linksRef = useRef({});
    const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        const activeLink = linksRef.current[location.pathname];
        if (activeLink) {
            setActiveStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
                opacity: 1,
            });
        } else {
            setActiveStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [location.pathname]);

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
                <div
                    className="active-capsule"
                    style={{
                        left: activeStyle.left,
                        width: activeStyle.width,
                        opacity: activeStyle.opacity,
                    }}
                ></div>
                <Link to="/" ref={el => linksRef.current['/'] = el} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/works" ref={el => linksRef.current['/works'] = el} className={location.pathname === '/works' ? 'active' : ''}>Works</Link>
                <Link to="/about" ref={el => linksRef.current['/about'] = el} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/resume" ref={el => linksRef.current['/resume'] = el} className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
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
                onClick={() => setMenuOpen(false)}
            >
                <div className={`navbar-dropdown-content${menuOpen ? ' show' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} style={{ '--i': 0 }} onClick={() => setMenuOpen(false)}><LuHouse style={{marginRight:"8px"}}/>Home</Link>
                    <Link to="/works" className={location.pathname === '/works' ? 'active' : ''} style={{ '--i': 1 }} onClick={() => setMenuOpen(false)}><LuBriefcase style={{marginRight:"8px"}}/>Works</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} style={{ '--i': 2 }} onClick={() => setMenuOpen(false)}><LuUser style={{marginRight:"8px"}}/>About</Link>
                    <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''} style={{ '--i': 3 }} onClick={() => setMenuOpen(false)}><LuFileText style={{marginRight:"8px"}}/>Resume</Link>
                    <Link to="/contact" style={{ '--i': 4 }} onClick={() => setMenuOpen(false)}><LuPhone style={{marginRight:"8px"}}/>Get in touch</Link>
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