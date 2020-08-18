import React from 'react';

function Navigation() {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button">MENU</label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"></a>About Me</li>
                    <li className="navigation__item"><a href="#" className="navigation__link"></a>Skills</li>
                    <li className="navigation__item"><a href="#" className="navigation__link"></a>My Projects</li>
                    <li className="navigation__item"><a href="#" className="navigation__link"></a>Education</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;