import { render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { updateTimesReducer, initializeTimes } from './components/Main';

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

test('initializeTimes function returns expected value', async () => {
  const mockFn = jest.fn();
  const currentDate = new Date().toISOString().split('T')[0];
  const availableTimes = ['18:00', '20:00', '22:00'];

  expect(await initializeTimes(currentDate, mockFn)).toEqual(availableTimes);
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
