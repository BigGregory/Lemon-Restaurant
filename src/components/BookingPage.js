import BookingForm from './BookingForm';

const BookingPage = ({
  userInputData,
  setUserInputData,
  availableTimes,
  setAvailableTimes,
}) => {
  return (
    <div className="booking-page content-container">
      <h1>Reserve a Table</h1>
      <BookingForm
        userInputData={userInputData}
        setUserInputData={setUserInputData}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  );
};

export default BookingPage;
