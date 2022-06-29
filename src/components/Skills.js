import React from 'react';

function Skills() {
    return (
        <section className="section-features" id="section-skills">  
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-webpage-img-txt"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Frontend</h3>
                        <ul className="feature-box__text">
                            <li>HTML</li>
                            <li>CSS | SASS</li>
                            <li>Styled-Components</li>
                            <li>JavaScript</li>
                            <li>React | Redux | Hooks</li>
                            <li>React Native</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-share"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
                        <ul className="feature-box__text">
                            <li>NodeJS</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-server2"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                        <ul className="feature-box__text">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-cloud"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
                        <ul className="feature-box__text">
                            <li>AWS EC2</li>
                            <li>Firebase</li>
                            <li>Docker</li>
                            <li>Nginx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;