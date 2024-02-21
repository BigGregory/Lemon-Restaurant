import React, { useState, useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitApi } from '../ApiMock';

import Home from './Home';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export const initializeTimes = async (selectedDate, dispatch) => {
  const availableTimes = await fetchAPI(selectedDate);
  dispatch({
    type: 'setAvaliableTime',
    payload: availableTimes,
  });
  return availableTimes;
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
  const navigateTo = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, []);

  const [userInputData, setUserInputData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: '',
    occasion: '',
  });

  const submitForm = (formData) => {
    submitApi(formData);
    setUserInputData({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });
    dispatch({
      type: 'setAvaliableTime',
      payload: [],
    });
    navigateTo('/confirm-booking');
  };

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
        <Route path="about" element={<h1>About</h1>} />
        <Route path="menu" element={<h1>Menu</h1>} />
        <Route
          path="reservation"
          element={
            <BookingPage
              userInputData={userInputData}
              setUserInputData={setUserInputData}
              availableTimes={availableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="order-online" element={<h1>Order Online</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="confirm-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};
export default Main;
