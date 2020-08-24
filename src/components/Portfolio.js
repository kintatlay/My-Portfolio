import React from 'react';
import TrSwagCover from '../assets/TrSwag.jpg';
import MyPortfolioCover from '../assets/myportfolio.jpg';
import AbidasCover from '../assets/Abidas.jpg';
import SoundCloneCover from '../assets/SoundClone.jpg';
import RealEstateAnalysisCover from '../assets/RealEstateAnalysis.jpg';

function Portfolio() {
    return (
        <section className="section-portfolio" id="section-portfolio">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    My Projects
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--1" src={TrSwagCover} alt="TrSwag cover image">
                            </img>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    TrSwag
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React Hooks</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__project-data">
                                    <p className="card__project-type">Full Stack project</p>
                                    <p className="card__project-description">A travel directory web app that helps travelers simplify their traveling experience.</p>
                                </div>
                                <a href="#popup-trswag" className="btn btn--white">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--2" src={MyPortfolioCover} alt="My Portfolio cover image">
                            </img>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    My Portfolio
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>SASS | SCSS</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__project-data">
                                    <p className="card__project-type">Frontend project</p>
                                    <p className="card__project-description">My portfolio website that details my tech stack knowledge and project experience.</p>
                                </div>
                                <a href="#popup-myportfolio" className="btn btn--white">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--3" src={AbidasCover} alt="Abidas cover image">
                            </img>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    Abidas
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>AWS EC2</li>
                                    <li>PostgreSQL</li>
                                    <li>Nginx</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__project-data">
                                    <p className="card__project-type">Backend project</p>
                                    <p className="card__project-description">Ecommerce fashion website that provides product information and customers' feedbacks. My focus on this project is system design.</p>
                                </div>
                                <a href="#popup-abidas" className="btn btn--white">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--4" src={SoundCloneCover} alt="SoundClone cover image">
                            </img>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--4">
                                    SoundClone
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>React</li>
                                    <li>Styled-Components</li>
                                    <li>MySQL</li>
                                    <li>NodeJS</li>
                                    <li>Jest/Enzyme</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-4">
                            <div className="card__cta">
                                <div className="card__project-data">
                                    <p className="card__project-type">Frontend project</p>
                                    <p className="card__project-description">Music Streaming Service app that allows users to play music, create playlists, and engage with other listeners.</p>
                                </div>
                                <a href="#popup-soundclone" className="btn btn--white">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--5" src={RealEstateAnalysisCover} alt="Real Estate Analysis cover image">
                            </img>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--5">
                                    Real Estate Analysis
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Tableau</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-5">
                            <div className="card__cta">
                                <div className="card__project-data">
                                    <p className="card__project-type">Data Mining | Frontend project</p>
                                    <p className="card__project-description">Data mining project on California Real Estate Market.</p>
                                </div>
                                <a href="#popup-realEstate" className="btn btn--white">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--6">
                                &nbsp;
                            </div>

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--6">
                                    More...
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-6">
                            <div className="card__cta">
                                <a href="https://github.com/kintatlay" target = "_blank" rel="noopener noreferrer" className="btn btn--white">More Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
                             
            
            </div>
        </section>
    )
}

export default Portfolio;