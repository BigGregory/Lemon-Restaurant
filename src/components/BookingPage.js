import BookingForm from './BookingForm';

const BookingPage = ({ userInputData, setUserInputData, availableTimes }) => {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        userInputData={userInputData}
        setUserInputData={setUserInputData}
        availableTimes={availableTimes}
      />
    </div>
  );
};

export default BookingPage;
