import React from 'react';
import logo from '../assets/logo-white.png';
import Grid from './Grid';
import Navigation from './Navigation';
import Main from './Main';
import GoldenGateMp4 from '../assets/golden-gate.mp4';
import GoldenGateWebm from '../assets/golden-gate.webm';
import Footer from './Footer';

function App() {
  return (
    <div>

      <header className="header">
          <video className="bg-video__content" autoPlay muted loop>
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

          <a href="#" className="btn btn--white btn--animated">See Projects</a>
        </div>

      </header>

      <Main />
      <Footer />

    </div>
  );
}

export default App;