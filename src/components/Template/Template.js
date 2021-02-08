import React, { Component } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Features from "../Features/Features";
import Application from "../Application/Application"
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Logo from "../../hauskey.svg";
import "./Template.scss";

class Home extends Component {

    state = {
        active: "about"
    }

    refAbout = React.createRef();
    refFeature = React.createRef();
    refApp = React.createRef();
    refContact = React.createRef();


    handleScroll = (e) => {
        let clientHeight = e.target.documentElement.clientHeight;
        let scrollTop = e.target.documentElement.scrollTop;
        let scrollSection = (scrollTop / clientHeight).toFixed();
        const section = ["about", "feature", "app", "contact"];

        if (this.state.active !== section[scrollSection]) {
            this.setState({
                active: section[scrollSection]
            })
        }
    }

    handlerNav = (refBlockName) => {
        window.scroll({
            top: refBlockName.current.offsetTop,
            behavior: "smooth"
        })
        this.setState({
            active: refBlockName.current.id
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { active } = this.state;
        return (
            <>
                <header className="header">
                    <figure className="logo">
                        <img className="logo__img" src={Logo} alt="hauskey" />
                    </figure>
                    <nav className="nav">
                        <ul className="navbar">
                            <li className="navbar__item"><Link to="/#aboutus" className={`navbar__list ${(active === "about") ? "navbar__list--active" : ""}`} onClick={() => this.handlerNav(this.refAbout)}>What We Do</Link></li>
                            <li className="navbar__item"><Link to="/#features" className={`navbar__list ${(active === "feature") ? "navbar__list--active" : ""}`} onClick={() => this.handlerNav(this.refFeature)}>Our Features</Link></li>
                            <li className="navbar__item"><Link to="/#application" className={`navbar__list ${(active === "app") ? "navbar__list--active" : ""}`} onClick={() => this.handlerNav(this.refApp)}>Application</Link></li>
                            <li className="navbar__item"><Link to="/#contactus" className={`navbar__list ${(active === "contact") ? "navbar__list--active" : ""}`} onClick={() => this.handlerNav(this.refContact)}>Contact Us</Link></li>
                        </ul>
                    </nav>
                </header>
                <main className="main">
                    <section id="about" className="block block--dark" ref={this.refAbout} >
                        <AboutUs />
                    </section>
                    <section id="feature" className="block block--light" ref={this.refFeature}>
                        <Features />
                    </section>
                    <section id="app" className="block block--dark" ref={this.refApp}>
                        <Application />
                    </section>
                    <section id="contact" className="block" ref={this.refContact}>
                        <ContactUs />
                    </section>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </>
        )
    }
}

export default Home;