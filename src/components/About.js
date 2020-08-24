import React from 'react';
import javascriptIconPicSmall from '../assets/JavaScript-icon-small.png';
import nodejsIconPicSmall from '../assets/nodejs-icon-small.png';
import reactIconPicSmall from '../assets/react-icon-small.png';
import javascriptIconPic from '../assets/JavaScript-icon.png';
import nodejsIconPic from '../assets/nodejs-icon.png';
import reactIconPic from '../assets/react-icon.png';
import resume from '../assets/KinTatLayResume.pdf';

function About() {
    return (
        <section className="section-about" id="section-about-me">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    My Objective
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small-medium">
                        Software Engineer actively seeking opportunities
                    </h3>
                    <p className="paragraph">
                    I am a Full-Stack Software Engineer who is excited to build meaningful applications that focus on improving efficiencies to tasks or change the way we live our life. I enjoy working with JavaScript, Node.JS, MySQL/MongoDB, React, and Express to build full-stack websites.
                    </p>
                    <p className="paragraph">
                    I am committed to solving challenges with a detailed-oriented mindsets and delivering quality products and services. With my background in accounting, I acquired the quantitative skill to problem solve issues and understand what the market and customers need.
                    </p>

                    <a href={resume} download="Kin Tat Lay Resume" className="btn-text multiple-white-space">Download My Resume (PDF)  <i className="icon-basic-download"></i></a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img srcSet={`${nodejsIconPicSmall} 300w, ${nodejsIconPic} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" src={nodejsIconPic} />
                        <img srcSet={`${reactIconPicSmall} 300w, ${reactIconPic} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" src={reactIconPic} />
                        <img srcSet={`${javascriptIconPicSmall} 300w, ${javascriptIconPic} 1000w`} 
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" 
                            alt="Photo 3" 
                            className="composition__photo composition__photo--p3" 
                            src={javascriptIconPic} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;