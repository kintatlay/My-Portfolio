import React from 'react';
import SJSUicon from '../assets/SJSU-school-icon.jpg';
import CCicon from '../assets/ChabotCollege-school-icon.jpg';
import HRicon from '../assets/HackReactor-school-icon.png';

function Education() {
    return (
        <section className="section-educations">
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
                        <img className="education__img" src={CCicon} alt="SJSU icon" />
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
                        <img className="education__img" src={HRicon} alt="SJSU icon" />
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
                        <img className="education__img" src={HRicon} alt="SJSU icon" />
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
        </section>
    )
}

export default Education;