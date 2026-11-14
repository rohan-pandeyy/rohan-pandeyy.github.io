import { RectangleCard } from '../cardSizes';
import { useNavigate } from 'react-router-dom';
import './index.scss'

const ContactCard = () => {
    const isMobile = window.innerWidth <= 872;

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/contact');
    };

    return (
        <RectangleCard className="contact-card" style={{ padding: '20px' }}  onClick={handleCardClick} mobileBackground="#050127">
            <p style={{fontSize: isMobile ? '25px' : '1.5vw', marginBottom: '10px'}}>Let's work together ✨</p>
            <h2 style={{fontSize: isMobile ? '35px' : '2.5vw',margin: '0'}}>Get in touch now</h2>
        </RectangleCard>
    );
};

export default ContactCard;