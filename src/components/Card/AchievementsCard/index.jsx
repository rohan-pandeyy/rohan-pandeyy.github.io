import { RectangleCard } from '../cardSizes';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import trophy from '../../../assets/images/trophy.png';

const AchievementsCard = () => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/acheivements');
    };
    const isMobile = window.innerWidth <= 872;
    return (
        <>
            <RectangleCard className="achievements-card" style={{ padding: '20px' }}  onClick={handleCardClick} mobileBackground="#39cef7">
                <p style={{fontSize: isMobile ? '25px' : '1.5vw', fontWeight: 'bold', marginBottom: '0'}}>Achievements</p>
                <img className="trophy" src={trophy} alt="trophy"></img>
            </RectangleCard>
        </>
    );
};

export default AchievementsCard;