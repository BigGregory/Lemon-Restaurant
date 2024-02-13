import BookingForm from './BookingForm';

const BookingPage = ({
  reserveTableData,
  setReserveTableData,
  availableTimes,
}) => {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        reserveTableData={reserveTableData}
        setReserveTableFormData={setReserveTableData}
        availableTimes={availableTimes}
      />
    </div>
  );
};

export default BookingPage;
