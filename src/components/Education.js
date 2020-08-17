import React from 'react';
import SJSUicon from '../assets/SJSU-school-icon.jpg';
import CCicon from '../assets/ChabotCollege-school-icon.jpg';
import HRicon from '../assets/HackReactor-school-icon.png';
import UCBEicon from '../assets/UCBExtension-school-icon.jpg';
import CSUFicon from '../assets/CSUF-school-icon.jpg';
import UCBicon from '../assets/UCB-school-icon.jpg';
import GoldenGateVideo from '../assets/golden-gate.mp4';

function Education() {
    return (
        <section className="section-educations">
            <div className="bg-video">
                <video src="" className="bg-video__content" autoPlay muted loop>
                    <source src={GoldenGateVideo} type="video/mp4"></source>
                    Your browser is not supported!
                </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Education
                </h2>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={SJSUicon} alt="SJSU icon" />
                        <figcaption className="education__caption">San Jose, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            San Jose State University
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">M. S. in Data Analytics    |    08/2020 - Present</h4>
                        <p>
                            Relevant Coursework:
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={CCicon} alt="Chabot College icon" />
                        <figcaption className="education__caption">Hayward, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            Chabot College
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">A. S. in Computer Science    |    GPA: 4.00    |    01/2017 - Present</h4>
                        <p>
                            Relevant Coursework: Introduction to Data Structures, Object-Oriented Programming Methods in Java, Introduction to Structured Programming in C++, Introduction to UNIX
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={HRicon} alt="Hack Reactor icon" />
                        <figcaption className="education__caption">San Francisco, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            Hack Reactor
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">Software Engineering Coding Bootcamp    |    03/2020</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={UCBEicon} alt="UC Berkeley Extension icon" />
                        <figcaption className="education__caption">San Francisco, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            UC Berkeley Extension
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">Data Analytics Bootcamp    |    08/2018</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={CSUFicon} alt="CSUF icon" />
                        <figcaption className="education__caption">Fullerton, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            California State University, Fullerton
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">M. S. in Accountancy    |    GPA: 3.91    |    05/2016</h4>
                        <p>
                            Relevant Coursework: Decision Models for Business And Economics 
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={UCBicon} alt="CSUF icon" />
                        <figcaption className="education__caption">Berkeley, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            University of California, Berkeley
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">B. A. in Environmental Economics & Policy    |    GPA: 3.42    |    05/2011</h4>
                        <p>
                            Relevant Coursework: Statistical Analysis of Continuous Outcome Data, SAS Programming, Multivariable Calculus, Linear Algebra
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;