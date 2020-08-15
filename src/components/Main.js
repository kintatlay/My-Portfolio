import React from 'react';
import javascriptIconPic from '../assets/JavaScript-icon.png';
import nodejsIconPic from '../assets/nodejs-icon.png';
import reactIconPic from '../assets/react-icon.png';

function Main() {
    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with nature
                        </h3>
                        <p className="paragraph">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Like adventures like you never have before
                        </h3>
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nodejsIconPic} alt="Photo 1" className="composition__photo composition__photo--p1" />
                            <img src={reactIconPic} alt="Photo 2" className="composition__photo composition__photo--p2" />
                            <img src={javascriptIconPic} alt="Photo 3" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;