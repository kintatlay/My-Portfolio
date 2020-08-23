// import React from 'react';
import React, { useState } from 'react';

// function Navigation() {
//     return (
//         <div className="navigation">
//             <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
//             <label htmlFor="navi-toggle" className="navigation__button">
//                 <span className="navigation__icon">&nbsp;</span>
//             </label>
//             <div className="navigation__background">&nbsp;</div>
//             <nav className="navigation__nav">
//                 <ul className="navigation__list">
//                     <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Me</a></li>
//                     <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Skills</a></li>
//                     <li className="navigation__item"><a href="#section-portfolio" className="navigation__link"><span>03</span>Projects</a></li>
//                     <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Education</a></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

function Navigation() {

    const [checkbox, setCheckbox] = useState(false);

    const toggleCheck = () => {
        setCheckbox(!checkbox);
    };

    return (
        
        <div className="navigation">
            
            <input type="checkbox" className="navigation__checkbox" checked={checkbox} onChange={() => toggleCheck()} />
            <label type="checkbox" onClick={() => toggleCheck()} className="navigation__button">
                <div className="navigation__loader"></div>
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#section-about-me" className="navigation__link" onClick={() => toggleCheck()}><span>01</span>About Me</a></li>
                    <li className="navigation__item"><a href="#section-skills" className="navigation__link" onClick={() => toggleCheck()}><span>02</span>Skills</a></li>
                    <li className="navigation__item"><a href="#section-portfolio" className="navigation__link" onClick={() => toggleCheck()}><span>03</span>Projects</a></li>
                    <li className="navigation__item"><a href="#section-education" className="navigation__link" onClick={() => toggleCheck()}><span>04</span>Education</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;