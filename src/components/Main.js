import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchAPI } from '../ApiMock';

import Home from './Home';
import BookingPage from './BookingPage';

export const initializeTimes = async (selectedDate, dispatch) => {
  const availableTimes = await fetchAPI(selectedDate);
  dispatch({
    type: 'setAvaliableTime',
    payload: availableTimes,
  });
};

export const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'setAvaliableTime':
      return [...action.payload];
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, []);

  const [userInputData, setUserInputData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: '',
    occasion: '',
  });

  useEffect(() => {
    initializeTimes(userInputData.date, dispatch).catch(console.error);
    setUserInputData((state) => {
      return {
        ...state,
        time: '',
      };
    });
  }, [userInputData.date]);

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
              userInputData={userInputData}
              setUserInputData={setUserInputData}
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
