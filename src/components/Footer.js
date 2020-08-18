import React from 'react';
import logo from '../assets/logo-blue.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Full logo" className="footer__logo"></img>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">LinkedIn</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Github</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Email Me</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Kin Tat Lay</a> for job hunting purpose. Copyright &copy; by Kin Tat Lay. You are 100% allowed to react out to me for employment purpose, but not to sell my personal data for commercial usage.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;