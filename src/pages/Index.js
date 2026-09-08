import React from "react";
import './Index.css';
import logo from '../assets/antonios_logo.png';
import clock from '../assets/clock.svg';
import geo from '../assets/geo-alt.svg';
import card from '../assets/credit-card.svg';

// Where the "What cloud am I on?" link points. The detection app is served at
// /cloud-home on this same host, so the default is relative: it works on the
// vanity domain and on cluster hostnames alike, and never sends a visitor to a
// different domain mid-demo. Override with REACT_APP_WHEREAMI_URL if needed
// (read at server start, like REACT_APP_API_DOMAIN_NAME).
// "Find Us" points at the real Sombrero Galaxy (Messier 104) — NASA's Hubble page.
const VISIT_URL =
    "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-104/";

const WHEREAMI_URL = process.env.REACT_APP_WHEREAMI_URL || "/cloud-home";

class Index extends React.Component {
    render() {
        return (
            <div className="landing">
                <header className="hero">
                    <img id="logo" src={ logo } alt="Antonio's Tacos"/>
                    <h1 className="tagline">Celebra el Martes de Mariscos con&nbsp;Nosotros</h1>
                    <p className="subline">
                        Street-style tacos, handmade tortillas, and salsas made fresh every morning.
                    </p>
                    <div className="cta-row">
                        <a href="/order/create" className="btn btn-primary">Order Online</a>
                        <a href={ VISIT_URL } target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Find Us</a>
                    </div>
                </header>

                <section className="menu-strip" aria-label="Menu highlights">
                    <div className="menu-item">
                        <span className="menu-emoji" role="img" aria-label="taco">🌮</span>
                        <h3>Tacos de Camarón</h3>
                        <p>Crispy shrimp, chipotle crema, pickled cabbage</p>
                        <span className="price">$4.50</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-emoji" role="img" aria-label="fish">🐟</span>
                        <h3>Baja Pescado</h3>
                        <p>Beer-battered cod, pico de gallo, lime</p>
                        <span className="price">$4.25</span>
                    </div>
                    <div className="menu-item">
                        <span className="menu-emoji" role="img" aria-label="bowl">🥑</span>
                        <h3>Ceviche Tostada</h3>
                        <p>Citrus-cured catch of the day, avocado</p>
                        <span className="price">$6.00</span>
                    </div>
                </section>

                <section className="info-row" id="visit">
                    <div className="info-card">
                        <img src={ clock } alt="" aria-hidden="true"/>
                        <h4>Hours</h4>
                        <p>Tue–Sun · 11am–9pm<br/>Mariscos Tuesdays all day</p>
                    </div>
                    <div className="info-card">
                        <img src={ geo } alt="" aria-hidden="true"/>
                        <h4>Location</h4>
                        <p>
                            <a className="location-link" href={ VISIT_URL } target="_blank" rel="noopener noreferrer">
                                104 Sombrero Galaxy Way<br/>Messier, MW 00104
                            </a>
                        </p>
                    </div>
                    <div className="info-card">
                        <img src={ card } alt="" aria-hidden="true"/>
                        <h4>Payment</h4>
                        <p>Cards, cash &amp; contactless<br/>Order ahead online</p>
                    </div>
                </section>

                <footer className="site-footer">
                    <span>© Antonio's Tacos</span>
                    <nav>
                        <a href="/order/create">Orders</a>
                        <a href="/admin">Admin</a>
                        <a href={ WHEREAMI_URL }>What cloud am I on?</a>
                    </nav>
                </footer>
            </div>
        );
    }
}

export default Index;
