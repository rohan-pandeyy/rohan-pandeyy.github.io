import './index.scss';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { SquareCard } from '../../components/Card/cardSizes';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin, AiFillYoutube } from "react-icons/ai";
import webpage from '../../assets/icons/webpage.svg';
import brain from '../../assets/icons/brain.svg';
import pen from '../../assets/icons/pen.svg';

const ContactPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="upwards-load">
                <div style={{marginTop: '85px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <div className="contact-page">
                        <div className="info-box">
                            <h1 style={{marginTop: '0'}}>Get in Touch ✨</h1>
                            <p>I'm always open to collaborate on a project or hear about an opportunity!</p>
                            <div className="contact-detail">
                                <h2>WANT TO CALL ME?</h2>
                                <p>+91 99711 87301</p>
                            </div>
                            <div className="contact-detail">
                                <h2>JUST WANT TO EMAIL ME?</h2>
                                <p>rohan1706pandey@gmail.com</p>
                            </div>
                            <div className="socials">
                                <a href="https://www.linkedin.com/in/rohanpandeyy/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                                <a href="https://github.com/rohan-pandeyy/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="https://x.com/rohan_pandeyy/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                                <a href="https://www.youtube.com/@rushwithronnie/" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
                            </div>
                        </div>
                        <form className="contact-form">
                            <h1 className="mobile-only" style={{margin: '0'}}>Or Just Fill 👇</h1>
                            <div className="form-group">
                                <input type="text" id="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" rows="4" placeholder="Message"></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="zoom-load">
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <SquareCard className="custom-square-card" onClick={() => {console.log('Card clicked!');}} disableHover>
                        <img src={webpage} alt="Webpage icon"></img>
                        <h1>Website design & development</h1>
                        <p>Experienced designer developer. I love using tools like Figma and Photoshop for designing. And languages like CSS and React to bring them to life.</p>
                    </SquareCard>
                    <SquareCard className="custom-square-card" onClick={() => {console.log('Card clicked!');}} disableHover>
                    <img src={brain} alt="Webpage icon"></img>
                        <h1>Machine Learning & Artificial Intelligence</h1>
                        <p>Budding data scientist with a passion for machine learning. I enjoy using tools like PyTorch, TensorFlow, Numpy and Pandas for model development.</p>
                    </SquareCard>
                    <SquareCard className="custom-square-card" onClick={() => {console.log('Card clicked!');}} disableHover>
                    <img src={pen} alt="Webpage icon"></img>
                        <h1>Graphic & Video Editing</h1>
                        <p>With a skillful experience in the creative fields of graphic design and video editing. I hold a deep passion for transforming ideas into visually appealing graphics and compelling video content.</p>
                    </SquareCard>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;