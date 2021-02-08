import React from "react";
import Hero from "../../assets/images/hero.svg";
import "./AboutUs.scss";

const AboutUs = () => {

    return (
        <>
            <article className="about__contents">
                <h2 className="block__title block__title--light">
                    <span className="block__caption">SEARCH . SECURE . EARN CASHBACK</span>
                    Pre-Construction And Assignment Condo Marketplace
                </h2>
                <p className="block__desc block__desc--light">Haüskey is your one-stop digital marketplace where buyers can earn cash back on pre-construction properties in the Toronto Market.</p>
                <a className="btn" href="https://www.hauskey.com/" target="_blank" rel="noreferrer">OUR WEBSITE</a>
            </article>
            <figure className="about__fig">
                <img className="about__img" src={Hero} alt="building" />
            </figure>
        </>
    )

}

export default AboutUs;