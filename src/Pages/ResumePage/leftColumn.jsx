import React, { useState } from 'react';
import { SquareCard } from '../../components/Card/cardSizes';
import me from '../../assets/images/me.png';
import Arrow from '../../components/Arrow';

const LeftColumn = () => {
    
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
    <div className="left-column">
        <SquareCard style={{ width: '100%', height: '100%', padding: '32px' }} disableHover>
            <img className="profile-image" src={me} alt="Me"></img>
            <h1>Rohan Pandey</h1>
            <h2>Full Stack & Data Science</h2>
        
            <div className="contact-info">
                <p style={{ fontWeight: 'bold' }}>rohan1706pandey@gmail.com</p>
                <p>www.bennett.edu.in</p>
            </div>

            <a href="https://drive.google.com/file/d/1vHpkA1R2ofYpeQPmIJmGtmXh4XVg5hXo/view?usp=sharing"><button>Download Resume</button></a>
        </SquareCard>
  
        <SquareCard style={{ width: '100%', height: '100%', padding: '32px' }} disableHover>
            <div className="links">
                <a href="https://www.linkedin.com/in/rohan-pandey-a9a50b270" target="_blank" className="social-link" onMouseEnter={() => setHoveredLink('linkedin')} onMouseLeave={() => setHoveredLink(null)}>
                    <span>LinkedIn</span>
                    <Arrow rotation={45} size={40} fillColor="none" strokeColor="#d9d5c9" arrowColor="#d9d5c9" hoverFillColor="#ffc552" hoverStrokeColor="#ffc552" hoverArrowColor="#000" isHovered={hoveredLink === 'linkedin'} />
                </a>
                <hr />
                <a href="https://www.github.com/rohan-pandeyy" target="_blank" className="social-link" onMouseEnter={() => setHoveredLink('github')} onMouseLeave={() => setHoveredLink(null)}>
                    <span>Github</span>
                    <Arrow rotation={45} size={40} fillColor="none" strokeColor="#d9d5c9" arrowColor="#d9d5c9" hoverFillColor="#ffc552" hoverStrokeColor="#ffc552" hoverArrowColor="#000" isHovered={hoveredLink === 'github'} />
                </a>
                <hr />
                <a href="https://x.com/rohan_pandeyy" target="_blank" className="social-link" onMouseEnter={() => setHoveredLink('twitter')} onMouseLeave={() => setHoveredLink(null)}>
                    <span>Twitter</span>
                    <Arrow rotation={45} size={40} fillColor="none" strokeColor="#d9d5c9" arrowColor="#d9d5c9" hoverFillColor="#ffc552" hoverStrokeColor="#ffc552" hoverArrowColor="#000" isHovered={hoveredLink === 'twitter'} />
                </a>
            </div>
        </SquareCard>
    </div>
    )
};

export default LeftColumn;
