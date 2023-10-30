import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useReducer } from 'react'
import HomePage from './components/HomePage'
import Reservations from './components/Reservations'

const timeList = [
  {
    id: 0,
    time: '--',
    value: '',
  },
  {
    id: 1,
    time: '17:00 PM',
    value: '5-pm',
  },
  {
    id: 2,
    time: '18:00 PM',
    value: '6-pm',
  },
  {
    id: 3,
    time: '19:00 PM',
    value: '7-pm',
  },
  {
    id: 4,
    time: '20:00 PM',
    value: '8-pm',
  },
  {
    id: 5,
    time: '21:00 PM',
    value: '9-pm',
  },
  {
    id: 6,
    time: '22:00 PM',
    value: '10-pm',
  },
]

// reducer function
const updateTimes = (state, action) => {
  if (action) {
    return [...state]
  }
}

// initial state
const initializeTimes = [...timeList]

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/reservations",
      element:
        <Reservations
          availableTimes={availableTimes}
          dispatch={dispatch}
        />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
