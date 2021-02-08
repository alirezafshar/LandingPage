import React from "react";
import AppView from "../../assets/images/appView.png";
import Apple from "../../assets/images/apple.svg";
import GooglePlay from "../../assets/images/googlePlay.svg";
import "./Application.scss";


const Application = () => {

    return (
        <>
            <article className="app__contents">
                <h2 className="block__title block__title--light">
                    <span className="block__caption">DOWNLOAD OUR APP</span>
                    Managing your benefits and investments
                </h2>
                <p className="block__desc block__desc--light">Download the Haüskey mobile app for free and unlock the door to your next home or investment. We make it secure and as easy and convenient as possible.</p>
                <a className="btn" href="https://apps.apple.com/ca/app/hauskey/id1477303720">
                    <img className="btn__icon" src={Apple} alt="app store icon" />
                    App Store
                </a>
                <a className="btn" href="https://play.google.com/store/apps/details?id=com.hauskey">
                    <img className="btn__icon" src={GooglePlay} alt="google play icon" />
                    Google Play
                </a>
            </article>
            <figure className="app__fig">
                <img className="app__img" src={AppView} alt="application views" />
            </figure>
        </>
    )

}

export default Application;