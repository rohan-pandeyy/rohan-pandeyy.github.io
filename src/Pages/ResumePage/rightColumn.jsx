const Experience = ({ title, company, date, children }) => (
    <div className="experience">
        <h3>{title}</h3>
        <div className="company">{company}</div>
        <div className="date">{date}</div>
        <div className="description">{children}</div>
    </div>
);
  
  const RightColumn = () => (
    <div className="right-column">
        <h2>Experience</h2>
        
        <Experience title="Machine Learning Intern at KeenHead Technologies" date="June 2025 – Aug 2025">
        Creation and optimization of custom Convolutional Model for low-energy consuming edge devices<br />
        Achieved 94.84% model compression on LeNet architecture while maintaining minimal accuracy degradation.<br />
        Created custom low-level C based model and optimized it to run on microchips.
        </Experience>

        <Experience title="Data Science Intern" date="Aug 2024 – Sept 2024">
        Converted raw dataset into meaningful insights using Data Cleaning and Wrangling methods.<br />
        Performed Univariate analysis, grouped meaningful data using generalization, specialization and aggregation techniques and visualized the results by plotting graphs.<br />
        Created a Logistic Regression ML model with increased accuracy 38% increasing from 0.5 to 0.79 out of 1.
        </Experience>
  
        <Experience title="Full Stack Intern at The Design Network" date="May 2023 – Aug 2023">
        Constructed the initial website, significantly enhancing the business’s digital presence and expanding its reach to thousands online.<br />
        Developed a functional online form built into the website that enables customers to easily contact the business and request services by entering their information.
        </Experience>

        <h2>Position Of Responsibility</h2>

        <Experience title="Head of Research Department - Data Science Society" date="Aug 2024 – Present">
        Overseeing a team of Data Science Enthusiasts, curating huge datasets and hosting Workshops about data science and How to Write your first research paper.<br />
        Hosting hackathons and events, along with talk shows and info sessions.
        </Experience>

        <h2>Education</h2>

        <Experience title="Bennett University" date="Jan 2023 – Jan 2027">
        As a student of CSE B.Tech at BU, Greater Noida, I am gaining a comprehensive understanding of computers and their practical applications in the real world, paving the way for a promising career.
        </Experience>
        
        <h2>Skills</h2>

        <div className="skills-interests-container">
            <div className="description">
                Python
            </div>
            <div className="description">
                C++
            </div>
            <div className="description">
                ReactJS
            </div>
            <div className="description">
                NextJS
            </div>
            <div className="description">
                Pandas
            </div>
            <div className="description">
                Numpy
            </div>
            <div className="description">
                AWS
            </div>
            <div className="description">
                Figma
            </div>
        </div>

        <h2>Interests</h2>

        <div className="skills-interests-container">
            <div className="description">
                Piano
            </div>
            <div className="description">
                Gaming
            </div>
            <div className="description">
                Guitar
            </div>
            <div className="description">
                Duolingo
            </div>
            <div className="description">
                Driving
            </div>
            <div className="description">
                Illustration
            </div>
            <div className="description">
                Traveling
            </div>
            <div className="description">
                Sqaush
            </div>
        </div>
    </div>
);

export default RightColumn;