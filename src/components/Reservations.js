import React, { useState, useEffect } from 'react'
import reservationsStyle from './components.module.css/Reservations.module.css'
import Header from './Header'
import Footer from './Footer'
import reservationsHeaderLogo from '../images/logo/header-logo.png'
import reservationsFooterLogo from '../images/logo/footer-logo.png'

const Reservations = () => {
    return (
        <div>
            <Header />

            <div className={reservationsStyle.reservationsForm}>
                <form action="">
                    <div className={reservationsStyle.reservationsBox}>
                        <img src={reservationsHeaderLogo} alt="logo" className={reservationsStyle.headerLogo} />

                        <div className={reservationsStyle.headerLogoLine}></div>

                        <div className={reservationsStyle.reservationsLargePart}>
                            <div className={reservationsStyle.partOne}>
                                <div className={reservationsStyle.date}>
                                    <label htmlFor="date">Date</label>
                                    <input type="date" name="" id="date" />
                                </div>

                                <div className={reservationsStyle.guest}>
                                    <label htmlFor="guest">Number of guests</label>
                                    <select name="" id="guest">
                                        <option value="" selected>-- Guests</option>
                                        <option value="">02 Guests</option>
                                        <option value="">03 Guests</option>
                                        <option value="">06 Guests</option>
                                        <option value="">09 Guests</option>
                                        <option value="">12 Guests</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className={reservationsStyle.partTwo}>
                                <div className={reservationsStyle.time}>
                                    <label htmlFor="time">Time</label>
                                    <select name="" id="time">
                                        <option value="" selected>--:-- AM/ PM</option>
                                        <option value="">17:00 PM</option>
                                        <option value="">18:00 PM</option>
                                        <option value="">19:00 PM</option>
                                        <option value="">20:00 PM</option>
                                        <option value="">21:00 PM</option>
                                        <option value="">22:00 PM</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>

                                <div className={reservationsStyle.occasion}>
                                    <label htmlFor="occasion">Occasion</label>
                                    <select name="" id="occasion">
                                        <option value="" selected>--</option>
                                        <option value="">Birthday</option>
                                        <option value="">Engagement</option>
                                        <option value="">Anniversary</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type='submit'>Submit</button>

                        <div className={reservationsStyle.FooterLogoLine}></div>

                        <img src={reservationsFooterLogo} alt="logo" className={reservationsStyle.footerLogo} />
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Reservations