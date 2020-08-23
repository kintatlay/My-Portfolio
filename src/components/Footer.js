import React from 'react';
import logo2x from '../assets/logo-blue-2x.png';
import logo1x from '../assets/logo-blue-1x.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture className="footer__logo">
                    <source srcSet={`${logo1x} 1x, ${logo2x} 2x`} media="(max-width: 37.5em)"></source>
                    <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Full logo" className="Full logo" src={logo2x}></img>
                </picture>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="https://www.linkedin.com/in/kin-tat-lay/" target = "_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a></li>
                            <li className="footer__item"><a href="https://github.com/kintatlay" target = "_blank" rel="noopener noreferrer" className="footer__link">Github</a></li>
                            <li className="footer__item"><a href="mailto:kin.tat.lay@gmail.com?subject=Inquiry%20about%20your%20portfolio%20website" className="footer__link">Email Me</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Kin Tat Lay</a> for job hunting purpose. Copyright &copy; by Kin Tat Lay. You are 100% allowed to reac out to me for employment purpose, but not to sell my personal data for commercial usage.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;