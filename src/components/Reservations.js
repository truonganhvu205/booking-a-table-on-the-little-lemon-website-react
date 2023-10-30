import React from 'react'
import ReservationsForm from './ReservationsForm'

const Reservations = (props) => {
    return (
        <div>
            <ReservationsForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Reservations