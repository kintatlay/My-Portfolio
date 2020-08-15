import React from 'react';
import logo from '../assets/logo-black.png';
import Grid from './Grid';
import Main from './Main';

function App() {
  return (
    <div>
      <header className="header">
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

    </div>
  );
}

export default App;