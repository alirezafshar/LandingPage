import React from "react";
import Feedback from "./Feedback";
import Contact from "../../assets/images/contact.svg";
import "./ContactUs.scss";

const ContactUs = () => {

    return (
        <>
            <figure className="contact__fig">
                <img className="contact__img" src={Contact} alt="contact us" />
            </figure>
            <article className="contact__contents">
                <h2 className="block__title block__title--dark">
                    <span className="block__caption">CALL US NOW AT</span>
                    +1 888 600 4017
                </h2>
                <p className="block__desc block__desc--dark">We get that your time is valuable, and we want you to have answers to your questions as quickly as possible. Here is another way to get info:</p>
                <Feedback />
            </article>
        </>
    )

}

export default ContactUs;