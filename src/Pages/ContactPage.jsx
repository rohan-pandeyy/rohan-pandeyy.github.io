import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SquareCard } from '../components/Card/cardSizes';
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin, AiFillYoutube } from "react-icons/ai";
import webpage from '../assets/icons/webpage.svg';
import brain from '../assets/icons/brain.svg';
import pen from '../assets/icons/pen.svg';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const form = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

      // Regex for strict email validation
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

    return (
        <>
            <div className="upwards-load">
                <div className="mt-[85px] flex flex-col items-center gap-5 min-[873px]:flex-row min-[873px]:items-start">
                    <div className="flex flex-col items-center w-full min-[873px]:flex-row min-[873px]:justify-between min-[873px]:items-start min-[873px]:gap-[5vw] max-[1080px]:gap-0">
                        <div className="flex-1 text-left">
                            <h1 className="mb-8">Get in Touch ✨</h1>
                            <p className="my-[10px] text-[26px]">I'm always open to collaborate on a project or hear about an opportunity!</p>
                            <div className="mt-14">
                                <h2 className="text-[#d9d5c9] font-medium text-[14px] m-0">WANT TO CALL ME?</h2>
                                <p className="text-[22px] m-0">+91 99711 87301</p>
                            </div>
                            <div className="mt-14">
                                <h2 className="text-[#d9d5c9] font-medium text-[14px] m-0">JUST WANT TO EMAIL ME?</h2>
                                <p className="text-[22px] m-0">rohan1706pandey@gmail.com</p>
                            </div>
                            <div className="flex gap-[30px] my-16">
                                <a className="text-[#bcbab3] text-[2.5rem] hover:text-primary" href="https://www.linkedin.com/in/rohanpandeyy/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                                <a className="text-[#bcbab3] text-[2.5rem] hover:text-primary" href="https://github.com/rohan-pandeyy/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a className="text-[#bcbab3] text-[2.5rem] hover:text-primary" href="https://x.com/rohan_pandeyy/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                                <a className="text-[#bcbab3] text-[2.5rem] hover:text-primary" href="https://www.youtube.com/@rushwithronnie/" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
                            </div>
                        </div>
                        <form className="flex-1 flex flex-col gap-10 p-8 w-screen" ref={form} onSubmit={handleSubmit}>
                            <h1 className="hidden max-[872px]:block m-0">Or Just Fill 👇</h1>
                            <div className="flex flex-col gap-[10px]">
                                <input className="p-6 bg-[#494c50] border-none rounded-[8px] font-normal text-2xl text-white outline-none placeholder-[#d9d5c9]" type="text" id="user_name" name="user_name" placeholder="Name" />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <input className="p-6 bg-[#494c50] border-none rounded-[8px] font-normal text-2xl text-white outline-none placeholder-[#d9d5c9]" type="email" id="user_email" name="user_email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <textarea className="p-6 bg-[#494c50] border-none rounded-[8px] font-normal text-2xl text-white outline-none placeholder-[#d9d5c9] resize-none" id="message" name="message" rows="4" placeholder="Message"></textarea>
                            </div>
                            <button className="p-6 text-2xl font-semibold text-white bg-primary border-none rounded-[8px] cursor-pointer transition-colors duration-300 hover:bg-[#c29740] relative inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed" type="submit" disabled={loading}>
                            {loading ? <span className="w-[18px] h-[18px] border-2 border-white border-t-transparent rounded-full animate-spin"></span> : "Send Message"}
                            </button>
                            {status.message && (
                                <div className={`mt-[10px] p-3 rounded-lg text-center text-[14px] font-medium animate-[fadeIn_0.3s_forwards] ${status.type === 'success' ? 'bg-[rgba(76,175,80,0.15)] text-[#66bb6a] border border-[rgba(76,175,80,0.3)]' : 'bg-[rgba(244,67,54,0.15)] text-[#ef5350] border border-[rgba(244,67,54,0.3)]'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="zoom-load">
                <div className="mt-5 flex flex-col items-center gap-6 min-[873px]:flex-row min-[873px]:items-start">
                    <SquareCard className="flex flex-col justify-between p-10 flex-1 h-[380px] bg-[#333639] rounded-[10px] text-[#d9d5c9] max-[872px]:w-full" onClick={() => {console.log('Card clicked!');}} disableHover>
                        <img className="w-[66px] h-auto" src={webpage} alt="Webpage icon"></img>
                        <h1 className="text-[#d9d5c9] text-[30px] max-[1350px]:text-[20px] max-[872px]:text-[30px]">Website design & development</h1>
                        <p className="text-[#d3d3c9] text-[15px] max-[1100px]:text-[13px] max-[872px]:text-[17px]">Experienced designer developer. I love using tools like Figma and Photoshop for designing. And languages like CSS and React to bring them to life.</p>
                    </SquareCard>
                    <SquareCard className="flex flex-col justify-between p-10 flex-1 h-[380px] bg-[#333639] rounded-[10px] text-[#d9d5c9] max-[872px]:w-full" onClick={() => {console.log('Card clicked!');}} disableHover>
                    <img className="w-[66px] h-auto" src={brain} alt="Webpage icon"></img>
                        <h1 className="text-[#d9d5c9] text-[30px] max-[1350px]:text-[20px] max-[872px]:text-[30px]">Machine Learning & Artificial Intelligence</h1>
                        <p className="text-[#d3d3c9] text-[15px] max-[1100px]:text-[13px] max-[872px]:text-[17px]">Budding data scientist with a passion for machine learning. I enjoy using tools like PyTorch, TensorFlow, Numpy and Pandas for model development.</p>
                    </SquareCard>
                    <SquareCard className="flex flex-col justify-between p-10 flex-1 h-[380px] bg-[#333639] rounded-[10px] text-[#d9d5c9] max-[872px]:w-full" onClick={() => {console.log('Card clicked!');}} disableHover>
                    <img className="w-[66px] h-auto" src={pen} alt="Webpage icon"></img>
                        <h1 className="text-[#d9d5c9] text-[30px] max-[1350px]:text-[20px] max-[872px]:text-[30px]">Graphic & Video Editing</h1>
                        <p className="text-[#d3d3c9] text-[15px] max-[1100px]:text-[13px] max-[872px]:text-[17px]">With a skillful experience in the creative fields of graphic design and video editing. I hold a deep passion for transforming ideas into visually appealing graphics and compelling video content.</p>
                    </SquareCard>
                </div>
            </div>
        </>
    );
};

export default ContactPage;