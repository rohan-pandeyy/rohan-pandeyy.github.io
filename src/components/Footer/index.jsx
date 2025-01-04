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
                    <Link to="/works">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="socials">
                <Link to="/"><AiOutlineLinkedin /></Link>
                <Link to="/"><FaGithub /></Link>
                <Link to="/"><FaXTwitter /></Link>
                <Link to="/"><AiFillYoutube /></Link>
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