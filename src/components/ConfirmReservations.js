import React from 'react'
import { Outlet, Link } from "react-router-dom";

const ConfirmReservations = () => {
    return (
        <div>
            <h1>The booking has been confirmed</h1>

            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default ConfirmReservations