import React from "react";
import Facebook from "../../assets/images/facebook.svg"
import Insta from "../../assets/images/insta.svg"
import Twitter from "../../assets/images/twitter.svg"
import Linkedin from "../../assets/images/linkedin.svg"
import "./Footer.scss";

const Footer = () => {

    const terms = "Terms & Conditions"

    return (
        <>
            <article className="footer__sec">
                <ul className="social">
                    <li className="social__item">
                        <a className="social__list" href="https://www.facebook.com/hauskeyapp" target="_blank" rel="noreferrer">
                            <img className="social__img" src={Facebook} alt="facebook" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__list" href="https://www.instagram.com/hauskeyapp/" target="_blank" rel="noreferrer">
                            <img className="social__img" src={Insta} alt="instagram" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__list" href="https://twitter.com/hauskeyapp" target="_blank" rel="noreferrer">
                            <img className="social__img" src={Twitter} alt="twitter" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__list" href="https://www.linkedin.com/company/hauskey/" target="_blank" rel="noreferrer">
                            <img className="social__img" src={Linkedin} alt="linkedin" />
                        </a>
                    </li>
                </ul>
            </article>
            <article className="footer__sec footer__sec--center">
                <p className="footer__desc">©2021 Sample Landing Page For Haüskey Realty, Brokerage</p>
            </article>
            <article className="footer__sec">
                <a href="https://www.hauskey.com/settings/settings/terms" className="footer__link" target="_blank" rel="noreferrer">{terms}</a>
            </article>
        </>
    )
}

export default Footer;