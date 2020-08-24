import React from 'react';
import logo from '../assets/logo-white.png';
import Grid from './Grid';
import Navigation from './Navigation';
import Main from './Main';
import GoldenGateMp4 from '../assets/golden-gate.mp4';
import GoldenGateWebm from '../assets/golden-gate.webm';
// import HongKongMP4 from '../assets/hongkong.mp4';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  return (
    <div>
      <Navigation />
      <header className="header">
          <video className="bg-video__content" autoPlay muted loop>
            {/* <source src={HongKongMP4} type="video/mp4"></source> */}
            <source src={GoldenGateMp4} type="video/mp4"></source>
            <source src={GoldenGateWebm} type="video/mp4"></source>
              Your browser is not supported!
          </video>
          <div className="header__overlay">
        </div>
        <div className="header__logo-box">
          <img src={logo} alt="Kin Signature Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Kin Tat Lay</span>
            <span className="heading-primary--sub">Software Engineer</span>
          </h1>

          <a href="#section-portfolio" className="btn btn--white btn--animated">See Projects</a>
        </div>

      </header>

      <Main />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;