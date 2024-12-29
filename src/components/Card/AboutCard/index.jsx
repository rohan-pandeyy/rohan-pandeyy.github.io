import { RectangleCard } from '../cardSizes';
import './index.scss';
import me from '../../../assets/images/me.png';

const AboutPage = () => {
    return (
        <>
            <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}}>
                <img className="profile-image" src={me}></img>
                <h1>Hey, I'm Rohan 👋</h1>
                <p>Some content here.</p>
            </RectangleCard>
        </>
    );
};

export default AboutPage;