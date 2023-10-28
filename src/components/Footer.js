import React from 'react'
import { Outlet, Link } from "react-router-dom";
import FooterLogo from '../images/logo/footer-logo.png'
import footerStyle from './components.module.css/Footer.module.css'

const Footer = () => {
    return (
        <div className={footerStyle.footer}>
            <img src={FooterLogo} alt="logo" />

            <div className={footerStyle.footerList}>
                <div className={footerStyle.doormat}>
                    <h4>Doormat Navigation</h4>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/booking">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>

                <div className={footerStyle.contact}>
                    <h4>Contact</h4>

                    <ul>
                        <li>Address</li>
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </div>

                <div className={footerStyle.social}>
                    <h4>Social media links</h4>

                    <ul>
                        <li>Address</li>
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer