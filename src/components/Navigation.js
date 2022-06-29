import React, { useState } from 'react';

function Navigation() {

    const [checkbox, setCheckbox] = useState(false);

    const toggleCheck = () => {
        setCheckbox(!checkbox);
    };

    return (
        
        <div className="navigation">
            
            <label type="checkbox" onClick={() => toggleCheck()} className="navigation__button">
                <div className="navigation__loader"></div>
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <input type="checkbox" className="navigation__checkbox" checked={checkbox} onChange={() => toggleCheck()} />

            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#section-about-me" className="navigation__link" onClick={() => toggleCheck()}>About Me</a></li>
                    <li className="navigation__item"><a href="#section-skills" className="navigation__link" onClick={() => toggleCheck()}>Skills</a></li>
                    <li className="navigation__item"><a href="#section-portfolio" className="navigation__link" onClick={() => toggleCheck()}>Projects</a></li>
                    <li className="navigation__item"><a href="#section-education" className="navigation__link" onClick={() => toggleCheck()}>Education</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;