import React, { useState } from 'react';
import trswag1 from '../assets/TrSwag1.jpg';
import trswag2 from '../assets/TrSwag2.jpg';
import myportfolio1 from '../assets/myportfolio1.jpg';
import myportfolio2 from '../assets/myportfolio2.jpg';
import abidas1 from '../assets/Abidas1.jpg';
import abidas2 from '../assets/Abidas2.jpg';
import soundclone1 from '../assets/SoundClone1.jpg';
import soundclone2 from '../assets/SoundClone2.jpg';
import realestateanalysis1 from '../assets/RealEstateAnalysis1.jpg';
import realestateanalysis2 from '../assets/RealEstateAnalysis2.jpg';


function Modal() {

    const [ senderName, setSenderName ] = useState('');
    const [ senderNumber, setSenderNumber ] = useState('');
    const [ textmessage, setTextmessage ] = useState('');

    const sendText = _ => {
        fetch(`http://localhost:4000/send-text?senderName=${senderName}&senderNumber=${senderNumber}&textmessage=${textmessage}`)
        .catch(err => console.log(err));
        alert("Your text message is sent.");
    }

    return (
        <div>
            <div className="popup" id="popup-trswag">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={trswag1} alt="Cover page of TrSwag website" className="popup__img" />
                        <img src={trswag2} alt="Dating page of TrSwag website" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-portfolio" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">TrSwag</h2>
                        <h3 className="popup__initial heading-tertiary u-margin-bottom-small-medium">A travel directory web app that helps travelers simplify their traveling experience.</h3>
                        <div className="u-margin-bottom-small-medium popup__text">
                            <p className="text-font-style">
                                Responsibilities / Accomplishments:
                            </p>
                            <ul className="popup__text__list">
                                <li>The website is currently work in progress. Please check back later.</li>
                            </ul>
                        </div>
                        <a href="#popup-trswag" className="btn btn--blue">Work in progress</a>
                    </div>
                </div>
            </div>

            <div className="popup" id="popup-myportfolio">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={myportfolio1} alt="Cover page of My Portfolio website" className="popup__img" />
                        <img src={myportfolio2} alt="Skill section of My Portfolio website" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-portfolio" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">My Portfolio</h2>
                        <h3 className="popup__initial heading-tertiary u-margin-bottom-small-medium">My portfolio website that details my tech stack knowledge and project experience.</h3>
                        <div className="u-margin-bottom-small-medium popup__text">
                            <p className="text-font-style">
                                Responsibilities / Accomplishments:
                            </p>
                            <ul className="popup__text__list">
                                <li>Created a portfolio website using SCSS with maintainable and reusable codes.</li>
                                <li>Deployed application on Firebase with custom domain name.</li>
                            </ul>
                        </div>
                        <div>
                            <a href="https://www.kintatlay.com" className="btn btn--blue u-margin-right-medium">Demo</a>
                            <a href="https://github.com/kintatlay/My-Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn--blue">Source Code</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="popup" id="popup-abidas">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={abidas1} alt="loader.io latency test of Abidas website" className="popup__img" />
                        <img src={abidas2} alt="New Relic latency test of Abidas website" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-portfolio" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">Abidas</h2>
                        <h3 className="popup__initial heading-tertiary u-margin-bottom-small-medium">Ecommerce fashion website that provides product information and customers' feedbacks. My focus on this project is system design.</h3>
                        <div className="u-margin-bottom-small-medium popup__text">
                            <p className="text-font-style">
                                Responsibilities / Accomplishments:
                            </p>
                            <ul className="popup__text__list">
                                <li>Seeded 10M product data and 25M+ product review data into MongoDB and PostgreSQL database systems.</li>
                                <li>Optimized MongoDB and PostgreSQL Restful API latency performances by database indexation, Redis caching, and Webpack compression to achieve &lt;5ms per query and selected database choice based on consideration of execution time and CAP theorem.</li>
                                <li>Improved backend scalability architecture through serving 3 EC2 component instances, creating NGINX load balancer to direct traffic, stress testing wtih loader.io, and identifying system bottlenecks through New Relic and AWS Cloudwatch.</li>
                            </ul>
                        </div>
                        <div>
                            <a href="https://github.com/kintatlay/Adidas_Clone-System_Design_Scaling_Project" target="_blank" rel="noopener noreferrer" className="btn btn--blue">Source Code</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="popup" id="popup-soundclone">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={soundclone1} alt="Picture of Soundclone website" className="popup__img" />
                        <img src={soundclone2} alt="Picture of Soundclone website" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-portfolio" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">SoundClone</h2>
                        <h3 className="popup__initial heading-tertiary u-margin-bottom-small-medium">Music Streaming Service app that allows users to play music, create playlists, and engage with other listeners.</h3>
                        <div className="u-margin-bottom-small-medium popup__text">
                            <p className="text-font-style">
                                Responsibilities / Accomplishments:
                            </p>
                            <ul className="popup__text__list">
                                <li>Designed the UI frameworks of the comments, likes, and modal features using React and Styled-Component to enhance users’ experience with a fast and scalable application that contained reusable code.</li>
                                <li>Built back-end server and RESTful API using Node.js, Express, and MySQL.</li>
                                <li>Optimized page speed score from 31 to 90 through Webpack production configuration to reduce bundle size.</li>
                            </ul>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=u2_wic1C-Io&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="btn btn--blue u-margin-right-medium">Demo</a>
                            <a href="https://github.com/SoundClone" target="_blank" rel="noopener noreferrer" className="btn btn--blue">Source Code</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="popup" id="popup-realEstate">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={realestateanalysis1} alt="Cover page of Real Estate Analysis website" className="popup__img" />
                        <img src={realestateanalysis2} alt="Tableau data of Real Estate Analysis website" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-portfolio" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">Real Estate Analysis</h2>
                        <h3 className="popup__initial heading-tertiary u-margin-bottom-small-medium">Data mining project on California Real Estate Market</h3>
                        <div className="u-margin-bottom-small-medium popup__text">
                            <p className="text-font-style">
                                Responsibilities / Accomplishments:
                            </p>
                            <ul className="popup__text__list">
                                <li>Built a web scraper to collect real estate sales data from Zillow and rental data from Apartments.com for analysis purposes.</li>
                                <li>Utilized Tableau with the collected quantitative data to create data dashboards that shows a list of best California cities for rent-to-price ratio to drive strategic decision making.</li>
                                <li>Presented Tableau and collected data via HTML and CSS.</li>
                            </ul>
                        </div>
                        <div>
                            <a href="https://kintatlay.github.io/Real_Estate_Investment-Final-Project-/index.html" target="_blank" rel="noopener noreferrer" className="btn btn--blue u-margin-right-medium">Demo</a>
                            <a href="https://github.com/kintatlay/Real_Estate_Investment-Final-Project-" target="_blank" rel="noopener noreferrer" className="btn btn--blue">Source Code</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="popup" id="popup-twilio-sms">
                <div className="popup__content">
                    <div className="popup__center">
                        <a href="#section-footer" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small-medium">Send Me a Text</h2>
                        <p className="popup__message u-margin-bottom-small-medium">If you have an urgent request for me, you may text me at +1(559)313-4060 or fill out the following forms and submit the question to me. I will respond ASAP.</p>
                        <label className="popup__message">Your First Name</label>
                        <br />
                        <input className="popup__message__placeholder" placeholder="Ex: Kin" value={senderName}
                            onChange={e => setSenderName(e.target.value)} />
                        <div className="popup__message__spacer"/>
                        <label className="popup__message">Your Phone Number</label>
                        <br />
                        <input className="popup__message__placeholder" placeholder="Ex: +1(123)456-7890" value={senderNumber}
                            onChange={e => setSenderNumber(e.target.value)} />
                        <div className="popup__message__spacer"/>
                        <label className="popup__message">Message</label>
                        <br />
                        <textarea rows={8} className="popup__message__placeholder" placeholder="Type your message here..." value={textmessage}
                            onChange={e => setTextmessage(e.target.value)} />
                        <div className="popup__message__spacer"/>
                        <button className="btn--blue u-margin-right-medium" onClick={sendText}>Send Text</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;