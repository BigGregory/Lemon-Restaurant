import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, initialTimes, updateTimes } from './components/Main';

test('Renders the BookingForm date choosing label', () => {
  const reserveTableData = {
    date: '',
    time: '',
    guests: '',
    occasion: '',
  };
  const availableTimes = ['17:00', '18:00'];
  render(
    <BookingForm
      reserveTableData={reserveTableData}
      availableTimes={availableTimes}
    />,
  );
  const dateChooseText = screen.getByLabelText(/choose date/i);
  expect(dateChooseText).toBeInTheDocument();
});

test('initializeTimes function returns expected value', () => {
  expect(initializeTimes()).toMatchObject([...initialTimes]);
});

test('updateTimes function returns the same value', () => {
  expect(updateTimes(initialTimes, {})).toEqual(initialTimes);
});
