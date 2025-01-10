import './index.scss';
import { Link } from 'react-router-dom';
import rohanPandey from '../../assets/images/RohanPandey.png';
import React from 'react';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className='logo-nav-container'>
                <div className="footer-logo">
                    <Link to="/">
                        <img src={rohanPandey} alt="RohanPandey" />
                    </Link>
                </div>
                <div className="footer-navigation">
                    <Link to="/">Home</Link>
                    <Link to="/works">Works</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/rohanpandeyy/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                <a href="https://github.com/rohan-pandeyy/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://x.com/rohan_pandeyy/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://www.youtube.com/@rushwithronnie/" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
            </div>
            <div className="footer-texts">
                <p>Design by JamesChugh</p>
                <p>Website by Rohan with ❤️</p>
                <p>Personal Portfolio</p>
            </div>
        </div>
    );
};

export default Footer;