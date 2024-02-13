import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import BookingPage from './BookingPage';

const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const Main = () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'setAvaliableTime':
        return [...state];
      default:
        return state;
    }
  };
  const initializeTimes = () => [...initialTimes];

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const [reserveTableData, setReserveTableData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route
          path="/reservation"
          element={
            <BookingPage
              reserveTableData={reserveTableData}
              setReserveTableData={setReserveTableData}
              availableTimes={availableTimes}
              setAvailableTimes={dispatch}
            />
          }
        />
        <Route path="/order-online" element={<h1>Order Online</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </main>
  );
};
export default Main;
