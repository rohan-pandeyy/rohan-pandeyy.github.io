import './index.scss';
import emailjs from '@emailjs/browser';
import React, { useEffect, useState, useRef } from 'react';
import { SquareCard } from '../../components/Card/cardSizes';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin, AiFillYoutube } from "react-icons/ai";
import webpage from '../../assets/icons/webpage.svg';
import brain from '../../assets/icons/brain.svg';
import pen from '../../assets/icons/pen.svg';

const ContactPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus({ type: '', message: '' });

      const name = document.getElementById("user_name")?.value;
      const email = document.getElementById("user_email")?.value;
      const message = document.getElementById("message")?.value;

      if (!name || !email || !message) {
        setStatus({ type: 'error', message: 'Please fill in all fields.' });
        setLoading(false);
        return;
      }

      // Regex for strict email validation: 
      // 1. Text/numbers before @
      // 2. Domain name
      // 3. Extension (at least 2 characters)
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        setStatus({ type: 'error', message: 'Please enter a valid email address (e.g., user@domain.com).' });
        setLoading(false);
        return;
      }

      const templateParams = {
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString(),
      };
      
      emailjs.send(
        'service_ew2ukfy', 
        'template_anom1lx', 
        templateParams,
        'joPSbbxKhvlC9uUNt'
      )
      .then((result) => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          e.target.reset();
      }, (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
          console.log(error.text);
      });
    };

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
                        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                            <h1 className="mobile-only" style={{ margin: "0" }}>Or Just Fill 👇</h1>
                            <div className="form-group">
                                <input type="text" id="user_name" name="user_name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="user_email" name="user_email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" disabled={loading}>
                            {loading ? <span className="spinner"></span> : "Send Message"}
                            </button>
                            {status.message && (
                                <div className={`status-message ${status.type}`}>
                                    {status.message}
                                </div>
                            )}
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
        </>
    );
};

export default ContactPage;