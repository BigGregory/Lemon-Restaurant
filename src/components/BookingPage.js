import BookingForm from './BookingForm';

const BookingPage = ({
  reserveTableData,
  setReserveTableData,
  availableTimes,
  setAvailableTimes,
}) => {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        reserveTableData={reserveTableData}
        setReserveTableData={setReserveTableData}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  );
};

export default BookingPage;
