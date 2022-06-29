import React from 'react';
import ASUIcon from '../assets/ASU-school-icon.jpg';
import CCicon from '../assets/ChabotCollege-school-icon.jpg';
import HRicon from '../assets/HackReactor-school-icon.png';
import UCBEicon from '../assets/UCBExtension-school-icon.jpg';
import CSUFicon from '../assets/CSUF-school-icon.jpg';
import UCBicon from '../assets/UCB-school-icon.jpg';
import graduation from '../assets/graduation.jpg';

function Education() {
    return (
        <section className="section-educations" id="section-education">
            <div className="bg-video">
                <img src={graduation} className="bg-video__content"></img>
            </div>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Education
                </h2>
            </div>

            <div className="row row-2">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={ASUIcon} alt="Arizona State University icon" />
                        <figcaption className="education__caption">Tempe, AZ</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            Arizona State University
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">M. S. in Computer Science    |    GPA: 4.00    |    01/2021 - Present (Expected 12/2023)</h4>
                        <p>
                            <span className="text-font-style">Relevant Coursework: </span>Data Mining, Data Visualization, Advanced Software Analysis & Design, Blockchain, Knowledge Representation
                        </p>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={CCicon} alt="Chabot College icon" />
                        <figcaption className="education__caption">Hayward, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            Chabot College
                        </h3>
                        <h4 className="education__white-spacing u-margin-bottom-small">Computer Science    |    GPA: 4.00    |    01/2017 - 08/2020</h4>
                        <p>
                            <span className="text-font-style">Relevant Coursework: </span>Introduction to Data Structures, Object-Oriented Programming Methods in Java, Introduction to Structured Programming in C++, Introduction to UNIX
                        </p>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="education">
                    <figure className="education__shape">
                        <img className="education__img" src={HRicon} alt="Hack Reactor icon" />
                        <figcaption className="education__caption">San Francisco, CA</figcaption>
                    </figure>
                    <div className="education__text">
                        <h3 className="heading-quaternary u-margin-bottom-small">
                            Hack Reactor
                        </h3>
                        {/* <h4 className="education__white-spacing u-margin-bottom-small">Software Engineering Coding Bootcamp    |    03/2020</h4> */}
                        <h4 className="education__white-spacing u-margin-bottom-small">Software Engineering Coding Bootcamp    |    04/2017</h4>
                    </div>
                </div>
            </div>

            {/* <div className="row row-2">
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
            </div> */}

            {/* <div className="row row-2">
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
                            <span className="text-font-style">Relevant Coursework: </span>Decision Models for Business And Economics 
                        </p>
                    </div>
                </div>
            </div> */}

            <div className="row row-2">
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
                            <span className="text-font-style">Relevant Coursework: </span>Statistical Analysis of Continuous Outcome Data, SAS Programming, Multivariable Calculus, Linear Algebra
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;