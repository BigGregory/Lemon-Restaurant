import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { updateTimesReducer } from './components/Main';

test('Renders the BookingForm date choosing label', () => {
  const userInputData = {
    date: '2024-02-24',
    time: '',
    guests: '',
    occasion: '',
  };
  const availableTimes = ['17:00', '18:00'];
  render(
    <BookingForm
      userInputData={userInputData}
      availableTimes={availableTimes}
    />,
  );
  const dateChooseText = screen.getByLabelText(/choose date/i);
  expect(dateChooseText).toBeInTheDocument();
});

// TODO
test('initializeTimes function returns expected value', () => {
  expect(2 + 2).toEqual(4);
});

test('updateTimes reducer returns expected value', () => {
  const initialTimes = ['17:00'];
  expect(
    updateTimesReducer([], {
      type: 'setAvaliableTime',
      payload: ['17:00'],
    }),
  ).toEqual(initialTimes);
});
