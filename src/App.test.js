import { render, screen } from '@testing-library/react';
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
  const availableTime = '18:00';

  expect(await initializeTimes(currentDate, mockFn)).toContain(availableTime);
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

describe('BookingForm inputs have correct validation attributes', () => {
  const userInputData = {
    date: '2024-02-24',
    time: '',
    guests: '11',
    occasion: '',
  };
  const availableTimes = ['17:00', '18:00'];
  beforeEach(() => {
    render(
      <BookingForm
        userInputData={userInputData}
        availableTimes={availableTimes}
      />,
    );
  });

  test('BookingForm date input is requiired', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
  });
  test('BookingForm time select is required', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });
  test('BookingForm guests number is required', () => {
    const gestsInput = screen.getByLabelText(/number of guests/i);
    expect(gestsInput).toHaveAttribute('required');
  });
  test('BookingForm occasion select is required', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});

test('BookingForm submit button is disabled', () => {
  const invalidInputData = {
    date: '2024-02-24',
    time: '',
    guests: '11',
    occasion: '',
  };
  const availableTimes = ['17:00', '18:00'];
  render(
    <BookingForm
      userInputData={invalidInputData}
      availableTimes={availableTimes}
    />,
  );

  const submitBtn = screen.getByRole('button');
  expect(submitBtn).toBeDisabled();
});
test('BookingForm submit button is enabled', () => {
  const validInputData = {
    date: '2024-02-24',
    time: '17:00',
    guests: '11',
    occasion: 'Birthday',
  };
  const availableTimes = ['17:00', '18:00'];
  render(
    <BookingForm
      userInputData={validInputData}
      availableTimes={availableTimes}
    />,
  );

  const submitBtn = screen.getByRole('button');
  expect(submitBtn).toBeEnabled();
});
