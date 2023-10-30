import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HeaderLogo from '../images/logo/header-logo.png'
import navStyle from './components.module.css/Nav.module.css'

const Nav = () => {
    return (
        <div className={navStyle.nav}>
            <Link to="/">
                <img src={HeaderLogo} alt="logo" />
            </Link>

            <div className={navStyle.headerLogoLine}></div>

            <div className={navStyle.navList}>
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
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order-online">Order online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav