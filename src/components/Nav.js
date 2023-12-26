import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HeaderLogo from '../images/logo/header-logo.png'
import navStyle from './components.module.css/Nav.module.css'

const Nav = () => {
    return (
        <div className={navStyle.nav}>
            <Link to="/little-lemon-website">
                <img src={HeaderLogo} alt="logo" />
            </Link>

            <div className={navStyle.headerLogoLine}></div>

            <div className={navStyle.navList}>
                <ul>
                    <li>
                        <Link to="/little-lemon-website">Home</Link>
                    </li>
                    <li>
                        <Link to="/little-lemon-website/about">About</Link>
                    </li>
                    <li>
                        <Link to="/little-lemon-website/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/little-lemon-website/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/little-lemon-website/order-online">Order online</Link>
                    </li>
                    <li>
                        <Link to="/little-lemon-website/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav